// Which Home Assistant states a render read (#130). Home Assistant hands a new `hass` object for every state change,
// several a second in a big home; the editor reads only a handful of them (the selected item's links, the devices on
// the plan). A render reads the states through `wrap(hass)` between `begin()` and `end()`, and `matters(old, next)`
// then tells whether a new hass changed anything that render used: if not, the editor need not render again.

import type { HomeAssistant } from "./types.ts";

type States = HomeAssistant["states"];

export class HassWatch {
  private watched = new Set<string>();
  /** The render went through all states (a list of entities): any state change matters. */
  private all = true;
  private active = false;
  private paused = 0;
  private wrapped = new WeakMap<object, HomeAssistant>();

  /** Start recording a render's reads (forgets the last render's). */
  begin(): void {
    this.watched.clear();
    this.all = false;
    this.active = true;
  }

  end(): void {
    this.active = false;
  }

  /** Run `fn` without recording what it reads (work whose result is kept until the registry changes). */
  pause<T>(fn: () => T): T {
    this.paused++;
    try {
      return fn();
    } finally {
      this.paused--;
    }
  }

  /** Between `begin()` and `end()`. */
  get rendering(): boolean {
    return this.active;
  }

  private get recording(): boolean {
    return this.active && !this.paused;
  }

  /** The hass a render reads: the same object for the same hass; it records state reads only while recording. */
  wrap(hass: HomeAssistant): HomeAssistant {
    const kept = this.wrapped.get(hass);
    if (kept) return kept;
    const states = this.watchStates(hass.states);
    const proxy = new Proxy(hass, {
      get: (target, key, receiver) => (key === "states" ? states : Reflect.get(target, key, receiver)),
    });
    this.wrapped.set(hass, proxy);
    return proxy;
  }

  private watchStates(states: States): States {
    if (!states) return states;
    return new Proxy(states, {
      get: (target, key, receiver) => {
        if (typeof key === "string" && this.recording) this.watched.add(key);
        return Reflect.get(target, key, receiver);
      },
      has: (target, key) => {
        if (typeof key === "string" && this.recording) this.watched.add(key);
        return Reflect.has(target, key);
      },
      ownKeys: (target) => {
        if (this.recording) this.all = true;
        return Reflect.ownKeys(target);
      },
    });
  }

  /** Whether going from `old` to `next` changes anything the last render read. */
  matters(old: HomeAssistant | undefined, next: HomeAssistant | undefined): boolean {
    if (!old || !next || this.all) return true;
    const a = old as unknown as Record<string, unknown>;
    const b = next as unknown as Record<string, unknown>;
    for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) if (key !== "states" && a[key] !== b[key]) return true;
    if (old.states === next.states) return false;
    if (Object.keys(old.states ?? {}).length !== Object.keys(next.states ?? {}).length) return true;
    for (const id of this.watched) if (old.states[id] !== next.states?.[id]) return true;
    // the same number of entities: one that went and another that came shows as a watched-for id or not at all
    for (const id in next.states) if (!(id in old.states)) return true;
    return false;
  }
}

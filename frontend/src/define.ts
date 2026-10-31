// Defines our custom elements so that Home Assistant's element registry knows them, whichever script runs first (#218).
//
// Home Assistant's page imports our main bundle (an "extra module") next to its own app script, and that script
// installs the scoped custom element registry polyfill first thing: it replaces `window.customElements` with a
// registry of its own and `window.HTMLElement` with a constructor that only builds classes defined in that registry.
// When our bundle wins the race, its elements land in the browser's own registry, which the polyfill does not know:
// - `customElements.get("home-3d-card")` says undefined, so dashboards wait for a card that is there, and the card
//   loader imports a second copy of the bundle;
// - the first element of ours defined after the polyfill (a lazy chunk, such as the 3D view) makes the polyfill hang
//   its HTMLElement under our shared Lit base class; from then on every element defined before can no longer be
//   built ("Illegal constructor (custom element class must be registered with global customElements registry to be
//   newable)"), so the panel Home Assistant creates when the user comes back to it stays blank.
// So each element we define is remembered (on the page, shared by every copy of the bundle), and once the registry has
// been replaced the earlier ones are defined in the new one too: when Home Assistant defines <home-assistant> (right
// after the polyfill) and before each later define, so before the polyfill can touch our base class. The polyfill
// then keeps using the browser's definition for those tags and builds them again. A copy of an older build keeps no
// record: a tag the browser already builds a class for is carried over with that class (see builtByTheBrowser).
// A later copy never defines its own class for a tag that is taken, so only one copy's elements are ever built.

interface Defined {
  cls: CustomElementConstructor;
  /** the registry it is defined in (the first one, then the one it was carried over to) */
  registry: CustomElementRegistry;
}

interface Shared {
  defined: Map<string, Defined>;
  watching: boolean;
}

const KEY = Symbol.for("home-3d.custom-elements");

function shared(): Shared {
  const page = globalThis as unknown as Record<symbol, Shared | undefined>;
  return (page[KEY] ??= { defined: new Map(), watching: false });
}

/** Defines the elements defined in an earlier registry in the current one, once `window.customElements` changed. */
export function adoptElements(): void {
  const registry = globalThis.customElements;
  if (!registry) return;
  for (const [tag, d] of shared().defined) {
    if (d.registry === registry) continue;
    d.registry = registry;
    if (registry.get(tag)) continue;
    try {
      registry.define(tag, d.cls);
    } catch (err) {
      console.warn(`Home 3D: could not define ${tag} in the page's element registry`, err);
    }
  }
}

/**
 * The class the browser builds for this tag when the current registry does not know it: one another copy of the bundle
 * defined in the browser's own registry and kept no record of (a build before #218, served from a cache next to a
 * newer one). The browser keeps building that class for the tag whatever is defined later, so it is the one the new
 * registry has to know. Undefined when the browser has nothing for the tag (a plain element comes back).
 */
function builtByTheBrowser(tag: string, cls: CustomElementConstructor): CustomElementConstructor | undefined {
  if (typeof document === "undefined") return undefined;
  let probe: Element;
  try {
    probe = document.createElement(tag);
  } catch {
    return undefined;
  }
  const proto = Object.getPrototypeOf(probe) as object | null;
  // a plain element for a tag nothing defined; HTMLUnknownElement when that class could not be built any more
  if (proto === HTMLElement.prototype || probe instanceof HTMLUnknownElement || !(probe instanceof HTMLElement)) return undefined;
  const ctor = probe.constructor as CustomElementConstructor;
  return ctor === cls ? undefined : ctor;
}

/** `customElements.define`, once per tag (a second copy of the bundle leaves the first one's), see above. True when
 * this call defined it. */
export function defineElement(tag: string, cls: CustomElementConstructor): boolean {
  adoptElements();
  const registry = globalThis.customElements;
  if (registry.get(tag)) return false;
  const s = shared();
  // a copy with no record got there first: its class is carried over, ours is not defined (it would never be built)
  const theirs = builtByTheBrowser(tag, cls);
  if (theirs) {
    try {
      registry.define(tag, theirs);
      s.defined.set(tag, { cls: theirs, registry });
    } catch (err) {
      console.warn(`Home 3D: could not define ${tag} in the page's element registry`, err);
    }
    return false;
  }
  registry.define(tag, cls);
  s.defined.set(tag, { cls, registry });
  if (!s.watching) {
    s.watching = true;
    // Home Assistant defines <home-assistant> right after its polyfill; in its own registry that resolves either way
    void registry.whenDefined("home-assistant").then(adoptElements);
  }
  return true;
}

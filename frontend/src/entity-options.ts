// The entity lists of the editor's link pickers (#130). Made from every state in Home Assistant (thousands), so they
// are kept per list until an entity comes or goes, or the entity, device or area registry changes: a state change
// alone (several a second) reuses them. A list is found by a key naming it (a filter closure is new on every render).

import { entityName } from "./devices.ts";
import type { HomeAssistant } from "./types.ts";

export interface EntityOption {
  id: string;
  label: string;
}

type Filter = (id: string) => boolean;

/** Every entity the filter accepts, labelled "name · area" and sorted by that label. */
export function entityOptionList(hass: HomeAssistant | undefined, filter: Filter): EntityOption[] {
  if (!hass) return [];
  const areaName = (id: string) => {
    const entry = hass.entities?.[id];
    const area = entry?.area_id ?? (entry?.device_id ? hass.devices?.[entry.device_id]?.area_id : null);
    return area ? hass.areas?.[area]?.name : undefined;
  };
  return Object.keys(hass.states ?? {})
    .filter(filter)
    .map((id) => {
      const area = areaName(id);
      return { id, label: `${entityName(hass, id)}${area ? ` · ${area}` : ""}` };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

export class EntityOptionCache {
  private byKey = new Map<string, EntityOption[]>();
  private byFilter = new WeakMap<Filter, EntityOption[]>();
  private snapshot: { entities: unknown; devices: unknown; areas: unknown; count: number } | null = null;

  /** The list under `key` (a name, or a filter function that stays the same), made with `filter` when not kept. */
  get(hass: HomeAssistant | undefined, key: string | Filter, filter: Filter): EntityOption[] {
    this.check(hass);
    const kept = typeof key === "string" ? this.byKey.get(key) : this.byFilter.get(key);
    if (kept) return kept;
    const list = entityOptionList(hass, filter);
    if (typeof key === "string") this.byKey.set(key, list);
    else this.byFilter.set(key, list);
    return list;
  }

  /** Forget every list when an entity came or went or a registry changed. */
  private check(hass: HomeAssistant | undefined): void {
    const s = this.snapshot;
    const count = Object.keys(hass?.states ?? {}).length;
    if (s && s.entities === hass?.entities && s.devices === hass?.devices && s.areas === hass?.areas && s.count === count) return;
    this.snapshot = { entities: hass?.entities, devices: hass?.devices, areas: hass?.areas, count };
    this.byKey.clear();
    this.byFilter = new WeakMap();
  }
}

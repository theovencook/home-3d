// Parts of the panel and the card that are chunks of their own (#245, lazy-part.ts): Home Assistant loads the main bundle
// on every page, and these show only after a tap (the room panel) or only to editors (the home switcher).

import { once } from "./lazy-part.ts";

/** The room panel (<fp3d-room-panel>): it loads with the 3D view (loadView), so a tapped room rarely waits. */
export const loadRoomPanel = once(() => import("./components/room-panel.ts"));
/** The home switcher (<fp3d-home-switcher>) in the panel's header, for editors. */
export const loadHomeSwitcher = once(() => import("./components/home-switcher.ts"));
/** The View panel (<fp3d-view-panel>, #247) on the 3D view: loaded when the View button is first pointed at or pressed. */
export const loadViewPanel = once(() => import("./components/view-panel.ts"));
/** The Rooms picker (<fp3d-rooms-picker>, #249) on the floor bar: loaded when the Rooms button is first pointed at or pressed. */
export const loadRoomsPicker = once(() => import("./components/rooms-picker.ts"));

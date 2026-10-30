# Performance: editor and tablet lag (spike #97)

Measured 30 Oct 2026 on a live Home Assistant install. HA was running the issue-111 build (core pack split, about `63b3083`); this file sits on `integration` @ `0d8ac43`. It was a read-only run: no deploy, no restart, no building saved. No home was changed.

This is the first measured baseline. Earlier notes have no numbers, only the sample home review's "UI feedback lags about 2 s", which was never checked outside the automation browser. Later speed checks should be compared against the tables below.

## Method

- **Browser:** the built-in browser pane (Chromium 152) on the desktop: 24 cores, a 240 Hz display (one rAF is about 4.2 ms) and a desktop GPU. The tab was emulated at 1280 x 800 CSS px at DPR 1, which is the assumed wall-tablet size, and the pane was in front. Two homes were used: **Large home** (~500 items, ~1.1 MB building) and **Sample home** (~110 items, ~245 KB). HA has about 4,900 entities in `hass.states`.
- **Timing:** everything was timed from page JS with `performance.now()`. Each measure starts when the event is dispatched. It ends when the editor's Lit `updateComplete` resolves and a task is posted from the next `requestAnimationFrame` ("to paint"). The editor's own methods (`update`, `render`, `renderSide`, `entityOptions`, `updated`, `change` ...), the view3d methods and the `FloorplanViewer` methods were wrapped with timers to split the cost. The wrappers were removed for the headline selection run. Long Animation Frames (`long-animation-frame` observer) gave long tasks and their invokers.
- **Input:** plan presses, moves and typing were synthetic `PointerEvent`, `InputEvent` and `KeyboardEvent`s dispatched on the plan SVG or the field, so they ran through the editor's real handlers.
- **Safety:** during the editor runs, `home_3d/building/save` was blocked at the websocket, and `building-changed` was stopped at the panel. Edits stayed local, were undone, and the document was compared with the one before.
- **Repeats:** each measure ran at least 5 times; most ran 15 to 150 times. The tables show **median / worst**.
- **CPU throttling was not available.** The pane offers viewport size and colour scheme only, with no DevTools protocol, and signing a separate automation browser in to HA was not allowed. So the **4x and 6x columns are estimates**: the 1x time to paint multiplied by 4 or 6. That is roughly what DevTools CPU throttling does to main-thread work. It ignores GPU and network time and hides nothing.
- **A budget wall tablet (Fire HD 10 class)** is roughly a 4x to 6x slower CPU and a far weaker GPU. On it, Auto quality resolves to **low**, because `isLowEnd()` matches the `KF..`/Silk user agent, and sensor-only 3D syncs are paced to one every 2 s (`lowSyncDelay`).

## Budget

The budget is **under 100 ms from a selection press to the updated panel**.

## Results

### Selection: press an item, panel updated and painted

| Home | 1x median / worst | 4x est. | 6x est. |
|---|---|---|---|
| sample home (20 presses, no wrappers) | 62 / 87 ms | 250 / 347 ms | 374 / 520 ms |
| Home (20 presses, no wrappers) | 62 / 166 ms | 250 / 664 ms | 374 / 996 ms |
| sample home (15, instrumented) | 71 / 97 ms | 284 / 389 ms | 427 / 583 ms |
| Home (15, instrumented) | 103 / 227 ms | 410 / 908 ms | 615 / 1362 ms |

Within budget at 1x on median. **Over budget at 4x and 6x on both homes**, and over budget on Home's worst case even at 1x.

Where the time goes in one selection (sample home, median of 8):

| Cost | Time |
|---|---|
| `render()` | 25 ms |
| `renderSide` -> `renderFurnitureForm` | 24 ms |
| `entityOptions` (the entity lists of the item's link pickers) | **21 ms** |
| `updated()`: forced layout from the `.fp3d-side` scrollTop reset (#71) and the `select option[selected]` loop | 20 ms |
| Plan SVG (`renderFurniture`, `renderOpenings`, walls, rooms) | under 2 ms together |
| `pointerDown`, `pickItem` (#72), `selectItem` (#56) | under 0.3 ms |

The plan SVG is cheap. The item form, mostly its entity option lists, and the forced layout make up the cost.

### Background load while nothing happens (10 s, editor open, 3D beside on)

| State | Editor renders | Editor render time | `entityOptions` | 3D `syncDevices` | Long frames |
|---|---|---|---|---|---|
| Home, item selected | 4.9 /s | **168 ms/s** | 106 ms/s | 96 ms/s | 258 ms/s, worst 275 ms |
| Home, nothing selected | 1.8 /s | 8 ms/s | 0 | 30 ms/s | 46 ms/s, worst 101 ms |
| Sample, item selected | 4.2 /s | 81 ms/s | 64 ms/s | 5 ms/s | 5 ms/s |
| Sample, nothing selected | 2.2 /s | 5 ms/s | 0 | 2 ms/s | 0 |

Every `hass` update (several a second) re-renders the whole editor. With an item open, each render rebuilds and sorts the entity option lists over all ~4,900 states. The `_optionsMemo` WeakMap is keyed on the filter closure, and that closure is new on every render, so it never hits. On the large home with an item selected, **about 26% of the main thread is busy at 1x with no input at all**. At 4x that is about 100%, so input queues behind it. This is the best candidate for the "about 2 s lag" in the review.

View mode (no editor), Home: `syncDevices` ran 20 times in 10 s, 16 ms on average and 83 ms at worst, plus `trailNow` and `detectionPins` at about 20 ms each. That gave 3 frames over 100 ms in 10 s. Desktop syncs on every sensor tick; only the low tier paces them.

### Typing in a number field (X of an item)

| Home | Keystroke to paint | Commit (Enter) to paint | Longest frame in the 700 ms after the commit |
|---|---|---|---|
| sample home | 4.5 / 5.9 ms | 36 / 47 ms | 124 / 137 ms (3D-beside rebuild 79 ms) |
| Home | 5.8 / 6.9 ms | 52 / 897 ms | **581 / 643 ms** |

Keystrokes are cheap: `TypedCommit.input` doesn't re-render. Each commit sets a new document. After the 150 ms `queue3d` debounce, the 3D-beside view runs a full `FloorplanViewer.rebuild` (410 to 545 ms on Home) plus `syncDevices` (about 150 ms). The page freezes for about 0.6 s after every typed value, every nudge and every drop. At 4x to 6x that is 2.3 to 3.9 s.

### Drag an item (30 moves x 5 drags)

| Home | Move to paint | About | Longest frame after the drop |
|---|---|---|---|
| sample home | 38 / 561 ms (one outlier) | 26 fps | 134 / 165 ms |
| Home | 53 / 172 ms | 19 fps | **632 / 711 ms** |

Per move on Home: 26 ms of editor render, 22 ms of it the item form (16 ms `entityOptions`), and 8 ms of `change()`, which `structuredClone`s the whole 1 MB building on every pointermove. At 4x a drag runs at about 5 fps. The 3D view isn't rebuilt during the drag (debounced), only after the drop.

### Doors & windows tool hover (#62), 40 moves across the house

| Home | Select tool, move to paint | Doors & windows tool, move to paint | Handler only |
|---|---|---|---|
| sample home | 4.2 / 4.4 ms | 5.9 / 7.4 ms | under 1 ms |
| Home | 11 / 33 ms | **36 / 125 ms** | 3.3 / 6.6 ms (`hoverOpening` 0.5 ms) |

The nearest-wall and `generateWalls` work per mousemove is cheap (0.5 ms). The cost comes from the whole editor re-rendering whenever the hover hint text changes.

### Library search per keystroke (#78)

1,535 entries; 43 keystrokes over "sofa", "double bed", "smoke alarm", "radiatr", "bambu x1c" and "tv".

| Run | Keystroke to paint | Library `render` |
|---|---|---|
| Editor on the large home | 30 / 180 ms | 4.2 / 17.9 ms |
| Editor on sample home | 14 / 203 ms | not measured |

Ranking and fuzzy matching are cheap. The worst cases are the first letters (many cards to lay out) and keystrokes that land on a `hass` re-render.

### Editor open (View -> Editor tab, 3D beside on)

| Home | Ready (plan painted) | Settled (no long frames) |
|---|---|---|
| Home, first open (editor bundle from cache) | 895 ms | 1,676 ms |
| Home, again x5 | 946 / 1,213 ms | 1,956 / 2,308 ms |
| sample home x5 | 279 / 412 ms | 279 / 412 ms |

On the large home the first frame is one ~650 ms task. The new 3D-beside viewer's `rebuild` takes 390 ms and two `syncDevices` calls take 96 ms each. The editor's own first render is about 30 ms.

### Panel load (/home_3d, View tab, Home, 1280 x 800)

| Load | Building arrived | First 3D frame | Settled | Total blocking |
|---|---|---|---|---|
| Warm (service worker active) x5 | 1.0 to 2.1 s | 2,106 / 2,132 ms | 2,108 / 2,635 ms | 1.1 to 1.5 s |
| Cold (service worker unregistered, Cache Storage cleared) x5 | 1.8 to 2.0 s | 1,922 / 2,021 ms | 1,919 / 2,018 ms | 1.06 to 1.14 s |

- **The cold row isn't network-cold.** The browser's HTTP disk cache can't be cleared from the page, so all bundles came from it (transferSize 0), and cold and warm load alike.
- **Network on top.** Fetching a bundle with `cache: "no-store"` took `home-3d.js` (769 KB, 250 KB gzip) 59 / 212 ms and `home-3d-3d.js` (867 KB, 268 KB gzip) 58 / 206 ms. `packs/list` is 525 KB in 48 ms (#111). `building/get` takes 74 ms for the large home (~1.1 MB) and 36 ms for sample home (245 KB).
- **One long task.** Every load had a single ~1.0 s task (websocket message -> building -> 3D build -> device sync) before the first 3D frame.

Switching homes in the same page:

| Switch | Data | Longest task | Settled |
|---|---|---|---|
| To Home x5 | 1,629 / 1,690 ms | 1,363 / 1,458 ms | 3,827 / 4,185 ms |
| To sample home x5 | 625 / 663 ms | 566 / 591 ms | 1,683 / 3,051 ms |

A switch to Home runs `viewer.rebuild` 3 times (896 ms: `setBuilding` plus a `setPacks` rebuild) and `syncDevices` 8 times (1,037 ms).

### 3D frame cost per look and quality

One forced `render()` plus a 1-pixel `readPixels`, so CPU and GPU together, 40 frames each, 1224 x 680 canvas at DPR 1. The columns are frame median / worst and theme switch + first frame (shader compile).

Home (~374k triangles):

| Quality | Neon | Day | High contrast | Realistic |
|---|---|---|---|---|
| Auto (desktop = normal) | 2.8 / 5.9 ms, switch 112 ms | 4.2 / 10.1 ms, switch 506 ms | 2.7 / 4.2 ms, switch 502 ms | 6.6 / 10.4 ms, switch **1,346 ms** |
| Low | 1.3 / 2.0 ms, switch 472 ms | 1.2 / 2.4 ms, switch 356 ms | 1.2 / 3.3 ms, switch 413 ms | 3.2 / 4.8 ms, switch 1,292 ms |
| High | 2.9 / 5.8 ms, switch 579 ms | 3.0 / 4.6 ms, switch 416 ms | 2.6 / 3.9 ms, switch 498 ms | 4.2 / 7.6 ms, switch 531 ms |

sample home (~86k triangles):

| Quality | Neon | Day | High contrast | Realistic |
|---|---|---|---|---|
| Auto | 2.2 / 6.8 ms, switch 85 ms | 2.1 / 2.6 ms, switch 80 ms | 2.2 / 4.7 ms, switch 82 ms | 3.6 / 6.2 ms, switch 177 ms |
| Low | 1.2 / 3.4 ms, switch 163 ms | 1.2 / 2.0 ms, switch 76 ms | 1.2 / 2.4 ms, switch 66 ms | 1.7 / 2.8 ms, switch 175 ms |
| High | 1.9 / 5.3 ms, switch 166 ms | 1.7 / 3.1 ms, switch 88 ms | 1.8 / 6.6 ms, switch 82 ms | 3.3 / 5.7 ms, switch 172 ms |

- **Frames.** Steady frames are cheap on a desktop GPU, and the new theme shaders (#85 to #88) add no measurable per-frame cost here. Realistic is the most expensive look, at 1.5x to 2.5x Neon and with extra geometry on Auto/High.
- **Switches.** A look or quality switch compiles shaders (up to 1.3 s for Realistic on Home), and `setQuality` builds a new WebGL context (80 to 136 ms).
- **On the tablet**, Auto = Low, so expect Low-row costs times a big GPU factor. That can't be estimated from here.
- **Per-frame CPU in View mode on Home:** `viewer.render` takes 3.4 ms per frame, 1.5 ms of it `stepOpenings`.

## Over budget (proven)

1. **Selection:** at 4x and 6x on both homes (250 to 1,000 ms against 100 ms), and on Home's worst case at 1x (166 to 227 ms).
2. **Idle background re-renders:** with an item open on Home, about 26% of the main thread at 1x, which saturates it at 4x.
3. **3D-beside full rebuild after every edit or drop:** 0.6 s freeze on the large home at 1x, about 2.4 to 3.6 s at 4x to 6x.
4. **Drag on Home:** about 19 fps at 1x, about 5 fps at 4x.
5. **Panel load and home switch:** a single 1.0 to 1.45 s main-thread task on Home, about 4 to 6 s at tablet speed.
6. **Doors & windows hover on Home:** 125 ms worst at 1x.
7. **Library first keystrokes:** 180 to 200 ms worst at 1x.

## Proven lag -> proposed fix tickets

1. **Cache the entity option lists across editor renders.** `entityOptions` memoises on the filter closure, which is new on every render, so all ~4,900 states are filtered and sorted again on every render (21 of 25 ms per selection, 106 ms/s idle on Home). Key the memo on a stable filter id plus the `hass.entities` and states-count snapshot, or build the lists once per registry change.
2. **Stop re-rendering the whole editor on every `hass` update.** Each state change re-renders plan and panel together (168 ms/s on the large home with an item open). Split the item form into child components (`shouldUpdate` on their own watched entity ids), and keep `hass` out of the plan's render path.
3. **Update the 3D-beside view incrementally instead of a full rebuild per edit.** Every committed edit, nudge or drop calls `FloorplanViewer.setBuilding` -> `rebuild`: 410 to 545 ms on the large home plus `syncDevices` about 150 ms. Diff the plan and rebuild only the changed item, opening or room, or rebuild in idle slices.
4. **Pace and narrow view3d `syncDevices` on every tier.** On desktop each sensor tick runs a full sync (16 ms average, 83 to 130 ms worst on Home, 2 to 5 times a second). Use the 2 s sensor-only pacing for all tiers, or update only the changed entities' markers, labels and cards (`detectionPins`, `trailNow` about 20 ms each).
5. **Split the building load and home switch into frames, and drop the duplicate rebuilds.** Load is one ~1.0 s task and a switch to Home one 1.36 s task. A switch rebuilds the scene 3 times (`setBuilding` plus a `setPacks` rebuild). Build once, per floor across frames, current floor first.
6. **Remove the forced layout in the editor's `updated()` on selection.** The `.fp3d-side` scrollTop reset (#71) and the `select option[selected]` pass force a synchronous layout of 20 to 30 ms per selection. Run the reset only when scrollTop > 0, and run the option fix only for the selects that changed.
7. **Make drag moves cheap.** Each pointermove `structuredClone`s the whole building (8 ms on Home) and re-renders the item form (22 ms). Clone only the affected floor or item while dragging, and freeze the side panel until the drop.
8. **Doors & windows hover hint without a full editor render.** The hint text change on mousemove (#62) re-renders the editor (36 ms median, 125 ms worst on Home). Keep `_openingHover` out of reactive state and write the hint into a small child element.
9. **Precompile look shaders and ease look and quality switches.** A look switch compiles shaders for up to 1.3 s (Realistic on Home), and a quality switch makes a new WebGL context. Use `renderer.compileAsync` before the swap, show a short "Switching look" state, and keep the old frame until the new one is ready.
10. **Smooth the library's first keystrokes.** The median keystroke is fine (14 to 30 ms), but one- and two-letter queries reach 180 to 200 ms laying out many cards. Debounce about 80 ms, or cap or virtualise the result cards until 3 letters are typed.

## Not measured (limits)

- **A real wall tablet.** All 4x and 6x figures are scaled estimates; real numbers need the device. The tablet's GPU can't be estimated from a desktop GPU at all.
- **Real CPU throttling:** not available in the built-in browser pane.
- **Network-cold load:** the HTTP disk cache can't be cleared from the page. The bundle fetch times above are the network part.
- **Trusted input via the Event Timing API:** the pane was 229 px wide, so coordinate clicks on the scaled 1280 x 800 page weren't reliable. All input was synthetic events through the real handlers.
- **Phone (#93 and #94) and touch long-press paths.**

## Racks (#121)

Measured 30 Oct 2026, before (integration @ `29a6b81`) and after the #121 change, on the same local plan. No Home Assistant was involved.

### What changed

- **One geometry per rack, not part of the floor's.** A rack's gear used to be drawn into the floor's walls geometry, so it was built with every floor rebuild and drawn twice (the wall pass and the glass-wall pass). Now the floor build leaves it out (`build.ts` `FloorGeometry.racks`), and the viewer gives each rack its gear as one mesh plus one set of edges (`buildRackGear`).
- **Full detail only near the camera.** Further away, each piece of gear is one plain box in its biggest front part's colour, about 12 triangles a piece ("slab", `furniture.ts gearSlab`). The full detail is built the first time the camera comes within 6 m (3.6 m on the tablet level) and kept until the next rebuild. It turns back into slabs past 7 m (4.2 m on the tablet level). The distances are constants in `viewer/rack-lod.ts`. The status LEDs (#119) are unchanged and show on both.
- **Taps** hit the gear mesh as part of the rack, so the gear under the tap still opens (`pick`, `furnitureAt`).
- **Part limits** are unchanged. Gear stays as separate pack items, each under the 60-part cap. A rack holds at most 60 slots. In slab form a full rack costs about 12 triangles per slot, however detailed its gear's recipes are.

### Method

- **Browser:** headless Edge (Chromium) through puppeteer on the same desktop: RTX 3080 over D3D11, a 1280 x 800 page at DPR 1 and a 1224 x 680 canvas. This time **real CPU throttling** was used (DevTools `Emulation.setCPUThrottlingRate` 4x), not the 1x times multiplied by 4.
- **Plan:** a local harness plan with 5 rooms, 60 ordinary items, a **42U floor cabinet holding 40 devices** and a **9U wall cabinet holding 6**. The devices are real `theovencook.it/network` ids (#117): UDM Pro Max, USW Pro 48 / Max 48 / HD 24 / XG 24, UNVR (Pro), servers, NAS units, UPSs, PDUs (two 0U lanes), patch, brush and blanking panels, cable managers, two half-width units side by side, and one rear-face panel. Half of the slots are linked, so they get LEDs. `rackMisfits` was empty for both racks.
- **Measures**, as in #97: floor build (`buildFloorGeometry`, 15 times), the whole `setBuilding` rebuild (8 times), and frame time as one `render()` plus a 1-pixel `readPixels`, 40 frames after 15 warm-up frames. Frames were taken near the rack (1.6 m), mid-room (5.7 m) and from across the house (20 m). Draw calls and triangles come from `renderer.info`. Also measured: a 3D tap on the rack (`pick` + `rackHit`, 30 times), a 3D selection plus a frame (20 times), and the editor selection with 3D beside on (a press on the rack in the plan, timed to the updated panel painted, 20 presses alternating with a sofa). Each run was repeated 3 times at 1x and 2 times at 4x. The tables show **median / worst**.
- An "empty racks" plan (the same racks with no gear) gives the floor's own cost.

### Results at 1x

| Measure | Empty racks | Before | After |
|---|---|---|---|
| Floor build | 6.0 / 23 ms | 12.7 / 32 ms | **6.4 / 23 ms** |
| `setBuilding` (whole rebuild) | 10.9 / 19 ms | 15.5 / 28 ms | **11.6 / 22 ms** |
| First approach (detail built once) | - | - | 7.3 ms |
| Triangles drawn, near / far | 13,546 | 27,974 / 27,974 | **20,898 / 14,390** |
| Draw calls, near / far | 8 / 10 | 9 / 11 | 13 / 15 |
| Frame near the rack | 0.5 / 1.0 ms | 0.5 / 2.4 ms | 0.7 / 1.9 ms |
| Frame from across the house | 0.5 / 0.8 ms | 0.5 / 3.6 ms | 0.5 / 1.6 ms |
| 3D tap on the rack | 0.2 / 2.5 ms | 0.5 / 2.5 ms | 0.3 / 2.9 ms |
| 3D selection + frame | 2.4 / 7.0 ms | 2.5 / 7.7 ms | 2.3 / 8.6 ms |
| Editor: select the rack | 6.6 / 12 ms | 13.3 / 30 ms | 13.6 / 27 ms |
| Editor: select another item | 6.5 / 54 ms | 6.8 / 43 ms | 6.8 / 39 ms |

### Results at 4x CPU throttling

| Measure | Before | After |
|---|---|---|
| Floor build | 60 / 170 ms | **32 / 124 ms** |
| `setBuilding` (whole rebuild) | 78 / 127 ms | **58 / 122 ms** |
| First approach (detail built once) | - | 29 ms |
| Frame near the rack | 2.2 to 4.2 / 8.3 ms | 1.4 to 2.4 / 3.8 ms |
| Frame from across the house | 1.9 to 2.2 / 4.7 ms | 1.3 to 2.1 / 3.0 ms |
| 3D tap on the rack | 2.5 / 13 ms | 1.5 / 12 ms |
| 3D selection + frame | 7.0 / 14 ms | 5.6 / 11 ms |
| Editor: select the rack | 76 / 150 ms | 77 / 163 ms |
| Editor: select another item | 37 / 275 ms | 38 / 240 ms |

### Findings

- **Build:** the 46 devices now add about 0.4 ms at 1x to the floor build and to every rebuild (before: 6.7 ms at 1x; at 4x a floor build went from 60 to 32 ms). That cost is paid on every 3D-beside rebuild after an edit (#97 over-budget item 3). The detail costs about 7 ms at 1x (29 ms at 4x) once, when the camera first comes near.
- **GPU:** from across the house the full rack draws 844 triangles instead of 14,428, about 6% of before. Near it, the detail is 7,350 triangles, about half of before, because the walls' glass pass no longer draws it a second time. Each rack adds 2 draw calls (its gear and its edges). On a desktop GPU the frame time doesn't change in a way that can be measured (well under 1 ms either way). The tablet's GPU can't be measured from here.
- **Selection:** the 3D tap and 3D selection are unchanged. Selecting the rack in the editor stays about 2x an ordinary item (13 ms against 7 ms at 1x, 77 ms against 38 ms at 4x), before and after. That cost is the item panel: the rack's form and its front elevation SVG (#115/#119). It is not the 3D, and it is a candidate for its own ticket.
- **Hot path:** the floor build (`buildFloorGeometry`) and the 3D frame (`updateRackDetail` runs before every frame, a few distance checks per rack).

### Not measured (still to measure)

- A real wall tablet and its GPU, and the live Home with a real rack:.
- How the slab looks against the detail at the switch distance: checked by eye in the harness on the desktop only.

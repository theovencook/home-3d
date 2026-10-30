# Rack frames checklist (#116)

Every empty rack in the IT & network pack (`theovencook.it`, `network/rack_*.json`), with its external size
(W x D x H, mm), its U count and where the size comes from. The files are written by `node tools/rack-frames.ts` from
`frontend/src/rack-catalogue.ts`; edit the list there, not the JSON.

Status: **verified** = two or more retailer or maker listings agree (no maker datasheet could be opened, so none is
"datasheet-checked"); **single** = one listing; **derived** = worked out from a sibling model (no listing found for
that exact size), check before relying on it; **generic** = a typical size, no specific product.
Retailer listings often disagree by 5-10 mm on height (castors, lids); the figure below is the one most listings give.
U space is 44.45 mm per U and sits inside the height with room for plinth or castors.

## 10-inch (254 mm panel)

| id | U | W x D x H | Source | Status |
|---|---|---|---|---|
| `rack_mini_10in_4u` | 4 | 280 x 200 x 274 | DeskPi RackMate T0, listed at Pi Hut and OZ Robotics (280x200x274 external) | verified |
| `rack_mini_10in_6u` | 6 | 280 x 200 x 320 | #112 starter, DeskPi-class footprint; no 6U DeskPi exists | generic |
| `rack_mini_10in_8u` | 8 | 280 x 200 x 406 | DeskPi RackMate T1: cnx-software, PLE, OZ Robotics (406 x 280 x 200) | verified |
| `rack_wall_frame_10in_6u` | 6 | 280 x 150 x 310 | no product found; typical 10" 6U wall bracket | generic, unverified |
| `rack_wall_cabinet_10in_6u` | 6 | 280 x 310 x 336 | Lanberg WF10-2306 (Aspen, Proshop DK) | verified |
| `rack_wall_cabinet_10in_9u` | 9 | 280 x 310 x 469 | Lanberg WF10-2309 (Aspen, Skroutz) | verified |

Other 10" wall cabinets (LogiLink W66Z30, Roline) are 312-320 x 300 x 312-330: not used.

## 19-inch desktop and wall frames (open)

| id | U | W x D x H | Source | Status |
|---|---|---|---|---|
| `rack_desktop_frame_12u` | 12 | 504 x 292 x 584 | StarTech RK12OD, 2-post desktop (SHI, Brokerbin, IP Security Depot) | verified |
| `rack_desktop_frame_9u` | 9 | 504 x 292 x 451 | RK12OD less 3U (133 mm); no 9U listing found | derived, unverified |
| `rack_desktop_frame_6u` | 6 | 504 x 292 x 317 | RK12OD less 6U (267 mm); no 6U listing found | derived, unverified |
| `rack_wall_frame_12u` | 12 | 504 x 305 x 641 | StarTech RK12WALLO, 12" deep (e-nitiative, Area9: 502.9 x 304.8 x 640.1) | verified |
| `rack_wall_frame_6u` | 6 | 504 x 305 x 374 | RK12WALLO less 6U; no 6U listing found | derived, unverified |

## 19-inch wall cabinets (glass door)

Lanberg WF01 series (600 wide). The 450-deep range:

| id | U | W x D x H | Source | Status |
|---|---|---|---|---|
| `rack_wall_cabinet_4u` | 4 | 600 x 450 x 290 | WF01-6404: Galaxus and Inception UK say 290.1, BigBuy 285 | verified |
| `rack_wall_cabinet_6u` | 6 | 600 x 450 x 379 | WF01-6406: Skroutz, Inception UK (379) | verified |
| `rack_wall_cabinet_9u` | 9 | 600 x 450 x 500 | #112 starter. Lanberg WF01-6409 lists 501-512 (eBay 507, PC Box 512), so the starter is 7-12 mm short | verified (starter size kept) |
| `rack_wall_cabinet_12u` | 12 | 600 x 450 x 645 | WF01-6412: Lanberg 645.7 (grey), others 635-640 | verified |
| `rack_wall_cabinet_15u` | 15 | 600 x 450 x 774 | WF01-6415-10B (Proshop SE: 774, depth 450) | single |

Deep range, 600 x 600 (the ticket says 550 deep; Lanberg's deep wall range is 600):

| id | U | W x D x H | Source | Status |
|---|---|---|---|---|
| `rack_wall_cabinet_deep_9u` | 9 | 600 x 600 x 512 | WF01-6609: Inception UK 512.4, others 501-507 | verified |
| `rack_wall_cabinet_deep_15u` | 15 | 600 x 600 x 774 | WF01-6615 exists (Aspen) but no height found; height of the 450-deep 15U used | derived, unverified |

## 19-inch floor cabinets

Door types follow the common retail option (glass or mesh); heights include castors. All rails sit on a 100 mm plinth in the model.

| id | U | W x D x H | Source | Status |
|---|---|---|---|---|
| `rack_floor_cabinet_18u` | 18 | 600 x 600 x 973 | Lanberg FF01-6618 (973.2 with castors, 900.2 without) | single |
| `rack_floor_cabinet_22u` | 22 | 600 x 600 x 1160 | CPC Farnell via rack-research.md; not re-checked | single |
| `rack_floor_cabinet_27u` | 27 | 600 x 1000 x 1370 | Broadberry via rack-research.md. Lanberg FF01-6627 is 600 x 800 x 1431-1461 | single |
| `rack_floor_cabinet_32u` | 32 | 600 x 800 x 1610 | Lanberg FF01-6832 (one listing 1610, another 1676) | conflicting, 1610 used |
| `rack_floor_cabinet_42u` | 42 | 600 x 1000 x 2050 | #112 starter; Lanberg FF01-6042 is 2047.5 (Polycomp, BigBuy); APC NetShelter SX AR3100 is 600 x 1070 x 1991 | verified |
| `rack_floor_cabinet_wide_42u` | 42 | 800 x 1000 x 2047.5 | Lanberg 42U 800x1000 (de.lanberg.eu; the 23BL variant is 2097.5) | single |
| `rack_floor_cabinet_deep_47u` | 47 | 800 x 1200 x 2350 | Lanberg FF01-8247, working depth 1120 | single |

No 48U model is in the list (Lanberg's range is 47U).

## Open frames, relay racks and AV

| id | U | W x D x H | Source | Status |
|---|---|---|---|---|
| `rack_open_frame_22u` | 22 | 600 x 800 x 1229 | Lanberg OR01-6822-B (German retailer; Proshop DK 60 x 80 x 122.9) | verified |
| `rack_open_frame_42u` | 42 | 600 x 1120 x 1970 | StarTech 4POSTRACK42U: height 1970 (RS), width 600 by analogy with the 12U and 25U; depth 1120 is the 25U's overall length, adjustable-depth racks vary | height single, W and D unverified |
| `rack_relay_42u` | 42 | 597 x 600 x 2008 | StarTech 2POSTRACK42 (Convergent: 597 x 600 x 2008) | single |
| `rack_relay_25u` | 25 | 597 x 600 x 1252 | no listing found; 2POSTRACK42 less 17U (756 mm) | derived, unverified |
| `rack_av_console_12u` | 12 | 543 x 600 x 785 | Penn Elcom R12C600 12U contractor rack (543 wide, 785 high). A true AV console with sloped front and castors was not found | single, a console look-alike |

## Things to check by hand

- Every `derived`, `generic` and `unverified` row above.
- Wall racks hang with their centre 0.9-1.3 m above the floor (`wall_y`); adjust in the editor.
- Mount depths (`mount_depth`) are left to the item's depth minus the cabinet insets, not taken from the makers' "usable depth".

# Rack-mount gear checklist (#117)

Rack-mount gear in the IT & network pack (`theovencook.it`, `network/rack_*.json`) with U height, size and the
power figure Home 3D adds up per rack. The files are written by `python tools/rack_gear.py` (a test fails while a file
differs); edit the list in that script, not the JSON. The six starters from #113 / #114 (`rack_switch_24_1u`,
`rack_patch_panel_24_1u`, `rack_blank_1u`, `rack_switch_8_half_1u`, `rack_pdu_vertical_0u`, `rack_shelf_2u`) are
hand-written and not repeated here. Older non-rack items (`network_switch_*`, `nvr_rack_1u`, `ups_rack_2u`,
`patch_panel_24`) are untouched.

How to read it: sizes are W x D x H in mm. Full-width gear is drawn on the 482.6 mm panel (with ears); the maker's
body width (442 mm for UniFi) is the drawn body. Height is the U height less 0.8 mm (1U = 43.7 mm), shelves and 0U
PDUs aside. Models are drawn by us from boxes; no maker pictures or 3D files are used. Fronts are simplified (ports in
blocks, drive bays as flat boxes, LEDs as small squares).

Status: **maker** = a maker page gives the figures (fetched 30 Oct 2026); **retailer** = shop listings or the 29 Oct
research notes only; **generic** = a typical size for that kind of gear, not one product; **unverified** = no source
found, check before relying on it. `watts` is an ESTIMATE. For gear with a maker figure it is the maker's maximum
without PoE output (switches, gateways) or the in-use figure (NAS), stated in the note; everything else is a typical
idle-to-moderate figure.

## Switches

| id | U | W x D x H | Watts | Status / source |
|---|---|---|---|---|
| `rack_switch_5_half_1u` | 1 half | 220 x 160 x 43.7 | 5 | generic, unverified |
| `rack_switch_8_1u` | 1 | 482.6 x 200 x 43.7 | 8 | generic, unverified |
| `rack_switch_16_1u` | 1 | 482.6 x 250 x 43.7 | 15 | generic, unverified |
| `rack_switch_48_1u` | 1 | 482.6 x 300 x 43.7 | 45 | generic, unverified |
| `rack_switch_poe_8_1u` | 1 | 482.6 x 250 x 43.7 | 20 | generic, unverified (own draw, not the PoE budget) |
| `rack_switch_poe_16_1u` | 1 | 482.6 x 300 x 43.7 | 30 | generic, unverified |
| `rack_switch_poe_24_1u` | 1 | 482.6 x 330 x 43.7 | 45 | generic, unverified |
| `rack_switch_poe_48_1u` | 1 | 482.6 x 400 x 43.7 | 80 | generic, unverified |
| `rack_unifi_usw_pro_24_poe` | 1 | 442 (panel 482.6) x 285 x 44 | 50 | maker: https://techspecs.ui.com/unifi/switching/usw-pro-24-poe (50 W without PoE, 450 W with) |
| `rack_unifi_usw_pro_hd_24_poe` | 1 | 442 x 400 x 44 | 60 | maker: .../usw-pro-hd-24-poe (60 W, 660 W with PoE) |
| `rack_unifi_usw_pro_xg_24_poe` | 1 | 442 x 480 x 44 | 150 | maker: .../usw-pro-xg-24-poe (150 W, 870 W with PoE) |
| `rack_unifi_usw_pro_max_24_poe` | 1 | 442 x 325 x 44 | 50 | maker: .../usw-pro-max-24-poe (50 W, 450 W with PoE) |
| `rack_unifi_usw_pro_48_poe` | 1 | 442 x 400 x 44 | 60 | maker: .../usw-pro-48-poe (60 W, 660 W with PoE) |
| `rack_unifi_usw_pro_max_48_poe` | 1 | 442.4 x 400 x 44 | 100 | maker: .../usw-pro-max-48-poe (100 W, 820 W with PoE) |

The UniFi pages give width, depth and height without axis labels; the order follows the 1U form factor. Not modelled:
USW Lite 16 PoE and USW Enterprise 8 PoE (desktop units, not rack gear).

## Gateways, NVRs, firewalls

| id | U | W x D x H | Watts | Status / source |
|---|---|---|---|---|
| `rack_unifi_udm_pro` | 1 | 442.4 x 285.6 x 43.7 | 33 | maker: https://techspecs.ui.com/unifi/cloud-gateways/udm-pro (9 GbE, 2 SFP+, 1 HDD bay) |
| `rack_unifi_udm_se` | 1 | 442.4 x 285.6 x 43.7 | 50 | maker: .../udm-se (8 GbE + one 2.5G, 2 SFP+; drawn with one drive bay, the bay count was not on the page) |
| `rack_unifi_udm_pro_max` | 1 | 442.4 x 285.6 x 43.7 | 60 | maker: .../udm-pro-max (2 HDD bays) |
| `rack_unifi_unvr` | 1 | 442 x 325 x 44 | 100 | maker: https://techspecs.ui.com/unifi/cameras-nvrs/unvr (4 bays; 100 W includes 75 W for drives) |
| `rack_unifi_unvr_pro` | 2 | 442 x 325 x 87 | 160 | maker: .../unvr-pro (7 bays; drawn with 8 cells, one more than the real front) |
| `rack_firewall_1u` | 1 | 482.6 x 300 x 43.7 | 40 | generic (pfSense / OPNsense appliance), unverified |
| `rack_firewall_1u_short` | 1 | 482.6 x 200 x 43.7 | 20 | generic, unverified |
| `rack_firewall_half_1u` | 1 half | 220 x 170 x 43.7 | 15 | generic (Protectli / Netgate class mini box on a tray), unverified |

## Patch panels, blanks, brush and cable panels

| id | U | W x D x H | Status / source |
|---|---|---|---|
| `rack_patch_panel_12_1u` | 1 | 482.6 x 50 x 43.7 | generic, unverified depth |
| `rack_patch_panel_48_1u` | 1 | 482.6 x 50 x 43.7 | generic, unverified depth (two dense rows) |
| `rack_patch_panel_48_2u` | 2 | 482.6 x 50 x 88.1 | generic, unverified depth |
| `rack_blank_2u`, `rack_blank_3u` | 2, 3 | 482.6 x 10 x 88.1 / 132.55 | generic; real plates are ~2 mm, drawn 10 mm (the pack's smallest size) |
| `rack_brush_panel_1u` | 1 | 482.6 x 11 x 43.7 | retailer: https://www2.beep.es/es/product/dn-97661-cable-brush-management-panel-19--1u--44x483x11-mm-brush-size-27x423-mm (brush slot 27 x 423 mm) |
| `rack_cable_manager_dring_1u`, `_2u` | 1, 2 | 482.6 x 80 x 43.7 / 88.1 | unverified (research notes: 60-90 mm from memory) |
| `rack_cable_manager_duct_1u` | 1 | 482.6 x 75 x 43.7 | unverified (finger duct, as above) |

## Shelves

| id | U | W x D x H | Status |
|---|---|---|---|
| `rack_shelf_fixed_1u` | 1 | 482.6 x 350 x 44.45 | generic, unverified |
| `rack_shelf_fixed_2u` | 2 | 482.6 x 450 x 88.9 | generic, unverified |
| `rack_shelf_cantilever_1u` | 1 | 482.6 x 250 x 44.45 | generic, unverified |

Shelves carry loose gear (`shelf: true`, `surface: true`); the starter `rack_shelf_2u` is the 2U cantilever.

## UPS, PDUs

| id | U | W x D x H | Watts | Status / source |
|---|---|---|---|---|
| `rack_ups_1u_cyberpower` | 1 | 482.6 (body 433) x 389 x 43.7 | 25 | retailer (CP1500PFCRM1U class): https://www.shi.com/product/48671789/CyberPower-PFC-Sinewave-Series-CP1000PFCRM1U |
| `rack_ups_1u_cyberpower_short` | 1 | 482.6 (433) x 230 x 43.7 | 15 | research notes (CP500 / CP700 class, 230 deep), unverified |
| `rack_ups_1u_eaton` | 1 | 482.6 (438) x 509 x 43.7 | 25 | retailer (5P1150iR class), unverified |
| `rack_ups_2u_apc` | 2 | 482.6 (432) x 457 x 88.1 | 35 | retailer (SMT1500RMI2U): https://mayflex.com/shop/product/SMT1500RMI2U |
| `rack_pdu_1u_8way_c13` | 1 | 482.6 x 50 x 43.7 | 2 | generic, unverified |
| `rack_pdu_1u_8way_uk` | 1 | 482.6 x 50 x 43.7 | 2 | generic, unverified |
| `rack_pdu_1u_metered_8way` | 1 | 482.6 x 50 x 43.7 | 3 | generic, unverified |
| `rack_pdu_vertical_8_0u` | 0 | 52 x 45 x 400 | 2 | generic, unverified (fits wall cabinets of 9U and up) |
| `rack_pdu_vertical_24_0u` | 0 | 52 x 45 x 1400 | 3 | generic, unverified (floor cabinets of 32U and up) |

UPS watts are the unit's own draw, not the load it carries.

## Servers, NAS

| id | U | W x D x H | Watts | Status / source |
|---|---|---|---|---|
| `rack_server_1u` | 1 | 482.6 x 600 x 43.7 | 150 | generic (4 LFF bays), unverified |
| `rack_server_1u_short` | 1 | 482.6 x 400 x 43.7 | 90 | generic, unverified |
| `rack_server_2u` | 2 | 482.6 x 650 x 88.1 | 250 | generic (12 LFF bays), unverified |
| `rack_nas_1u_4bay` | 1 | 478 x 327.5 x 44 | 38 | maker: https://www.synology.com/en-uk/products/RS422+ (38 W in access); drawn on the 482.6 panel |
| `rack_nas_2u_8bay` | 2 | 482 x 306.6 x 88 | 50 | maker: https://www.synology.com/en-uk/products/RS1221+ (50 W in access) |
| `rack_nas_2u_12bay` | 2 | 482 x 552 x 88 | 120 | maker: https://www.synology.com/en-uk/products/RS2423+ (120 W in access) |

## Unverified sizes (summary)

Every `generic` / `unverified` row above: standard and PoE switches, firewalls, patch panel depths, cable managers,
shelves, UPS Eaton and short CyberPower, PDUs, servers. Real depths vary a lot (1U servers: 400-750 mm); resize in the
editor when a rack's mounting depth matters.

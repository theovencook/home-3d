# 3D printer models checklist

Shared by the printer tickets #102 (Bambu Lab), #103 (Prusa), #104 (other FDM makers) and #105 (resin, wash and cure, workshop kit).
Each ticket updates only its own rows: set `status` to `done` and fill `size` and `source`. Add rows rather than editing other batches' rows.

All items live in `custom_components/home_3d/bundled_packs/theovencook.makers/tech/`. Every printer id contains `3d_printer`
(live progress ring, chamber light, camera tap); enclosed printers have a chamber light part (`glow`), open ones a nozzle or toolhead LED.
Items are modelled from simple shapes in this repo; no maker images or 3D files. Sizes are the maker's outer dimensions in mm (W x D x H, including spool holder where it is part of the frame).

Source for the Bambu rows: the maker's tech-spec pages (bambulab.com, per model) as quoted in third-party and store listings; bambulab.com itself blocked automated fetching, so entries marked approx. or unverified come from memory or a single listing and should be checked against the spec page.
Sizes of the AMS add-ons are approximate.

| Model | Maker | Type | Size (mm) | Batch | Status | Notes / source |
| --- | --- | --- | --- | --- | --- | --- |
| Bambu Lab X1 Carbon | Bambu Lab | FDM | 389 x 389 x 457 | #102 | done | `bambu_x1_carbon_3d_printer` + variants. Discontinued 2026; AMS |
| Bambu Lab X1E | Bambu Lab | FDM | 389 x 389 x 457 | #102 | done | `bambu_x1e_3d_printer` + variants. Discontinued; heated chamber; AMS |
| Bambu Lab P1S | Bambu Lab | FDM | 389 x 389 x 458 | #102 | done | `bambu_p1s_3d_printer` + variants. AMS |
| Bambu Lab P1P | Bambu Lab | FDM | 386 x 389 x 458 | #102 | done | `bambu_p1p_3d_printer` + variants. open frame; AMS; camera variant |
| Bambu Lab P2S | Bambu Lab | FDM | 392 x 406 x 478 | #102 | done | `bambu_p2s_3d_printer` + variants. AMS 2 Pro |
| Bambu Lab X2D | Bambu Lab | FDM | 392 x 406 x 478 | #102 | done | `bambu_x2d_3d_printer` + variants. AMS 2 Pro |
| Bambu Lab H2D | Bambu Lab | FDM | 492 x 514 x 626 | #102 | done | `bambu_h2d_3d_printer` + variants. AMS 2 Pro beside it |
| Bambu Lab H2D Pro | Bambu Lab | FDM | 492 x 514 x 626 | #102 | done | `bambu_h2d_pro_3d_printer` + variants. resellers only; AMS 2 Pro beside it |
| Bambu Lab H2S | Bambu Lab | FDM | 492 x 514 x 626 | #102 | done | `bambu_h2s_3d_printer` + variants. AMS 2 Pro beside it |
| Bambu Lab H2C | Bambu Lab | FDM | 492 x 514 x 626 | #102 | done | `bambu_h2c_3d_printer` + variants. AMS 2 Pro beside it |
| Bambu Lab A1 | Bambu Lab | FDM | 385 x 410 x 430 (unverified) | #102 | done | `bambu_a1_3d_printer` + variants. AMS lite beside it; camera variant |
| Bambu Lab A1 mini | Bambu Lab | FDM | 347 x 315 x 365 | #102 | done | `bambu_a1_mini_3d_printer` + variants. AMS lite beside it; camera variant |
| Bambu Lab A2L | Bambu Lab | FDM | 544 x 529 x 505 | #102 | done | `bambu_a2l_3d_printer` + variants. AMS lite beside it; camera variant |
| Bambu Lab AMS | Bambu Lab | add-on | 360 x 260 x 255 (approx.) | #102 | done | `bambu_ams`. Not a printer (no live state).  |
| Bambu Lab AMS lite | Bambu Lab | add-on | 290 x 230 x 300 (approx.) | #102 | done | `bambu_ams_lite`. Not a printer (no live state).  |
| Bambu Lab AMS 2 Pro | Bambu Lab | add-on | 360 x 270 x 260 (approx.) | #102 | done | `bambu_ams_2_pro`. Not a printer (no live state).  |
| Bambu Lab AMS HT | Bambu Lab | add-on | 170 x 300 x 240 (approx.) | #102 | done | `bambu_ams_ht`. Not a printer (no live state). single-spool dryer |
| Prusa Core One | Prusa | FDM | 415 x 470 x 555 | #103 | done | `prusa_core_one_3d_printer` + camera variant. Enclosed CoreXY; 470 deep with the display. Prusa FAQ (help.prusa3d.com) |
| Prusa Core One L | Prusa | FDM | 469 x 521 x 635 (unverified) | #103 | done | `prusa_core_one_l_3d_printer` + camera variant. Enclosed CoreXY. From the Prusa FAQ page, whose table was jumbled; check |
| Prusa MK4S | Prusa | FDM | 500 x 550 x 400 | #103 | done | `prusa_mk4s_3d_printer` + camera, MMU3 variants. Prusa FAQ |
| Prusa MK4 | Prusa | FDM | 500 x 550 x 400 | #103 | done | `prusa_mk4_3d_printer` + camera, MMU3 variants. Same frame as MK4S (Prusa FAQ) |
| Prusa MK3S+ | Prusa | FDM | 500 x 550 x 400 (approx.) | #103 | done | `prusa_mk3s_plus_3d_printer` + camera, MMU3 variants. Prusa lists the MK3.9/MK4 family only; MK3S+ size assumed equal |
| Prusa MINI+ | Prusa | FDM | 380 x 330 x 380 | #103 | done | `prusa_mini_3d_printer` + camera variant. Prusa FAQ |
| Prusa XL (1 toolhead) | Prusa | FDM | 700 x 720 x 900 | #103 | done | `prusa_xl_3d_printer` + camera variant. Open frame; Prusa FAQ |
| Prusa XL (5 toolheads) | Prusa | FDM | 700 x 720 x 900 | #103 | done | `prusa_xl_5_3d_printer` + camera variant. Same outer size as the single head (Prusa FAQ) |
| Prusa Enclosure | Prusa | FDM | 530 x 715 x 545 (unverified axis order) | #103 | done | `prusa_enclosure_3d_printer` (holds an MK4S) + camera, MMU3 variants. Prusa product page; 715 deep incl. outside LCD |
| Prusa MMU3 | Prusa | FDM | 330 x 220 x 150 (approx.) | #103 | done | `prusa_mmu3` add-on, not a printer (no live state). Height from Prusa's +150 mm note; footprint estimated. Printer + MMU3 variants are under each printer |
| Prusa SL1S Speed | Prusa | resin / wash+cure | 225 x 237 x 400 | #103 | done | `prusa_sl1s_speed_resin_3d_printer`. Prusa FAQ / Tom's Hardware |
| Prusa CW1S | Prusa | resin / wash+cure | 218 x 232 x 345 | #103 | done | `prusa_cw1s`. Not a printer (no `3d_printer` id). Prusa product page via retailer listings |
| Creality Ender-3 V3 | Creality | FDM | tbc | #104 | todo | |
| Creality Ender-3 V3 SE | Creality | FDM | tbc | #104 | todo | |
| Creality Ender-3 V3 KE | Creality | FDM | tbc | #104 | todo | |
| Creality Ender-5 | Creality | FDM | tbc | #104 | todo | |
| Creality K1 | Creality | FDM | tbc | #104 | todo | |
| Creality K1 Max | Creality | FDM | tbc | #104 | todo | |
| Creality K1C | Creality | FDM | tbc | #104 | todo | |
| Creality K2 Plus | Creality | FDM | tbc | #104 | todo | |
| Snapmaker A350T | Snapmaker | FDM | tbc | #104 | todo | |
| Snapmaker J1S | Snapmaker | FDM | tbc | #104 | todo | |
| Snapmaker U1 | Snapmaker | FDM | tbc | #104 | todo | |
| Anycubic Kobra 3 | Anycubic | FDM | tbc | #104 | todo | |
| Anycubic Kobra S1 | Anycubic | FDM | tbc | #104 | todo | |
| Elegoo Neptune 4 | Elegoo | FDM | tbc | #104 | todo | |
| Elegoo Neptune 4 Pro | Elegoo | FDM | tbc | #104 | todo | |
| Elegoo Neptune 4 Max | Elegoo | FDM | tbc | #104 | todo | |
| Elegoo Centauri Carbon | Elegoo | FDM | tbc | #104 | todo | |
| Qidi Q1 Pro | Qidi | FDM | tbc | #104 | todo | |
| Qidi X-Max 3 | Qidi | FDM | tbc | #104 | todo | |
| Voron 2.4 (350) | Voron (kit) | FDM | tbc | #104 | todo | |
| Voron Trident (300) | Voron (kit) | FDM | tbc | #104 | todo | |
| Sovol SV08 | Sovol | FDM | tbc | #104 | todo | |
| FlashForge Adventurer 5M Pro | FlashForge | FDM | tbc | #104 | todo | |
| Elegoo Saturn 4 Ultra | Elegoo | resin | tbc | #105 | todo | |
| Elegoo Mars 5 | Elegoo | resin | tbc | #105 | todo | |
| Anycubic Photon Mono M7 | Anycubic | resin | tbc | #105 | todo | |
| Anycubic Photon Mono M5s | Anycubic | resin | tbc | #105 | todo | |
| Phrozen Sonic Mighty 8K | Phrozen | resin | tbc | #105 | todo | |
| Formlabs Form 4 | Formlabs | resin | tbc | #105 | todo | |
| Elegoo Mercury | Elegoo | wash+cure | tbc | #105 | todo | |
| Anycubic Wash & Cure | Anycubic | wash+cure | tbc | #105 | todo | |
| Formlabs Form Wash | Formlabs | wash+cure | tbc | #105 | todo | |
| Formlabs Form Cure | Formlabs | wash+cure | tbc | #105 | todo | |

Bambu Lab enclosure: Bambu sells no separate enclosure; the H2/P2S/X-series are already enclosed and the A1 series stays open (an enclosure tent is part of #105).

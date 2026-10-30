# Cooling checklist (#146)

Fans, air conditioners and evaporative coolers in `theovencook.devices/heating/`. Sizes are W x D x H in mm. Each item
is modelled by us from simple shapes; no maker pictures or 3D files are used. The existing items (`ceiling_fan_42`,
`ceiling_fan_52` and their light versions, `pedestal_fan`, `tower_fan`, `tower_fan_column`, `air_conditioner_wall`,
`air_conditioner_outdoor`, `air_conditioner_portable`) are not repeated here.

Status: `maker` = a manufacturer page gives the figure; `retailer` = only shops give it; `unverified` = no source
found, the figure is our estimate of a typical product and should be checked against the real device. Most rows are
unverified: the range covers classes of product (a 12 inch pedestal fan, a 12 000 BTU window unit), not single models.

Power draw is a typical figure and is also in each item's tags (`typical 55 W`). Items are `electric`, so they link to a
switch or power sensor. Tags such as `air conditioning`, `fan`, `climate`, `heat pump` and the BTU or kW rating help
find an item for a Home Assistant `climate` or `fan` entity. The window items and the hose kit are `wall` items at
0.9 m (a window sill), the wall splits and wall fans are `wall` items, ceiling fans and cassettes are `ceiling`
items, and desk, clip and USB fans sit on a `surface`.

Ceiling fans from the pack are static models (the blades only turn for the built-in fan lamp), like the existing ones.

| Item id | Device | Size (mm) | Status | Source / note |
| --- | --- | --- | --- | --- |
| `ceiling_fan_36` | Ceiling fan, 91 cm (36 in) | 910 x 910 x 420 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 55 W. |
| `ceiling_fan_36_light` | Ceiling fan with light, 91 cm (36 in) with light | 910 x 910 x 420 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 55 W. |
| `ceiling_fan_60` | Ceiling fan, 152 cm (60 in) | 1520 x 1520 x 450 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 75 W. |
| `ceiling_fan_60_light` | Ceiling fan with light, 152 cm (60 in) with light | 1520 x 1520 x 450 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 75 W. |
| `ceiling_fan_flush_42` | Ceiling fan, 107 cm (42 in) flush | 1070 x 1070 x 250 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 55 W. |
| `ceiling_fan_flush_42_light` | Ceiling fan with light, 107 cm (42 in) flush, with light | 1070 x 1070 x 250 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 55 W. |
| `ceiling_fan_flush_52` | Ceiling fan, 132 cm (52 in) flush | 1320 x 1320 x 250 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 75 W. |
| `ceiling_fan_flush_52_light` | Ceiling fan with light, 132 cm (52 in) flush, with light | 1320 x 1320 x 250 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 75 W. |
| `usb_fan` | USB fan, USB mini | 140 x 120 x 180 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 5 W. |
| `desk_fan_6` | Desk fan, 15 cm (6 in) | 200 x 170 x 270 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 15 W. |
| `desk_fan_10` | Desk fan, 25 cm (10 in) | 300 x 220 x 400 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 30 W. |
| `clip_fan` | Clip-on fan, Clip-on | 200 x 160 x 280 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 12 W. |
| `pedestal_fan_12` | Pedestal fan, 30 cm (12 in) | 350 x 330 x 950 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 35 W. |
| `pedestal_fan_18` | Pedestal fan, 46 cm (18 in) | 500 x 460 x 1400 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 55 W. |
| `pedestal_fan_20` | Pedestal fan, 51 cm (20 in) | 550 x 500 x 1550 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 90 W. |
| `tower_fan_700` | Tower fan, Tower 70 cm | 200 x 200 x 700 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 45 W. |
| `tower_fan_1100` | Tower fan, Tower 110 cm | 220 x 220 x 1100 | unverified | Estimated. The Dyson TP07 purifier fan is 1050 mm tall (retailers); the existing bladeless tower covers that shape. Typical power: 55 W. |
| `bladeless_fan_desk` | Bladeless fan, Desk ring | 220 x 170 x 320 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 40 W. |
| `bladeless_fan_floor` | Bladeless fan, Floor ring | 300 x 250 x 1000 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 45 W. |
| `box_fan_20` | Box fan, 50 cm (20 in) | 550 x 150 x 550 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 55 W. |
| `wall_fan_12` | Wall-mounted fan, 30 cm (12 in) | 350 x 220 x 380 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 40 W. |
| `wall_fan_16` | Wall-mounted fan, 41 cm (16 in) | 450 x 280 x 500 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 55 W. |
| `air_circulator_small` | Air circulator, Compact 23 cm | 260 x 260 x 300 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 30 W. |
| `air_circulator_large` | Air circulator, Large 30 cm | 400 x 380 x 440 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 60 W. |
| `window_ac_5000` | Window air conditioner, 5 000 BTU | 450 x 370 x 310 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 450 W. |
| `window_ac_8000` | Window air conditioner, 8 000 BTU | 550 x 450 x 380 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 700 W. |
| `window_ac_12000` | Window air conditioner, 12 000 BTU | 600 x 550 x 400 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 1100 W. |
| `split_indoor_25` | Air conditioning unit, Wall split 2.5 kW | 800 x 250 x 300 | retailer | Daikin FTXM25A indoor unit 804 x 252 x 298 (W x D x H) at https://www.airconspares.com/products/daikin-perfera-2-5kw-9000-btu-wall-mounted-air-conditioning-system and a second UK retailer; Mitsubishi MSZ-AP25VGK is 798 x 219 x 299 (https://shop.kaeltefischer.ch/en/catalogue/msz-ap-25-kw-122963). We use 800 x 250 x 300. Typical power: 600 W. |
| `split_indoor_35` | Air conditioning unit, Wall split 3.5 kW | 800 x 250 x 300 | retailer | Same chassis as the 2.5 kW in Daikin's Perfera and Mitsubishi's MSZ-AP ranges (not separately checked); see the 2.5 kW row. Typical power: 850 W. |
| `split_indoor_50` | Air conditioning unit, Wall split 5.0 kW | 990 x 260 x 300 | unverified | Mitsubishi MSZ-AP50VGK is only 798 x 219 x 299 (retailer), Daikin 5 kW units are wider; 990 x 260 x 300 is our estimate for the wider class. Check against the real unit. Typical power: 1400 W. |
| `split_indoor_70` | Air conditioning unit, Wall split 7.0 kW | 1100 x 260 x 330 | retailer | Mitsubishi MSZ-AP71VGK 1100 x 257 x 325 (W x D x H) at https://shop.kaeltefischer.ch/en/catalogue/msz-ap-71-kw-123940; the maker's outline drawing was not read. Typical power: 2000 W. |
| `cassette_600` | Ceiling cassette air conditioner, Cassette 600 (2.5-5 kW) | 620 x 620 x 260 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 700 W. |
| `cassette_840` | Ceiling cassette air conditioner, Cassette 840 (7 kW) | 950 x 950 x 300 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 1900 W. |
| `floor_console_25` | Floor console air conditioner, Floor console 2.5 kW | 700 x 210 x 600 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 600 W. |
| `floor_console_50` | Floor console air conditioner, Floor console 5.0 kW | 1000 x 210 x 600 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 1400 W. |
| `multi_split_outdoor_2` | Air conditioning outdoor unit, Multi-split outdoor, 2 rooms | 900 x 330 x 700 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 1500 W. |
| `multi_split_outdoor_3` | Air conditioning outdoor unit, Multi-split outdoor, 3 rooms | 950 x 380 x 850 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 2400 W. |
| `multi_split_outdoor_5` | Air conditioning outdoor unit, Multi-split outdoor, 5 rooms | 950 x 400 x 1300 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 3300 W. |
| `portable_ac_7000` | Portable air conditioner, Portable 7 000 BTU | 320 x 340 x 680 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 800 W. |
| `portable_ac_14000` | Portable air conditioner, Portable 14 000 BTU | 450 x 400 x 850 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 1400 W. |
| `portable_ac_window_kit` | Portable AC window hose kit, Window hose kit | 700 x 100 x 200 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. |
| `evap_cooler_desk` | Evaporative cooler, Desk 0.5 l | 200 x 150 x 250 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 10 W. |
| `evap_cooler_tower` | Evaporative cooler, Tower 7 l | 300 x 300 x 850 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 45 W. |
| `evap_cooler_large` | Evaporative cooler, Large 30 l | 500 x 400 x 950 | unverified | Typical size for the class, estimated from common products; not checked against a maker or retailer page. Typical power: 120 W. |

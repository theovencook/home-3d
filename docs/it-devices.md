# IT devices checklist (#118)

Everyday, non-rack IT devices in `theovencook.it` (rack-mount gear is a separate ticket). Sizes are W x D x H in mm,
checked against maker pages on 30 October 2026 where the Status column says `maker`. We model each device
ourselves from simple shapes; no maker pictures or 3D files are used.

Status: `maker` = a manufacturer page gives the figure; `retailer` = only shops or reviews give it; `unverified` =
no source found, the figure is our best estimate and should be checked against the real device. Notes say what is
estimated.

| Item id | Device | Size (mm) | Status | Source / note |
| --- | --- | --- | --- | --- |
| `esp32_devkitc` | ESP32-DevKitC V4 | 54.4 x 27.9 x 13 | unverified | Espressif's guide only shows the board drawing as an image; CNX Software and Cirkit list ~54 x 28. Height with the pins is our estimate. https://docs.espressif.com/projects/esp-idf/en/v5.2.2/esp32/hw-reference/esp32/get-started-devkitc.html |
| `esp32_s3_devkitc` | ESP32-S3-DevKitC-1 | 70 x 25.4 x 13 | unverified | Espressif's page shows the dimensions only as a drawing; 70 x 25.4 is from memory. https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3/esp32-s3-devkitc-1/user_guide_v1.1.html |
| `d1_mini` | LOLIN / WEMOS D1 mini | 34.2 x 25.6 x 12 | maker (footprint) | https://www.wemos.cc/en/latest/d1/d1_mini.html ; height with headers is our estimate |
| `esp32_project_box` | ESP32 in a project box | 100 x 60 x 25 | unverified | A generic ABS project box size, not one product |
| `raspberry_pi_board` | Raspberry Pi 4 / 5 board | 85 x 56 x 17 | maker (footprint) | https://www.raspberrypi.com/documentation/computers/sbcs.html ; the Pi 5 drawing (RP-008347-DS) is marked approximate. Height over the USB stack is our estimate |
| `raspberry_pi_case_5` | Pi 5 official case | 98.5 x 70.3 x 33 | retailer | https://www.kiwi-electronics.com/en/brand-raspberry-pi/raspberry-pi-case-for-pi-5-black-11584 |
| `raspberry_pi_case_4` | Pi 4 official case | 97 x 70 x 25 | retailer | https://uk.rs-online.com/web/p/products/1876750 ; other shops say 95-96 x 69-70 x 28-30, so treat the height as +-5 |
| `ha_green` | Home Assistant Green | 112 x 112 x 32 | maker | https://www.home-assistant.io/green/ |
| `ha_yellow` | Home Assistant Yellow (enclosure) | 123 x 123 x 36 | maker | https://www.home-assistant.io/yellow/ |
| `ha_blue` | Home Assistant Blue (ODROID-N2+, metal case) | 105 x 98 x 33 | unverified | Hardkernel listing quoted in a search summary (page not opened); the product is discontinued |
| `zbt1_skyconnect` | Home Assistant Connect ZBT-1 (SkyConnect) | 38.5 x 18 x 4.5 | unverified | Datasheet figure quoted by Pimoroni and search results; the datasheet link is dead and the figure looks small for the stick with its plug. https://shop.pimoroni.com/products/home-assistant-connect-zbt-1 |
| `zbt2_connect` | Home Assistant Connect ZBT-2 (Zigbee / Thread) | 83 x 83 x 179 | maker | https://www.home-assistant.io/connect/zbt-2/ ; overall size with the 164 mm antenna. The 83 x 83 footprint is the maker's figure; the body inside it is our drawing |
| `sonoff_zbdongle_e` | SONOFF ZBDongle-E | 75 x 25.5 x 13.5 | maker | https://sonoff.tech/de-eu/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e (figure read from a search summary; the page itself would not load) |
| `sonoff_zbdongle_p` | SONOFF ZBDongle-P | 87 x 25.5 x 13.5 | retailer | https://openelab.io/it/products/sonoff-zbdongle-p ; the external antenna is not included |
| `slzb_06` | SMLIGHT SLZB-06 | 160 x 22 x 24 | maker | https://smlight.tech/product/slzb-06 ; the page does not say which axis is the height, or whether the antenna is included |
| `hue_bridge` | Philips Hue Bridge v2 | 90.9 x 90.6 x 26 | maker | https://hk.shop.lighting.philips.com/products/hue-bridge |
| `sure_petcare_hub` | Sure Petcare Hub | 90 x 90 x 69 | maker (W, H) | https://www.surepetcare.com/en-gb/support/hub gives 90 wide, 69 high; the depth (90) is our assumption. Retailer figures of 145 x 110 x 115 are probably the box |
| `ikea_dirigera` | IKEA DIRIGERA hub | 112 x 112 x 27 | maker | https://www.ikea.com/sg/en/p/-50503409 (112 mm diameter) |
| `mini_pc_nuc_slim` | NUC slim (ASUS NUC 14 Pro slim) | 117 x 112 x 37 | maker | https://www.asus.com/displays-desktops/nucs/nuc-mini-pcs/asus-nuc-14-pro/techspec/ |
| `mini_pc_nuc_tall` | NUC tall (ASUS NUC 14 Pro tall) | 117 x 112 x 54 | maker | same page |
| `mini_pc_thinkcentre_tiny` | Lenovo ThinkCentre M720q Tiny | 179 x 183 x 34.5 | retailer | https://www.refurbed.de/en-de/p/lenovo-thinkcentre-m720q-tiny/128048/ |
| `mini_pc_beelink` | Beelink Mini S12 Pro | 115 x 102 x 39 | maker | https://www.bee-link.com/catalog/product/buy?id=434 |
| `nas_4_bay` | Synology DS423+ / DS923+ (existing item, depth corrected from 232 to 223) | 199 x 223 x 166 | retailer | https://nascompares.com/news/synology-ds923-4-bay-10gbe-nas-now-officially-released/ |
| `nas_2_bay` | Synology DS224+ (existing item) | 108 x 232 x 165 | retailer | https://global.download.synology.com/download/Document/Hardware/ProductSpec/DiskStation/24-year/DS224+/enu/Product_Spec_DS224+_enu.pdf (quoted by search, not opened) |
| `nas_5_bay` | Synology DS1522+ | 230 x 223 x 166 | retailer | https://www.microcenter.com/quickview/682049/synology-diskstation-ds1522-5-bay-diskless-desktop-nas |
| `wifi_access_point` | UniFi U6 Lite (existing item) | 160 x 160 x 33 | maker | https://techspecs.ui.com/unifi/wifi/u6-lite |
| `wifi_access_point_pro` | UniFi U6 Pro | 197 x 197 x 35 | maker | https://techspecs.ui.com/unifi/wifi/u6-pro |
| `wifi_access_point_u7_pro` | UniFi U7 Pro | 206 x 206 x 46 | maker | https://techspecs.ui.com/unifi/wifi/u7-pro |
| `wifi_access_point_u7_wall` | UniFi U7 Pro Wall | 103 x 36 x 150 | maker | https://techspecs.ui.com/unifi/wifi/u7-pro-wall lists 150 x 103 x 36; which side is up is our assumption |
| `wifi_access_point_in_wall` | UniFi U6 In-Wall | 96 x 31.2 x 139.7 | maker | https://techspecs.ui.com/unifi/wifi/u6-iw lists 139.7 x 96 x 31.2; which side is up is our assumption |
| `unifi_cloud_gateway_ultra` | UniFi Cloud Gateway Ultra / Max | 141.8 x 127.6 x 30 | maker | https://techspecs.ui.com/unifi/cloud-gateways/ucg-ultra ; the Max page gave the same figure |
| `unifi_cloud_gateway_fiber` | UniFi Cloud Gateway Fiber | 212.8 x 127.6 x 30 | maker | https://techspecs.ui.com/unifi/cloud-gateways/ucg-fiber |
| `unifi_dream_router_7` | UniFi Dream Router 7 | 110 x 110 x 184.1 | maker | https://techspecs.ui.com/unifi/cloud-gateways/udr7 |

Colours of the UniFi gear are not on the maker pages; white is our assumption. The existing items (routers, mesh node,
switches, 6-bay NAS tower, UPS) are untouched. The existing large ceiling AP (210 x 45) is left as it is.

## Search words

`frontend/src/vocabulary.ts` makes these words equal: `pi` / `raspberry pi` / `rpi`; `zigbee stick` / `zigbee dongle` /
`zigbee usb stick` / `zigbee coordinator` / `coordinator` / `usb stick`; `mini pc` / `nuc`. Tags carry the model names
(`skyconnect`, `d1 mini`, `thread dongle`, `u7`, `dream router`, ...).

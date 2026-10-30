# Vehicles catalogue (#129)

Cars: the most popular current UK models of 20 brands (by UK and European registrations; pick the latest generation
sold), about 200 in all. Each is built from simple shapes by `tools/gen_vehicles.py` and scaled to the outer size
below (length x width without mirrors x height, in mm). No logos, no maker pictures, no 3D files. The body is in the
`paint` colour role: ten base colours and a hex value in the item panel.

**Sizes are unverified.** They were written down from memory of the makers' published UK specifications and have not
yet been compared one by one with the spec pages. Check a row against the maker's page (column Source) before
relying on it, then change `tools/vehicles_data.py`, run `python tools/gen_vehicles.py` and mark the row verified.
Brands with fewer than ten rows (Tesla sells seven different shapes, MG eight) are listed as they are.

The Nissan Leaf and its colourways, the first bicycles, mopeds and scooters were made by hand earlier and are not part
of this table.

## Ford

Source: https://www.ford.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Ford Puma | suv | 4186 x 1805 x 1537 | no | `ford_puma` | unverified |
| Ford Fiesta | hatchback | 4040 x 1735 x 1476 | no | `ford_fiesta` | unverified |
| Ford Focus | hatchback | 4378 x 1825 x 1471 | no | `ford_focus` | unverified |
| Ford Focus Estate | estate | 4668 x 1825 x 1481 | no | `ford_focus_estate` | unverified |
| Ford Kuga | suv | 4614 x 1883 x 1661 | no | `ford_kuga` | unverified |
| Ford Mustang Mach-E | suv | 4713 x 1881 x 1626 | yes | `ford_mustang_mach_e` | unverified |
| Ford Ranger | pickup truck | 5370 x 1918 x 1884 | no | `ford_ranger` | unverified |
| Ford Transit Custom | van | 4973 x 2032 x 1976 | no | `ford_transit_custom` | unverified |
| Ford Tourneo Custom | mpv | 4973 x 2032 x 1990 | no | `ford_tourneo_custom` | unverified |
| Ford Mustang | coupe | 4811 x 1916 x 1414 | no | `ford_mustang` | unverified |

## Vauxhall

Source: https://www.vauxhall.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Vauxhall Corsa | hatchback | 4060 x 1765 x 1435 | no | `vauxhall_corsa` | unverified |
| Vauxhall Corsa Electric | hatchback | 4060 x 1765 x 1435 | yes | `vauxhall_corsa_electric` | unverified |
| Vauxhall Mokka | suv | 4151 x 1791 x 1534 | no | `vauxhall_mokka` | unverified |
| Vauxhall Astra | hatchback | 4374 x 1860 x 1485 | no | `vauxhall_astra` | unverified |
| Vauxhall Astra Sports Tourer | estate | 4642 x 1860 x 1480 | no | `vauxhall_astra_sports_tourer` | unverified |
| Vauxhall Crossland | suv | 4212 x 1765 x 1590 | no | `vauxhall_crossland` | unverified |
| Vauxhall Grandland | suv | 4650 x 1895 x 1665 | no | `vauxhall_grandland` | unverified |
| Vauxhall Frontera | suv | 4385 x 1830 x 1635 | no | `vauxhall_frontera` | unverified |
| Vauxhall Combo Life | mpv | 4403 x 1848 x 1850 | no | `vauxhall_combo_life` | unverified |
| Vauxhall Vivaro | van | 4959 x 1920 x 1900 | no | `vauxhall_vivaro` | unverified |

## Volkswagen

Source: https://www.volkswagen.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Volkswagen Polo | hatchback | 4074 x 1751 x 1451 | no | `vw_polo` | unverified |
| Volkswagen Golf | hatchback | 4284 x 1789 x 1456 | no | `vw_golf` | unverified |
| Volkswagen Golf Estate | estate | 4633 x 1789 x 1493 | no | `vw_golf_estate` | unverified |
| Volkswagen Passat Estate | estate | 4917 x 1852 x 1507 | no | `vw_passat_estate` | unverified |
| Volkswagen T-Roc | suv | 4234 x 1819 x 1573 | no | `vw_t_roc` | unverified |
| Volkswagen Tiguan | suv | 4539 x 1842 x 1665 | no | `vw_tiguan` | unverified |
| Volkswagen Taigo | suv | 4266 x 1757 x 1494 | no | `vw_taigo` | unverified |
| Volkswagen ID.3 | hatchback | 4261 x 1809 x 1568 | yes | `vw_id_3` | unverified |
| Volkswagen ID.4 | suv | 4584 x 1852 x 1631 | yes | `vw_id_4` | unverified |
| Volkswagen Transporter | van | 4904 x 1904 x 1990 | no | `vw_transporter` | unverified |

## BMW

Source: https://www.bmw.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| BMW 1 Series | hatchback | 4361 x 1800 x 1459 | no | `bmw_1_series` | unverified |
| BMW 2 Series Active Tourer | mpv | 4386 x 1824 x 1561 | no | `bmw_2_series_active_tourer` | unverified |
| BMW 3 Series | saloon | 4713 x 1827 x 1442 | no | `bmw_3_series` | unverified |
| BMW 3 Series Touring | estate | 4713 x 1827 x 1458 | no | `bmw_3_series_touring` | unverified |
| BMW 4 Series Coupe | coupe | 4768 x 1852 x 1383 | no | `bmw_4_series_coupe` | unverified |
| BMW 5 Series | saloon | 5060 x 1900 x 1515 | no | `bmw_5_series` | unverified |
| BMW X1 | suv | 4500 x 1845 x 1642 | no | `bmw_x1` | unverified |
| BMW X3 | suv | 4755 x 1920 x 1660 | no | `bmw_x3` | unverified |
| BMW X5 | suv | 4935 x 2004 x 1765 | no | `bmw_x5` | unverified |
| BMW i4 | saloon | 4783 x 1852 x 1448 | yes | `bmw_i4` | unverified |

## Mercedes-Benz

Source: https://www.mercedes-benz.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Mercedes-Benz A-Class | hatchback | 4419 x 1796 x 1440 | no | `mercedes_a_class` | unverified |
| Mercedes-Benz B-Class | mpv | 4419 x 1796 x 1562 | no | `mercedes_b_class` | unverified |
| Mercedes-Benz C-Class | saloon | 4751 x 1820 x 1438 | no | `mercedes_c_class` | unverified |
| Mercedes-Benz C-Class Estate | estate | 4751 x 1820 x 1455 | no | `mercedes_c_class_estate` | unverified |
| Mercedes-Benz E-Class | saloon | 4949 x 1880 x 1468 | no | `mercedes_e_class` | unverified |
| Mercedes-Benz GLA | suv | 4412 x 1834 x 1611 | no | `mercedes_gla` | unverified |
| Mercedes-Benz GLC | suv | 4716 x 1890 x 1640 | no | `mercedes_glc` | unverified |
| Mercedes-Benz GLE | suv | 4924 x 2020 x 1796 | no | `mercedes_gle` | unverified |
| Mercedes-Benz EQA | suv | 4463 x 1834 x 1624 | yes | `mercedes_eqa` | unverified |
| Mercedes-Benz Vito | van | 4895 x 1928 x 1910 | no | `mercedes_vito` | unverified |

## Audi

Source: https://www.audi.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Audi A1 | hatchback | 4029 x 1740 x 1409 | no | `audi_a1` | unverified |
| Audi A3 Sportback | hatchback | 4343 x 1816 x 1450 | no | `audi_a3_sportback` | unverified |
| Audi A4 Avant | estate | 4762 x 1847 x 1495 | no | `audi_a4_avant` | unverified |
| Audi A6 Avant | estate | 4939 x 1886 x 1457 | no | `audi_a6_avant` | unverified |
| Audi Q2 | suv | 4208 x 1794 x 1508 | no | `audi_q2` | unverified |
| Audi Q3 | suv | 4484 x 1849 x 1585 | no | `audi_q3` | unverified |
| Audi Q5 | suv | 4682 x 1893 x 1655 | no | `audi_q5` | unverified |
| Audi Q7 | suv | 5063 x 1970 x 1741 | no | `audi_q7` | unverified |
| Audi Q4 e-tron | suv | 4588 x 1865 x 1632 | yes | `audi_q4_e_tron` | unverified |
| Audi e-tron GT | coupe | 4989 x 1964 x 1413 | yes | `audi_e_tron_gt` | unverified |

## Toyota

Source: https://www.toyota.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Toyota Yaris | hatchback | 3940 x 1745 x 1500 | no | `toyota_yaris` | unverified |
| Toyota Aygo X | hatchback | 3700 x 1740 x 1510 | no | `toyota_aygo_x` | unverified |
| Toyota Corolla | hatchback | 4370 x 1790 x 1435 | no | `toyota_corolla` | unverified |
| Toyota Corolla Touring Sports | estate | 4650 x 1790 x 1460 | no | `toyota_corolla_touring_sports` | unverified |
| Toyota C-HR | suv | 4362 x 1832 x 1558 | no | `toyota_c_hr` | unverified |
| Toyota Yaris Cross | suv | 4180 x 1765 x 1590 | no | `toyota_yaris_cross` | unverified |
| Toyota RAV4 | suv | 4600 x 1855 x 1685 | no | `toyota_rav4` | unverified |
| Toyota bZ4X | suv | 4690 x 1860 x 1650 | yes | `toyota_bz4x` | unverified |
| Toyota Hilux | pickup truck | 5325 x 1855 x 1815 | no | `toyota_hilux` | unverified |
| Toyota Proace Verso | mpv | 4980 x 1920 x 1940 | no | `toyota_proace_verso` | unverified |

## Nissan

Source: https://www.nissan.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Nissan Micra | hatchback | 3999 x 1743 x 1455 | no | `nissan_micra` | unverified |
| Nissan Juke | suv | 4210 x 1800 x 1595 | no | `nissan_juke` | unverified |
| Nissan Qashqai | suv | 4425 x 1838 x 1625 | no | `nissan_qashqai` | unverified |
| Nissan X-Trail | suv | 4680 x 1840 x 1725 | no | `nissan_x_trail` | unverified |
| Nissan Ariya | suv | 4595 x 1850 x 1660 | yes | `nissan_ariya` | unverified |
| Nissan Navara | pickup truck | 5255 x 1850 x 1810 | no | `nissan_navara` | unverified |
| Nissan Townstar | van | 4486 x 1921 x 1872 | no | `nissan_townstar` | unverified |
| Nissan Primastar | van | 5399 x 1956 x 1970 | no | `nissan_primastar` | unverified |
| Nissan Z | coupe | 4379 x 1844 x 1315 | no | `nissan_z` | unverified |
| Nissan GT-R | coupe | 4710 x 1895 x 1370 | no | `nissan_gt_r` | unverified |

## Kia

Source: https://www.kia.com/uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Kia Picanto | hatchback | 3595 x 1595 x 1485 | no | `kia_picanto` | unverified |
| Kia Ceed | hatchback | 4310 x 1800 x 1447 | no | `kia_ceed` | unverified |
| Kia Ceed Sportswagon | estate | 4605 x 1800 x 1475 | no | `kia_ceed_sportswagon` | unverified |
| Kia Stonic | suv | 4140 x 1760 x 1500 | no | `kia_stonic` | unverified |
| Kia Xceed | suv | 4395 x 1826 x 1495 | no | `kia_xceed` | unverified |
| Kia Niro | suv | 4420 x 1825 x 1545 | no | `kia_niro` | unverified |
| Kia Sportage | suv | 4515 x 1865 x 1650 | no | `kia_sportage` | unverified |
| Kia Sorento | suv | 4810 x 1900 x 1695 | no | `kia_sorento` | unverified |
| Kia EV6 | suv | 4695 x 1890 x 1550 | yes | `kia_ev6` | unverified |
| Kia EV9 | suv | 5010 x 1980 x 1755 | yes | `kia_ev9` | unverified |

## Hyundai

Source: https://www.hyundai.com/uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Hyundai i10 | hatchback | 3670 x 1680 x 1480 | no | `hyundai_i10` | unverified |
| Hyundai i20 | hatchback | 4040 x 1775 x 1450 | no | `hyundai_i20` | unverified |
| Hyundai i30 | hatchback | 4340 x 1795 x 1455 | no | `hyundai_i30` | unverified |
| Hyundai i30 Tourer | estate | 4585 x 1795 x 1465 | no | `hyundai_i30_tourer` | unverified |
| Hyundai Bayon | suv | 4180 x 1775 x 1500 | no | `hyundai_bayon` | unverified |
| Hyundai Kona | suv | 4350 x 1825 x 1585 | no | `hyundai_kona` | unverified |
| Hyundai Tucson | suv | 4500 x 1865 x 1650 | no | `hyundai_tucson` | unverified |
| Hyundai Santa Fe | suv | 4830 x 1900 x 1720 | no | `hyundai_santa_fe` | unverified |
| Hyundai Ioniq 5 | suv | 4635 x 1890 x 1605 | yes | `hyundai_ioniq_5` | unverified |
| Hyundai Ioniq 6 | saloon | 4855 x 1880 x 1495 | yes | `hyundai_ioniq_6` | unverified |

## Tesla

Source: https://www.tesla.com/en_gb (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Tesla Model 3 | saloon | 4720 x 1850 x 1441 | yes | `tesla_model_3` | unverified |
| Tesla Model 3 (2017-23) | saloon | 4694 x 1849 x 1443 | yes | `tesla_model_3_2017_23` | unverified |
| Tesla Model Y | suv | 4751 x 1921 x 1624 | yes | `tesla_model_y` | unverified |
| Tesla Model Y (2020-24) | suv | 4751 x 1921 x 1624 | yes | `tesla_model_y_2020_24` | unverified |
| Tesla Model S | saloon | 5021 x 1987 x 1431 | yes | `tesla_model_s` | unverified |
| Tesla Model X | suv | 5036 x 2083 x 1684 | yes | `tesla_model_x` | unverified |
| Tesla Cybertruck | pickup truck | 5885 x 2027 x 1905 | yes | `tesla_cybertruck` | unverified |

## Volvo

Source: https://www.volvocars.com/uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Volvo XC40 | suv | 4425 x 1863 x 1652 | no | `volvo_xc40` | unverified |
| Volvo EX30 | suv | 4233 x 1837 x 1555 | yes | `volvo_ex30` | unverified |
| Volvo EC40 | suv | 4440 x 1873 x 1591 | yes | `volvo_ec40` | unverified |
| Volvo XC60 | suv | 4708 x 1902 x 1658 | no | `volvo_xc60` | unverified |
| Volvo XC90 | suv | 4953 x 2019 x 1776 | no | `volvo_xc90` | unverified |
| Volvo EX90 | suv | 5037 x 2036 x 1747 | yes | `volvo_ex90` | unverified |
| Volvo S60 | saloon | 4761 x 1850 x 1431 | no | `volvo_s60` | unverified |
| Volvo S90 | saloon | 4963 x 1879 x 1443 | no | `volvo_s90` | unverified |
| Volvo V60 | estate | 4761 x 1850 x 1427 | no | `volvo_v60` | unverified |
| Volvo V90 | estate | 4936 x 1879 x 1475 | no | `volvo_v90` | unverified |

## Peugeot

Source: https://www.peugeot.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Peugeot 208 | hatchback | 4055 x 1745 x 1430 | no | `peugeot_208` | unverified |
| Peugeot e-208 | hatchback | 4055 x 1745 x 1430 | yes | `peugeot_e_208` | unverified |
| Peugeot 308 | hatchback | 4367 x 1852 x 1441 | no | `peugeot_308` | unverified |
| Peugeot 308 SW | estate | 4636 x 1852 x 1457 | no | `peugeot_308_sw` | unverified |
| Peugeot 2008 | suv | 4300 x 1770 x 1550 | no | `peugeot_2008` | unverified |
| Peugeot 3008 | suv | 4542 x 1895 x 1641 | no | `peugeot_3008` | unverified |
| Peugeot 5008 | suv | 4641 x 1895 x 1650 | no | `peugeot_5008` | unverified |
| Peugeot 408 | suv | 4687 x 1848 x 1478 | no | `peugeot_408` | unverified |
| Peugeot 508 | saloon | 4750 x 1859 x 1403 | no | `peugeot_508` | unverified |
| Peugeot Rifter | mpv | 4403 x 1848 x 1850 | no | `peugeot_rifter` | unverified |

## Renault

Source: https://www.renault.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Renault Clio | hatchback | 4053 x 1798 x 1440 | no | `renault_clio` | unverified |
| Renault Captur | suv | 4239 x 1797 x 1576 | no | `renault_captur` | unverified |
| Renault Megane E-Tech | hatchback | 4200 x 1768 x 1505 | yes | `renault_megane_e_tech` | unverified |
| Renault Arkana | suv | 4568 x 1821 x 1571 | no | `renault_arkana` | unverified |
| Renault Austral | suv | 4510 x 1825 x 1620 | no | `renault_austral` | unverified |
| Renault Scenic E-Tech | suv | 4470 x 1864 x 1571 | yes | `renault_scenic_e_tech` | unverified |
| Renault Renault 5 E-Tech | hatchback | 3922 x 1774 x 1498 | yes | `renault_renault_5_e_tech` | unverified |
| Renault Zoe | hatchback | 4087 x 1730 x 1562 | yes | `renault_zoe` | unverified |
| Renault Kangoo | mpv | 4486 x 1919 x 1838 | no | `renault_kangoo` | unverified |
| Renault Trafic | van | 4999 x 1956 x 1971 | no | `renault_trafic` | unverified |

## Skoda

Source: https://www.skoda.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Skoda Fabia | hatchback | 4108 x 1780 x 1459 | no | `skoda_fabia` | unverified |
| Skoda Scala | hatchback | 4362 x 1793 x 1471 | no | `skoda_scala` | unverified |
| Skoda Octavia | hatchback | 4689 x 1829 x 1470 | no | `skoda_octavia` | unverified |
| Skoda Octavia Estate | estate | 4689 x 1829 x 1485 | no | `skoda_octavia_estate` | unverified |
| Skoda Superb Estate | estate | 4902 x 1849 x 1511 | no | `skoda_superb_estate` | unverified |
| Skoda Kamiq | suv | 4241 x 1793 x 1531 | no | `skoda_kamiq` | unverified |
| Skoda Karoq | suv | 4390 x 1841 x 1603 | no | `skoda_karoq` | unverified |
| Skoda Kodiaq | suv | 4758 x 1864 x 1655 | no | `skoda_kodiaq` | unverified |
| Skoda Enyaq | suv | 4649 x 1879 x 1616 | yes | `skoda_enyaq` | unverified |
| Skoda Elroq | suv | 4488 x 1884 x 1625 | yes | `skoda_elroq` | unverified |

## MG

Source: https://www.mg.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| MG MG3 | hatchback | 4113 x 1797 x 1502 | no | `mg_mg3` | unverified |
| MG MG4 | hatchback | 4287 x 1836 x 1504 | yes | `mg_mg4` | unverified |
| MG MG5 EV | estate | 4544 x 1818 x 1513 | yes | `mg_mg5_ev` | unverified |
| MG MG ZS | suv | 4323 x 1809 x 1649 | no | `mg_mg_zs` | unverified |
| MG MG HS | suv | 4574 x 1876 x 1664 | no | `mg_mg_hs` | unverified |
| MG Marvel R | suv | 4674 x 1919 x 1618 | yes | `mg_marvel_r` | unverified |
| MG Cyberster | coupe | 4535 x 1913 x 1329 | yes | `mg_cyberster` | unverified |
| MG MG ZS EV | suv | 4323 x 1809 x 1649 | yes | `mg_mg_zs_ev` | unverified |

## Land Rover

Source: https://www.landrover.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Land Rover Defender 90 | suv | 4510 x 1996 x 1974 | no | `landrover_defender_90` | unverified |
| Land Rover Defender 110 | suv | 4758 x 1996 x 1967 | no | `landrover_defender_110` | unverified |
| Land Rover Defender 130 | suv | 5358 x 1996 x 1970 | no | `landrover_defender_130` | unverified |
| Land Rover Defender 110 Hard Top | van | 4758 x 1996 x 1967 | no | `landrover_defender_110_hard_top` | unverified |
| Land Rover Discovery Sport | suv | 4597 x 1904 x 1727 | no | `landrover_discovery_sport` | unverified |
| Land Rover Discovery | suv | 4956 x 2073 x 1846 | no | `landrover_discovery` | unverified |
| Land Rover Range Rover Evoque | suv | 4371 x 1904 x 1649 | no | `landrover_range_rover_evoque` | unverified |
| Land Rover Range Rover Velar | suv | 4803 x 1930 x 1665 | no | `landrover_range_rover_velar` | unverified |
| Land Rover Range Rover Sport | suv | 4946 x 1984 x 1820 | no | `landrover_range_rover_sport` | unverified |
| Land Rover Range Rover | suv | 5052 x 2047 x 1870 | no | `landrover_range_rover` | unverified |

## Mini

Source: https://www.mini.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Mini Cooper 3-door | hatchback | 3858 x 1756 x 1432 | no | `mini_cooper_3_door` | unverified |
| Mini Cooper 5-door | hatchback | 3876 x 1744 x 1432 | no | `mini_cooper_5_door` | unverified |
| Mini Cooper Convertible | coupe | 3876 x 1744 x 1415 | no | `mini_cooper_convertible` | unverified |
| Mini Cooper Electric | hatchback | 3858 x 1756 x 1460 | yes | `mini_cooper_electric` | unverified |
| Mini John Cooper Works | hatchback | 3876 x 1744 x 1432 | no | `mini_john_cooper_works` | unverified |
| Mini Aceman | suv | 4084 x 1754 x 1495 | yes | `mini_aceman` | unverified |
| Mini Clubman | estate | 4267 x 1800 x 1441 | no | `mini_clubman` | unverified |
| Mini Countryman | suv | 4433 x 1843 x 1656 | no | `mini_countryman` | unverified |
| Mini Countryman Electric | suv | 4433 x 1843 x 1656 | yes | `mini_countryman_electric` | unverified |
| Mini Cooper S 5-door | hatchback | 3876 x 1744 x 1432 | no | `mini_cooper_s_5_door` | unverified |

## Honda

Source: https://www.honda.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Honda Jazz | hatchback | 4044 x 1694 x 1526 | no | `honda_jazz` | unverified |
| Honda Jazz Crosstar | suv | 4044 x 1725 x 1556 | no | `honda_jazz_crosstar` | unverified |
| Honda Civic | hatchback | 4551 x 1802 x 1408 | no | `honda_civic` | unverified |
| Honda Civic Type R | hatchback | 4595 x 1890 x 1405 | no | `honda_civic_type_r` | unverified |
| Honda HR-V | suv | 4340 x 1790 x 1590 | no | `honda_hr_v` | unverified |
| Honda ZR-V | suv | 4568 x 1840 x 1620 | no | `honda_zr_v` | unverified |
| Honda CR-V | suv | 4706 x 1866 x 1691 | no | `honda_cr_v` | unverified |
| Honda e:Ny1 | suv | 4387 x 1790 x 1584 | yes | `honda_e_ny1` | unverified |
| Honda Honda e | hatchback | 3894 x 1752 x 1512 | yes | `honda_honda_e` | unverified |
| Honda Prelude | coupe | 4520 x 1880 x 1355 | no | `honda_prelude` | unverified |

## Mazda

Source: https://www.mazda.co.uk/ (model spec pages, UK). Status: unverified.

| Model | Body | L x W x H (mm) | Electric | Item id | Status |
| --- | --- | --- | --- | --- | --- |
| Mazda Mazda2 | hatchback | 4060 x 1695 x 1495 | no | `mazda_mazda2` | unverified |
| Mazda Mazda3 | hatchback | 4460 x 1795 x 1435 | no | `mazda_mazda3` | unverified |
| Mazda Mazda3 Fastback | saloon | 4660 x 1795 x 1440 | no | `mazda_mazda3_fastback` | unverified |
| Mazda Mazda6 Tourer | estate | 4805 x 1840 x 1480 | no | `mazda_mazda6_tourer` | unverified |
| Mazda CX-30 | suv | 4395 x 1795 x 1540 | no | `mazda_cx_30` | unverified |
| Mazda CX-5 | suv | 4575 x 1845 x 1680 | no | `mazda_cx_5` | unverified |
| Mazda CX-60 | suv | 4745 x 1890 x 1680 | no | `mazda_cx_60` | unverified |
| Mazda CX-80 | suv | 4990 x 1890 x 1710 | no | `mazda_cx_80` | unverified |
| Mazda MX-5 | coupe | 3915 x 1735 x 1235 | no | `mazda_mx_5` | unverified |
| Mazda MX-30 | suv | 4395 x 1795 x 1555 | yes | `mazda_mx_30` | unverified |

## Other vehicles

Modelled from simple shapes at typical sizes (no single maker): road, gravel, mountain, e-mountain, folding, BMX,
cargo and kids' balance bikes; cruiser, adventure, touring, trail and maxi-scooter motorbikes; snowmobiles (sport,
touring, utility, mountain); golf carts (2 seat, 4 seat, utility); quad bike and side-by-side; mobility scooters;
kids' and stunt kick scooters; a compact tractor; a touring caravan and two trailers. Sizes are typical, not a
particular model's. A ride-on mower, the electric and adult kick scooters, the moped and the first bicycles were
already in the pack.

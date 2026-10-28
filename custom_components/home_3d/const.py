"""Constants for Home 3D."""

from __future__ import annotations

DOMAIN = "home_3d"

STORAGE_VERSION = 1
# minor versions of the building store; each step has a migration in storage.py
STORAGE_MINOR_VERSION = 2
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"
STORAGE_KEY_HISTORY = f"{DOMAIN}.history"
STORAGE_KEY_PACKS = f"{DOMAIN}.packs"

# restore points: at most this many, and a new one only after this pause since the last one
HISTORY_MAX = 20
HISTORY_INTERVAL = 600

URL_BASE = "/home_3d_static"
MAIN_BUNDLE = "home-3d.js"
PANEL_URL_PATH = "home_3d"
PANEL_COMPONENT = "home-3d-panel"
PANEL_ICON = "mdi:floor-plan"
PANEL_TITLE = "Home 3D"

SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
# a sentence for the open views (see voice.py) and the hass.data key of its broker
SIGNAL_ASK = f"{DOMAIN}_ask"
DATA_ASK = f"{DOMAIN}_ask"
# the voice settings (which sentences Assist hands to Home 3D), kept in .storage
DATA_VOICE = f"{DOMAIN}_voice"
STORAGE_KEY_VOICE = f"{DOMAIN}.voice"
# the editors list (#7): who may change the plan, kept in .storage (see editors.py)
DATA_EDITORS = f"{DOMAIN}_editors"
STORAGE_KEY_EDITORS = f"{DOMAIN}.editors"

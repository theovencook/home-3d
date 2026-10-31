"""Constants for Home 3D."""

from __future__ import annotations

DOMAIN = "home_3d"

STORAGE_VERSION = 1
# minor versions of the building store; each step has a migration in storage.py
STORAGE_MINOR_VERSION = 2
# the format of a plan (#165): its `version`; an older plan is brought up to this one by the steps in migrations.py
PLAN_VERSION = 2
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"
STORAGE_KEY_HISTORY = f"{DOMAIN}.history"
STORAGE_KEY_PACKS = f"{DOMAIN}.packs"
# several homes (#53): the list of homes and which one is active; the first home (FIRST_HOME_ID) keeps the stores
# above, so an install from before #53 needs no data moved; every other home has its own three stores
STORAGE_KEY_HOMES = f"{DOMAIN}.homes"
FIRST_HOME_ID = "home"
DEFAULT_HOME_NAME = "Home"

# restore points: at most this many, and a new one only after this pause since the last one
HISTORY_MAX = 20
HISTORY_INTERVAL = 600

URL_BASE = "/home_3d_static"
MAIN_BUNDLE = "home-3d.js"
PANEL_URL_PATH = "home_3d"
PANEL_COMPONENT = "home-3d-panel"
PANEL_ICON = "mdi:floor-plan"
PANEL_TITLE = "Home 3D"
# integration option (#8): whether the panel has an entry in the sidebar (the panel URL and the card work either way)
CONF_SHOW_IN_SIDEBAR = "show_in_sidebar"
DEFAULT_SHOW_IN_SIDEBAR = True
# integration option (#154): how many days a picture only a restore point still uses is kept (0: not at all)
CONF_RESTORE_PICTURE_DAYS = "restore_picture_days"
DEFAULT_RESTORE_PICTURE_DAYS = 90

# a home's plan changed: (home id, revision)
SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
# the homes changed (one added, renamed, removed, or another one made active)
SIGNAL_HOMES_UPDATED = f"{DOMAIN}_homes_updated"
# a sentence for the open views (see voice.py) and the hass.data key of its broker
SIGNAL_ASK = f"{DOMAIN}_ask"
DATA_ASK = f"{DOMAIN}_ask"
# the voice settings (which sentences Assist hands to Home 3D), kept in .storage
DATA_VOICE = f"{DOMAIN}_voice"
STORAGE_KEY_VOICE = f"{DOMAIN}.voice"
# the editors list (#7): who may change the plan, kept in .storage (see editors.py)
DATA_EDITORS = f"{DOMAIN}_editors"
STORAGE_KEY_EDITORS = f"{DOMAIN}.editors"
# the household's own items, made in the item editor (#13), kept in .storage and offered as one more pack
STORAGE_KEY_ITEMS = f"{DOMAIN}.custom_items"
# pack updates (#26): the settings, pins and previous releases, kept in .storage (see pack_updates.py)
DATA_PACK_UPDATES = f"{DOMAIN}_pack_updates"
STORAGE_KEY_PACK_UPDATES = f"{DOMAIN}.pack_updates"
# a time of day as the plan and the update settings store it: "HH:MM", 00:00 to 23:59 (frontend show-when.ts HHMM)
TIME_PATTERN = r"^([01][0-9]|2[0-3]):[0-5][0-9]$"

"""Restoring a backup's packs (#375): a backup with large packs is sent in parts.

Home Assistant takes a websocket message of at most 4 MiB, and a backup carries every imported pack with the files it
came from. The frontend sends a backup's packs ahead in parts (`home_3d/backup/stage`, each part one message), then
`home_3d/backup/import` names the parts by their token and is checked and restored as one (#153). Parts are kept in
memory for a few minutes only and taken by the import that names them.
"""

from __future__ import annotations

import secrets
import time
from typing import Any

# how long staged packs wait for the import that names them, and how many backups may be staged at once
STAGE_SECONDS = 15 * 60
MAX_STAGED = 4
# packs one backup may stage (a backup with more is refused)
MAX_STAGED_PACKS = 1000


class StagedPacks:
    """The packs of backups being sent in parts, by token."""

    def __init__(self) -> None:
        self._staged: dict[str, dict[str, Any]] = {}

    def _expire(self, now: float) -> None:
        for token in [t for t, entry in self._staged.items() if now - entry["at"] > STAGE_SECONDS]:
            del self._staged[token]

    def add(self, token: str | None, packs: list[dict[str, Any]]) -> str | None:
        """Keep a part of a backup's packs; the token to send the next part and the import with (a new one when
        `token` is None). None when `token` is unknown (expired) or the backup stages too many packs."""
        now = time.monotonic()
        self._expire(now)
        if token is None:
            while len(self._staged) >= MAX_STAGED:
                del self._staged[min(self._staged, key=lambda t: self._staged[t]["at"])]
            token = secrets.token_hex(16)
            self._staged[token] = {"at": now, "packs": []}
        entry = self._staged.get(token)
        if entry is None or len(entry["packs"]) + len(packs) > MAX_STAGED_PACKS:
            return None
        entry["packs"].extend(packs)
        entry["at"] = now
        return token

    def take(self, token: str) -> list[dict[str, Any]] | None:
        """The packs staged under a token, which is then forgotten; None when it is unknown (expired)."""
        self._expire(time.monotonic())
        entry = self._staged.pop(token, None)
        return None if entry is None else entry["packs"]

"""Check and package furniture packs for Home 3D.

    python tools/fp3dpack.py validate FILE.json [FILE.json ...]
        Checks a pack file (or a bare pack source, the payload) with the same schema Home Assistant uses on
        import and prints a short summary. Exits with an error when a file does not validate.

    python tools/fp3dpack.py build SOURCE.json [--out PACK.fp3dpack]
        Checks a pack source (the payload, see custom_components/home_3d/packs.py) and writes the pack file
        ({"payload": ...}) that the extensions page imports.

Packs are not signed. Needs the package "voluptuous".
"""

from __future__ import annotations

import argparse
import importlib.util
import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent.parent
_spec = importlib.util.spec_from_file_location("fp3d_packs", ROOT / "custom_components" / "home_3d" / "packs.py")
assert _spec and _spec.loader
packs = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(packs)


def validate(paths: list[Path]) -> None:
    failed = False
    for path in paths:
        try:
            payload = packs.verify_pack(path.read_text(encoding="utf-8"))
        except packs.PackError as err:
            print(f"{path}: invalid: {err}")
            failed = True
            continue
        print(
            f"{path}: ok: {payload['name']} by {payload['publisher']}, {len(payload['items'])} items"
            + f", release {payload['release']}"
        )
    if failed:
        sys.exit(1)


def build(source: Path, out: Path | None) -> None:
    payload = json.loads(source.read_text(encoding="utf-8"))
    if isinstance(payload, dict) and isinstance(payload.get("payload"), dict):
        payload = payload["payload"]
    try:
        packs.validate_payload(payload)
    except packs.PackError as err:
        sys.exit(f"invalid: {err}")
    target = out or source.with_suffix(".fp3dpack")
    target.write_text(json.dumps({"payload": payload}, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"Packed {len(payload['items'])} items -> {target}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="command", required=True)
    p = sub.add_parser("validate", aliases=["verify"])
    p.add_argument("files", type=Path, nargs="+")
    p = sub.add_parser("build")
    p.add_argument("source", type=Path)
    p.add_argument("--out", type=Path)
    args = parser.parse_args()
    if args.command == "build":
        build(args.source, args.out)
    else:
        validate(args.files)


if __name__ == "__main__":
    main()

"""Publish the packs that ship with Home 3D into a checkout of the packs repository (#27).

    python tools/publish_packs.py PACKS_CHECKOUT [--source BUNDLED_PACKS_FOLDER]

Every pack folder in custom_components/home_3d/bundled_packs/ is checked first with the same schema and limits Home
Assistant uses on import (tools/fp3dpack.py), and a pack whose content differs from its copy in the checkout must have
a higher `release` than that copy: the update check compares releases only. If any pack fails, nothing is written.
Otherwise each pack folder is copied into the checkout (files that are gone from the pack are removed from its copy),
and README.md, NOTICE and LICENSE at the top of the checkout are written again. Git data and folders of other packs in the checkout are left
alone. Commit, push and tag the checkout yourself; see docs/packs.md ("Publishing the packs").
"""

from __future__ import annotations

import argparse
import importlib.util
import json
from pathlib import Path
import shutil
import sys

ROOT = Path(__file__).resolve().parent.parent
BUNDLED_DIR = ROOT / "custom_components" / "home_3d" / "bundled_packs"
REPO = "theovencook/home-3d-packs"
BRANCH = "main"
# the pack whose licence text becomes the licence of the whole repository (else the first pack that has one)
LICENCE_PACK = "theovencook.core"

IKEA_PACK = "theovencook.ikea-uk"
IKEA_NOTICE = (
    "IKEA is a trademark of Inter IKEA Systems B.V. The IKEA UK pack (theovencook.ikea-uk/) names IKEA products only\n"
    "so they can be found; its models are our own work, built from simple shapes. Home 3D is not affiliated with,\n"
    "sponsored by or endorsed by IKEA or Inter IKEA Systems B.V."
)

_spec = importlib.util.spec_from_file_location("fp3dpack", Path(__file__).resolve().parent / "fp3dpack.py")
assert _spec and _spec.loader
fp3dpack = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(fp3dpack)


class PublishError(Exception):
    """Nothing was published."""


def _pack_folders(source: Path) -> list[Path]:
    return sorted(
        p for p in source.iterdir() if p.is_dir() and not p.name.startswith(".") and (p / "pack.json").exists()
    )


def _checked(source: Path) -> list[tuple[Path, dict]]:
    folders = _pack_folders(source)
    if not folders:
        raise PublishError(f"no pack folders (with a pack.json) in {source}")
    problems: list[str] = []
    checked: list[tuple[Path, dict]] = []
    for folder in folders:
        try:
            pack = fp3dpack.check(folder)
        except fp3dpack.packs.PackError as err:
            problems.append(f"{folder.name}: {err}")
            continue
        if pack["id"] != folder.name:
            problems.append(f"{folder.name}: the folder must be named after the pack id {pack['id']}")
            continue
        checked.append((folder, pack))
    if problems:
        raise PublishError("not published, these packs fail the check:\n  " + "\n  ".join(problems))
    return checked


def _content(pack: dict) -> str:
    """What a pack holds apart from its release."""
    return json.dumps({k: v for k, v in pack.items() if k != "release"}, sort_keys=True)


def _not_bumped(checked: list[tuple[Path, dict]], target: Path) -> list[str]:
    """The packs that changed since their copy in the checkout without a higher release (#47): the update check
    would never offer the change."""
    problems: list[str] = []
    for folder, pack in checked:
        published = target / folder.name
        if not (published / "pack.json").exists():
            continue
        try:
            before = fp3dpack.check(published)
        except fp3dpack.packs.PackError:
            # a copy this version cannot read: compare by its release alone
            release = json.loads((published / "pack.json").read_text(encoding="utf-8")).get("release", 1)
            before = {"release": release, "content": None}
        if _content(before) != _content(pack) and pack["release"] <= before.get("release", 1):
            problems.append(
                f"{folder.name}: the content changed, so its release must go above {before.get('release', 1)}"
            )
    return problems


def _plural(count: int, word: str) -> str:
    return f"{count} {word}" + ("" if count == 1 else "s")


def readme(packs: list[dict]) -> str:
    lines = [
        "# Home 3D packs",
        "",
        "Furniture packs for [Home 3D](https://github.com/theovencook/home-3d), a floor plan and 3D room planner for",
        "Home Assistant. One folder per pack. All packs are MIT licensed (see `LICENSE`).",
        "",
        "Home 3D already ships with these packs and works offline. The copies here let you update a pack without",
        "waiting for a new Home 3D version: Home 3D checks each pack's own `release` number and offers a newer one.",
        "",
        "## Packs",
        "",
    ]
    for pack in packs:
        url = f"https://github.com/{REPO}/tree/{BRANCH}/{pack['id']}"
        lines += [
            f"### {pack['name']}",
            "",
            f"- Pack id: `{pack['id']}`",
            f"- {_plural(len(pack['items']), 'item')}, release {pack['release']}, licence {pack['licence']}",
            f"- Install URL: {url}",
        ]
        if pack.get("description"):
            lines += ["", pack["description"]]
        lines.append("")
    lines += [
        "## Install a pack",
        "",
        "In Home 3D open **Extensions**, choose **Install from GitHub**, paste a pack's install URL and confirm. Home",
        "Assistant downloads and checks the pack; nothing else is fetched. Pasting the repository URL",
        f"(`https://github.com/{REPO}`) lists the packs and asks for one folder URL.",
        "",
        "## Update a pack",
        "",
        "The update check compares each installed pack's `release` in its `pack.json` with the one here, so a new",
        "release of one pack does not show as an update for the others.",
        "",
        "## Contributing and format",
        "",
        "The pack format is described in the Home 3D repository (`docs/packs.md`). These folders are generated from",
        "the packs in Home 3D with `tools/publish_packs.py`; send changes to Home 3D rather than editing them here.",
    ]
    if any(p["id"] == IKEA_PACK for p in packs):
        lines += ["", "## Trademarks", "", IKEA_NOTICE.replace("\n", " ")]
    return "\n".join(lines) + "\n"


def notice(packs: list[dict]) -> str:
    text = (
        "Home 3D packs\nCopyright (c) 2026 theovencook\n\n"
        "The furniture packs in this repository are original work, published under the MIT License (LICENSE).\n"
        "They are not copies of the packs sold in Mastershort's shop. Home 3D is not affiliated with or endorsed by\n"
        "Mastershort.\n"
    )
    if any(p["id"] == IKEA_PACK for p in packs):
        text += "\n" + IKEA_NOTICE + "\n"
    return text


def _copy_pack(folder: Path, destination: Path) -> None:
    if destination.exists():
        shutil.rmtree(destination)
    shutil.copytree(folder, destination, ignore=shutil.ignore_patterns(".*", "__pycache__"))


def publish(target: Path, source: Path = BUNDLED_DIR) -> list[str]:
    """Copy the packs in `source` into the checkout `target`; returns the published pack ids.
    Raises PublishError, with nothing written, if any pack fails the check."""
    checked = _checked(source)
    if not target.is_dir():
        raise PublishError(f"{target} is not a folder")
    if problems := _not_bumped(checked, target):
        raise PublishError("not published, these packs need a new release:\n  " + "\n  ".join(problems))
    for folder, _ in checked:
        _copy_pack(folder, target / folder.name)
    packs = [pack for _, pack in checked]
    (target / "README.md").write_text(readme(packs), encoding="utf-8", newline="\n")
    (target / "NOTICE").write_text(notice(packs), encoding="utf-8", newline="\n")
    licences = [
        f / "LICENSE" for f, p in sorted(checked, key=lambda c: c[1]["id"] != LICENCE_PACK) if (f / "LICENSE").exists()
    ]
    if licences:
        shutil.copyfile(licences[0], target / "LICENSE")
    return [pack["id"] for pack in packs]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("target", type=Path, help="a checkout of the packs repository")
    parser.add_argument("--source", type=Path, default=BUNDLED_DIR, help="folder holding the pack folders")
    args = parser.parse_args()
    try:
        published = publish(args.target, args.source)
    except PublishError as err:
        sys.exit(str(err))
    print(f"published {len(published)} packs into {args.target}: {', '.join(published)}")


if __name__ == "__main__":
    main()

"""tools/publish_packs.py: copy the bundled packs into a checkout of theovencook/home-3d-packs (#27). No network."""

from __future__ import annotations

import importlib.util
import json
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent
_spec = importlib.util.spec_from_file_location("publish_packs", ROOT / "tools" / "publish_packs.py")
assert _spec and _spec.loader
publish_packs = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(publish_packs)

BUNDLED = ROOT / "custom_components" / "home_3d" / "bundled_packs"

CHAIR = {
    "id": "cube_chair",
    "name": {"en": "Cube chair"},
    "size": [0.8, 0.8, 0.75],
    "parts": [{"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 0.55, "color": "fabric"}],
}


def _pack(root: Path, pack_id: str, *, name: str = "Starter", release: int = 1, **extra: str) -> Path:
    folder = root / pack_id
    (folder / "seating").mkdir(parents=True)
    pack = {
        "format": "home3d-pack",
        "version": 2,
        "id": pack_id,
        "name": name,
        "publisher": "Test",
        "licence": "MIT",
        "release": release,
        "description": "Chairs for tests.",
        **extra,
    }
    (folder / "pack.json").write_text(json.dumps(pack), encoding="utf-8")
    (folder / "seating" / "cube_chair.json").write_text(json.dumps(CHAIR), encoding="utf-8")
    (folder / "LICENSE").write_text("MIT License\n\nCopyright (c) 2026 Test\n", encoding="utf-8")
    return folder


def _tree(root: Path) -> dict[str, str]:
    return {
        p.relative_to(root).as_posix(): p.read_text(encoding="utf-8")
        for p in sorted(root.rglob("*"))
        if p.is_file() and ".git" not in p.relative_to(root).parts
    }


def test_each_pack_folder_is_copied_whole(tmp_path: Path) -> None:
    source, target = tmp_path / "source", tmp_path / "packs"
    _pack(source, "test.one")
    _pack(source, "test.two")
    target.mkdir()

    published = publish_packs.publish(target, source)

    assert published == ["test.one", "test.two"]
    for pack_id in published:
        assert _tree(target / pack_id) == _tree(source / pack_id)


def test_files_removed_from_a_pack_are_removed_from_the_checkout(tmp_path: Path) -> None:
    source, target = tmp_path / "source", tmp_path / "packs"
    _pack(source, "test.one")
    (target / "test.one" / "seating").mkdir(parents=True)
    (target / "test.one" / "seating" / "old_chair.json").write_text("{}", encoding="utf-8")

    publish_packs.publish(target, source)

    assert not (target / "test.one" / "seating" / "old_chair.json").exists()
    assert (target / "test.one" / "seating" / "cube_chair.json").exists()


def test_git_data_and_other_files_in_the_checkout_are_left_alone(tmp_path: Path) -> None:
    source, target = tmp_path / "source", tmp_path / "packs"
    _pack(source, "test.one")
    (target / ".git").mkdir(parents=True)
    (target / ".git" / "HEAD").write_text("ref: refs/heads/main\n", encoding="utf-8")
    (target / "other-pack").mkdir()
    (target / "other-pack" / "pack.json").write_text("{}", encoding="utf-8")

    publish_packs.publish(target, source)

    assert (target / ".git" / "HEAD").read_text(encoding="utf-8") == "ref: refs/heads/main\n"
    assert (target / "other-pack" / "pack.json").exists()


def test_a_pack_that_fails_validation_stops_everything(tmp_path: Path) -> None:
    source, target = tmp_path / "source", tmp_path / "packs"
    _pack(source, "test.good")
    bad = _pack(source, "test.bad")
    (bad / "seating" / "cube_chair.json").write_text(json.dumps({**CHAIR, "parts": []}), encoding="utf-8")
    target.mkdir()

    with pytest.raises(publish_packs.PublishError, match=r"test.bad"):
        publish_packs.publish(target, source)

    assert list(target.iterdir()) == []


def test_a_changed_pack_needs_a_new_release(tmp_path: Path) -> None:
    """The update check compares releases, so a change published under the same release would never be offered (#47).
    Nothing is written then; the same content again, or a change with a higher release, publishes."""
    source, target = tmp_path / "source", tmp_path / "packs"
    target.mkdir()
    folder = _pack(source, "test.one")
    _pack(source, "test.two")
    publish_packs.publish(target, source)
    before = _tree(target)
    assert publish_packs.publish(target, source) == ["test.one", "test.two"]

    (folder / "seating" / "cube_chair.json").write_text(json.dumps({**CHAIR, "size": [1, 1, 1]}), encoding="utf-8")
    with pytest.raises(publish_packs.PublishError, match=r"test.one.*release"):
        publish_packs.publish(target, source)
    assert _tree(target) == before

    pack = json.loads((folder / "pack.json").read_text(encoding="utf-8"))
    (folder / "pack.json").write_text(json.dumps({**pack, "release": 2}), encoding="utf-8")
    publish_packs.publish(target, source)
    assert json.loads((target / "test.one" / "pack.json").read_text(encoding="utf-8"))["release"] == 2


def test_a_folder_name_that_is_not_the_pack_id_is_refused(tmp_path: Path) -> None:
    source, target = tmp_path / "source", tmp_path / "packs"
    _pack(source, "test.one").rename(source / "test.renamed")
    target.mkdir()

    with pytest.raises(publish_packs.PublishError, match=r"test.renamed"):
        publish_packs.publish(target, source)


def test_the_readme_lists_every_pack_with_its_install_url(tmp_path: Path) -> None:
    source, target = tmp_path / "source", tmp_path / "packs"
    _pack(source, "test.one", name="Chair pack", release=4)
    target.mkdir()

    publish_packs.publish(target, source)

    readme = (target / "README.md").read_text(encoding="utf-8")
    assert "Chair pack" in readme
    assert "`test.one`" in readme
    assert "https://github.com/theovencook/home-3d-packs/tree/main/test.one" in readme
    assert "release 4" in readme
    assert "1 item" in readme
    assert "Chairs for tests." in readme
    assert "MIT" in readme


def test_the_ikea_notice_is_written_only_when_the_ikea_pack_is_published(tmp_path: Path) -> None:
    source, plain, with_ikea = tmp_path / "source", tmp_path / "plain", tmp_path / "ikea"
    _pack(source, "test.one")
    plain.mkdir()
    with_ikea.mkdir()
    publish_packs.publish(plain, source)
    _pack(source, "theovencook.ikea-uk", name="IKEA UK range")
    publish_packs.publish(with_ikea, source)

    assert "IKEA" not in (plain / "NOTICE").read_text(encoding="utf-8")
    assert "IKEA" not in (plain / "README.md").read_text(encoding="utf-8")
    for name in ("NOTICE", "README.md"):
        text = " ".join((with_ikea / name).read_text(encoding="utf-8").split())
        assert "trademark of Inter IKEA Systems B.V." in text
        assert "not affiliated with, sponsored by or endorsed by IKEA" in text


def test_the_licence_at_the_top_is_the_packs_mit_licence(tmp_path: Path) -> None:
    source, target = tmp_path / "source", tmp_path / "packs"
    _pack(source, "test.one")
    target.mkdir()

    publish_packs.publish(target, source)

    assert (target / "LICENSE").read_text(encoding="utf-8") == (source / "test.one" / "LICENSE").read_text(
        encoding="utf-8"
    )


def test_publishing_twice_changes_nothing(tmp_path: Path) -> None:
    source, target = tmp_path / "source", tmp_path / "packs"
    _pack(source, "test.one")
    target.mkdir()

    publish_packs.publish(target, source)
    first = _tree(target)
    publish_packs.publish(target, source)

    assert _tree(target) == first


def test_the_real_bundled_packs_publish(tmp_path: Path) -> None:
    publish_packs.publish(tmp_path, BUNDLED)

    published = {p.name for p in tmp_path.iterdir() if (p / "pack.json").exists()}
    assert {"theovencook.core", "theovencook.ikea-uk", "theovencook.makers", "theovencook.devices"} <= published
    readme = (tmp_path / "README.md").read_text(encoding="utf-8")
    assert "tree/main/theovencook.core" in readme
    assert "tree/main/theovencook.ikea-uk" in readme
    assert "tree/main/theovencook.makers" in readme
    assert "tree/main/theovencook.devices" in readme

"""Assist asks the house: service, intent, sentences and the views' answers."""

from __future__ import annotations

import asyncio
from pathlib import Path
from typing import Any
from unittest.mock import patch

from homeassistant.core import HomeAssistant
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import intent

from custom_components.home_3d.const import DOMAIN
from custom_components.home_3d.voice import remove_sentences, sentences_yaml, write_sentences

from .test_init import _setup

_OMIT = object()


async def _view(hass_ws_client, hass: HomeAssistant, screen: Any = _OMIT, token: str | None = None):
    """An open Home 3D view: subscribed to the sentences (`screen`: its screen name; left out as an older
    frontend does)."""
    client = await hass_ws_client(hass, token) if token else await hass_ws_client(hass)
    msg: dict[str, Any] = {"id": 1, "type": "home_3d/voice/subscribe"}
    if screen is not _OMIT:
        msg["screen"] = screen
    await client.send_json(msg)
    assert (await client.receive_json())["success"]
    return client


async def _reply(client, ask: dict, text: str, answered: bool, msg_id: int = 2) -> dict:
    await client.send_json(
        {"id": msg_id, "type": "home_3d/voice/answer", "ask_id": ask["ask_id"], "text": text, "answered": answered}
    )
    return (await client.receive_json())["result"]


def _ask_service(hass: HomeAssistant, text: str, **extra: Any) -> asyncio.Task:
    return hass.async_create_task(
        hass.services.async_call(DOMAIN, "ask", {"text": text, **extra}, blocking=True, return_response=True)
    )


async def test_a_view_that_understands_wins_over_one_that_did_not_reply_first(
    hass: HomeAssistant, hass_ws_client
) -> None:
    """Two homes on two screens: the one that cannot answer replies first, the one that can still wins (#366)."""
    await _setup(hass)
    first = await _view(hass_ws_client, hass, "")
    second = await _view(hass_ws_client, hass, "")
    with patch("custom_components.home_3d.voice.ANSWER_TIMEOUT", 30):
        task = _ask_service(hass, "Show the kitchen")
        ask = (await first.receive_json())["event"]
        await second.receive_json()
        assert await _reply(first, ask, "", False) == {"taken": True}
        assert not task.done()
        assert await _reply(second, ask, "Showing the kitchen.", True) == {"taken": True}
        result = await asyncio.wait_for(task, 5)
    assert result == {"answered": True, "answer": "Showing the kitchen.", "screen_open": True}


async def test_not_understood_once_every_view_said_so_or_the_time_is_up(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    first = await _view(hass_ws_client, hass, "")
    second = await _view(hass_ws_client, hass)
    # every view asked said it did not understand: answered at once, not after the timeout
    with patch("custom_components.home_3d.voice.ANSWER_TIMEOUT", 30):
        task = _ask_service(hass, "Blubb")
        ask = (await first.receive_json())["event"]
        assert (await second.receive_json())["event"]["ask_id"] == ask["ask_id"]
        await _reply(first, ask, "", False)
        await _reply(second, ask, "", False)
        assert (await asyncio.wait_for(task, 5))["answered"] is False
    # one said so, the other never answers: not understood when the time is up (not "no screen")
    with patch("custom_components.home_3d.voice.ANSWER_TIMEOUT", 0.2):
        task = _ask_service(hass, "Blubb")
        ask = (await first.receive_json())["event"]
        await second.receive_json()
        await _reply(first, ask, "", False, 3)
        assert await task == {"answered": False, "answer": "", "screen_open": True}


async def test_without_a_view_the_answer_comes_at_once(hass: HomeAssistant) -> None:
    """No Home 3D screen open: nobody to wait for (#366)."""
    await _setup(hass)
    with patch("custom_components.home_3d.voice.ANSWER_TIMEOUT", 30):
        result = await asyncio.wait_for(_ask_service(hass, "Show the kitchen"), 5)
        assert result == {"answered": False, "answer": "", "screen_open": False}
        response = await asyncio.wait_for(
            intent.async_handle(hass, "test", "Home3DAsk", {"text": {"value": "kitchen"}}, language="en"), 5
        )
    assert response.speech["plain"]["speech"] == "No Home 3D screen is open right now."


async def test_a_sentence_for_one_screen_reaches_only_that_screen(hass: HomeAssistant, hass_ws_client) -> None:
    """The service's `screen`: the views of that name get it (and a view of an older frontend, which picks for
    itself); a view of another name never sees it."""
    await _setup(hass)
    hall = await _view(hass_ws_client, hass, "Hall ")
    kitchen = await _view(hass_ws_client, hass, "Kitchen")
    older = await _view(hass_ws_client, hass)
    with patch("custom_components.home_3d.voice.ANSWER_TIMEOUT", 30):
        task = _ask_service(hass, "Show the kitchen", screen="hall")
        ask = (await hall.receive_json())["event"]
        assert ask["screen"] == "hall"
        assert (await older.receive_json())["event"]["ask_id"] == ask["ask_id"]
        await _reply(hall, ask, "Showing the kitchen.", True)
        assert (await asyncio.wait_for(task, 5))["answered"] is True
        # the older view is the only one asked for a screen nobody else has: its "not understood" ends it at once
        task = _ask_service(hass, "Show the kitchen", screen="Landing")
        ask = (await older.receive_json())["event"]
        await _reply(older, ask, "", False)
        assert (await asyncio.wait_for(task, 5))["answered"] is False
    # the kitchen view got neither sentence: its next message is the answer to its own ping
    await kitchen.send_json({"id": 9, "type": "ping"})
    assert (await kitchen.receive_json())["type"] == "pong"


async def test_a_satellite_asks_the_screen_next_to_it(hass: HomeAssistant, hass_ws_client) -> None:
    """Said to a satellite whose device or area has the name of an open screen: only that screen is asked (#366).
    No screen of that name open, or no device given: every view, as before."""
    entry = await _setup(hass)
    kitchen_area = ar.async_get(hass).async_create("Sample Kitchen")
    devices = dr.async_get(hass)
    satellite = devices.async_get_or_create(
        config_entry_id=entry.entry_id, identifiers={("test", "sat_kitchen")}, name="Sample satellite"
    )
    devices.async_update_device(satellite.id, area_id=kitchen_area.id)
    lonely = devices.async_get_or_create(
        config_entry_id=entry.entry_id, identifiers={("test", "sat_garage")}, name="Garage satellite"
    )
    kitchen = await _view(hass_ws_client, hass, "sample kitchen")
    hall = await _view(hass_ws_client, hass, "Hall")

    async def ask(device_id: str | None) -> tuple[dict, intent.IntentResponse]:
        task = hass.async_create_task(
            intent.async_handle(
                hass,
                "test",
                "Home3DAsk",
                {"text": {"value": "kitchen"}},
                text_input="show the kitchen",
                language="en",
                device_id=device_id,
            )
        )
        got = (await kitchen.receive_json())["event"]
        await _reply(kitchen, got, "Showing the kitchen.", True, next(ids))
        return got, await task

    ids = iter(range(10, 100))
    got, response = await ask(satellite.id)
    assert got["screen"] == "Sample Kitchen"
    assert response.speech["plain"]["speech"] == "Showing the kitchen."
    # the hall view was not asked
    await hall.send_json({"id": 5, "type": "ping"})
    assert (await hall.receive_json())["type"] == "pong"
    # a satellite by no open screen, and no satellite: every view
    for device_id in (lonely.id, None):
        got, _ = await ask(device_id)
        assert got["screen"] is None
        assert (await hall.receive_json())["event"]["ask_id"] == got["ask_id"]


async def test_the_views_still_listen_after_a_reload(hass: HomeAssistant, hass_ws_client) -> None:
    entry = await _setup(hass)
    view = await _view(hass_ws_client, hass, "")
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done()
    task = _ask_service(hass, "Show the kitchen")
    ask = (await view.receive_json())["event"]
    await _reply(view, ask, "Showing the kitchen.", True)
    assert (await task)["answered"] is True


async def test_service_hands_the_sentence_to_the_views_and_returns_the_first_answer(
    hass: HomeAssistant, hass_ws_client
) -> None:
    await _setup(hass)
    view = await _view(hass_ws_client, hass)
    other = await _view(hass_ws_client, hass)

    task = hass.async_create_task(
        hass.services.async_call(
            DOMAIN, "ask", {"text": "Zeig das Wohnzimmer", "speak": True}, blocking=True, return_response=True
        )
    )
    ask = (await view.receive_json())["event"]
    assert ask["text"] == "Zeig das Wohnzimmer"
    assert ask["speak"] is True
    assert ask["screen"] is None
    assert (await other.receive_json())["event"]["ask_id"] == ask["ask_id"]

    await view.send_json(
        {"id": 2, "type": "home_3d/voice/answer", "ask_id": ask["ask_id"], "text": "Ich zeige das Wohnzimmer."}
    )
    assert (await view.receive_json())["result"] == {"taken": True}
    # the second view is late
    await other.send_json({"id": 2, "type": "home_3d/voice/answer", "ask_id": ask["ask_id"], "text": "Wohnzimmer"})
    assert (await other.receive_json())["result"] == {"taken": False}

    assert await task == {"answered": True, "answer": "Ich zeige das Wohnzimmer.", "screen_open": True}


async def test_service_without_an_open_view_says_so(hass: HomeAssistant) -> None:
    await _setup(hass)
    with patch("custom_components.home_3d.voice.ANSWER_TIMEOUT", 0.05):
        result = await hass.services.async_call(
            DOMAIN, "ask", {"text": "Zeig die Küche", "screen": "Flur"}, blocking=True, return_response=True
        )
    assert result == {"answered": False, "answer": "", "screen_open": False}


async def test_intent_speaks_the_answer_or_that_nothing_was_understood(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    view = await _view(hass_ws_client, hass)

    ids = iter(range(10, 100))

    async def answer(text: str, answered: bool) -> intent.IntentResponse:
        task = hass.async_create_task(
            intent.async_handle(hass, "test", "Home3DAsk", {"text": {"value": text}}, text_input=text, language="de")
        )
        ask = (await view.receive_json())["event"]
        assert ask["text"] == text
        await view.send_json(
            {
                "id": next(ids),
                "type": "home_3d/voice/answer",
                "ask_id": ask["ask_id"],
                "text": "Drei Fenster sind offen.",
                "answered": answered,
            }
        )
        await view.receive_json()
        return await task

    assert (await answer("Was ist offen", True)).speech["plain"]["speech"] == "Drei Fenster sind offen."
    assert (await answer("Blubb", False)).speech["plain"]["speech"] == "Das hat Home 3D nicht verstanden."


async def test_intent_without_a_view(hass: HomeAssistant) -> None:
    await _setup(hass)
    with patch("custom_components.home_3d.voice.ANSWER_TIMEOUT", 0.05):
        response = await intent.async_handle(
            hass, "test", "Home3DAsk", {"text": {"value": "living room"}}, language="en"
        )
    assert response.speech["plain"]["speech"] == "No Home 3D screen is open right now."


def test_sentences_are_written_only_on_request_and_never_over_a_changed_file(tmp_path: Path) -> None:
    de = tmp_path / "custom_sentences" / "de" / "home_3d.yaml"
    en = tmp_path / "custom_sentences" / "en" / "home_3d.yaml"
    hashes, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert changed and kept == []
    text = de.read_text(encoding="utf-8")
    assert text == sentences_yaml("de", "distinct")
    assert "zeig[e] [mir] [mal] [bitte] {text}" in text
    # only the distinct sentences: a question Home Assistant answers itself is not taken (#641)
    assert "welche (fenster|türen) sind [noch] offen" not in text
    assert en.is_file()
    # unchanged: nothing written
    hashes, kept, changed = write_sentences(tmp_path, "distinct", hashes)
    assert not changed
    # "all" adds the questions
    hashes, kept, changed = write_sentences(tmp_path, "all", hashes)
    assert changed and "welche (fenster|türen) sind [noch] offen" in de.read_text(encoding="utf-8")
    # a file the user changed is never overwritten, nor removed
    de.write_text("my own sentences", encoding="utf-8")
    hashes, kept, changed = write_sentences(tmp_path, "distinct", hashes)
    assert kept == ["de"]
    assert de.read_text(encoding="utf-8") == "my own sentences"
    hashes, kept, _ = write_sentences(tmp_path, "off", hashes)
    assert kept == ["de"] and de.exists() and not en.exists()
    # removing the integration takes only Home 3D's own files
    hashes, _, _ = write_sentences(tmp_path, "distinct", hashes)
    remove_sentences(tmp_path, hashes)
    assert not en.exists()
    assert de.read_text(encoding="utf-8") == "my own sentences"


def test_a_file_an_older_version_wrote_is_still_ours(tmp_path: Path) -> None:
    """Files from 1.22.0 - 1.24.0 (older header lines) are replaced, not kept as the user's own."""
    de = tmp_path / "custom_sentences" / "de" / "home_3d.yaml"
    de.parent.mkdir(parents=True)
    de.write_text(
        sentences_yaml("de", "distinct").replace(
            "# understands answers). Put your own sentences for Home3DAsk into another file.\n",
            "# understands answers). Rewritten on every start: "
            "put your own sentences for Home3DAsk into another file.\n",
        ),
        encoding="utf-8",
    )
    _, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert kept == [] and changed
    assert de.read_text(encoding="utf-8") == sentences_yaml("de", "distinct")


async def test_setup_writes_no_sentence_file(hass: HomeAssistant) -> None:
    """Nothing lands in the configuration folder unless an admin picks the sentences (HACS review)."""
    await _setup(hass)
    assert not (Path(hass.config.config_dir) / "custom_sentences").exists()


async def test_unload_removes_service_and_intent(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    assert hass.services.has_service(DOMAIN, "ask")
    assert await hass.config_entries.async_unload(entry.entry_id)
    await hass.async_block_till_done()
    assert not hass.services.has_service(DOMAIN, "ask")


# a file an early version wrote with its own, shorter set of sentences (seen on a real installation)
_EARLY_FILE = """# Written by Home 3D: the sentences Assist hands to the open Home 3D views (the first one that
# understands answers). Rewritten on every start: put your own sentences for Home3DAsk into another file.
language: "de"
intents:
  Home3DAsk:
    data:
      - sentences:
          - "zeig[e] [mir] [mal] [bitte] {text}"
          - "wo (ist|sind|steht|stehen) {text}"
          - "gute nacht"
lists:
  text:
    wildcard: true
"""


def test_an_early_file_with_other_sentences_is_still_ours(tmp_path: Path) -> None:
    """Only Home 3D's sentences under Home 3D's header: replaced (it lacked "wer ist zu hause"); one sentence of
    the user's own in it, and it stays."""
    de = tmp_path / "custom_sentences" / "de" / "home_3d.yaml"
    de.parent.mkdir(parents=True)
    de.write_text(_EARLY_FILE, encoding="utf-8")
    _, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert kept == [] and changed
    assert "wer ist [gerade] (zu hause|zuhause|daheim)" in de.read_text(encoding="utf-8")
    de.write_text(
        _EARLY_FILE.replace('          - "gute nacht"\n', '          - "mach das licht aus"\n'), encoding="utf-8"
    )
    _, kept, _ = write_sentences(tmp_path, "distinct", {})
    assert kept == ["de"]


def test_the_names_locating_knows_are_a_list_not_a_wildcard(tmp_path: Path) -> None:
    """ "Wo ist Frauke?" matches a list of names exactly, so Assist handles it locally and an AI agent behind it
    never gets the question."""
    de = tmp_path / "custom_sentences" / "de" / "home_3d.yaml"
    hashes, _, _ = write_sentences(tmp_path, "distinct", {}, ["Torsten Apple Watch", "Torsten", 'Frau "K"'])
    text = de.read_text(encoding="utf-8")
    assert "wo (ist|steckt|sind) [der|die|das|mein|meine] {home3d_who}" in text
    assert '      - "Torsten Apple Watch"' in text and '      - "Frau \\"K\\""' in text
    # the names change: the file follows; no names: the list goes
    _, _, changed = write_sentences(tmp_path, "distinct", hashes, ["Torsten"])
    assert changed and "Apple Watch" not in de.read_text(encoding="utf-8")
    write_sentences(tmp_path, "distinct", {}, [])
    assert "home3d_who" not in de.read_text(encoding="utf-8")


def test_an_older_file_with_fewer_sentences_is_still_ours(tmp_path: Path) -> None:
    """A file of an older version had fewer sentences (no "wer ist zu hause"): replaced, not kept as the user's."""
    de = tmp_path / "custom_sentences" / "de" / "home_3d.yaml"
    de.parent.mkdir(parents=True)
    de.write_text(
        "# Written by Home 3D: the sentences Assist hands to the open Home 3D views (the first one that\n"
        "# understands answers). Rewritten on every start: put your own sentences for Home3DAsk into another file.\n"
        'language: "de"\nintents:\n  Home3DAsk:\n    data:\n      - sentences:\n'
        '          - "zeig[e] [mir] [mal] [bitte] {text}"\n          - "wo (ist|sind|steht|stehen) {text}"\n'
        "lists:\n  text:\n    wildcard: true\n",
        encoding="utf-8",
    )
    _, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert kept == [] and changed
    # one sentence of the user's own in it: kept
    de.write_text(
        de.read_text(encoding="utf-8")
        .replace("wildcard: true", "wildcard: true\n")
        .replace('          - "zeig', '          - "mach das licht an"\n          - "zeig'),
        encoding="utf-8",
    )
    _, kept, _ = write_sentences(tmp_path, "distinct", {})
    assert kept == ["de"]


def test_the_names_locating_knows_are_sentences(tmp_path: Path) -> None:
    """ "Wo ist Frauke?" as a list of names (no wildcard): Assist matches it locally even with an AI agent."""
    de = tmp_path / "custom_sentences" / "de" / "home_3d.yaml"
    hashes, _, _ = write_sentences(tmp_path, "distinct", {}, ["Frauke", "Torstens iPhone"])
    text = de.read_text(encoding="utf-8")
    assert "{home3d_who}" in text and '      - "Torstens iPhone"' in text
    # names changed: the file is ours, so it is rewritten
    _, kept, changed = write_sentences(tmp_path, "distinct", hashes, ["Frauke"])
    assert kept == [] and changed and "Torstens iPhone" not in de.read_text(encoding="utf-8")

// Websocket calls to the backend (custom_components/home_3d/websocket.py).

import type { EditorUser } from "./editors.ts";
import type { Building } from "./model.ts";
import type { FurniturePack, PackOrigin } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

/** `can_edit`: the user is on the editors list (missing from backends before #7). */
export async function fetchBuilding(hass: HomeAssistant): Promise<{ building: Building; revision: number; version?: string; can_edit?: boolean }> {
  return hass.callWS({ type: "home_3d/building/get" });
}

export async function saveBuilding(hass: HomeAssistant, building: Building): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "home_3d/building/save", building });
  return res.revision;
}

export function subscribeBuilding(hass: HomeAssistant, callback: (revision: number) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<{ revision: number }>((msg) => callback(msg.revision), {
    type: "home_3d/building/subscribe",
  });
}

/** A sentence Assist or the service `home_3d.ask` hands to the open views. */
export interface Ask {
  ask_id: string;
  text: string;
  /** Only the view with this screen name reacts (null: every open view). */
  screen: string | null;
  /** The view speaks its answer (a satellite that asked speaks itself). */
  speak: boolean;
  /** Plan rooms to fly into instead of a sentence ("Where is Torsten?": his room; "Who is home?": a tour). */
  show_rooms?: string[];
  /** The rooms are people's while people are shown to admins only: only an admin's view flies there. */
  admins_only?: boolean;
}

export function subscribeAsk(hass: HomeAssistant, callback: (ask: Ask) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<Ask>(callback, { type: "home_3d/voice/subscribe" });
}

/** The view's answer; `taken` is false when another view was first. */
export async function answerAsk(hass: HomeAssistant, askId: string, text: string, answered: boolean): Promise<boolean> {
  const res = await hass.callWS<{ taken: boolean }>({ type: "home_3d/voice/answer", ask_id: askId, text, answered });
  return res.taken;
}

export async function fetchImage(hass: HomeAssistant, imageId: string): Promise<string> {
  const res = await hass.callWS<{ data: string }>({ type: "home_3d/image/get", image_id: imageId });
  return res.data;
}

export async function storeImage(hass: HomeAssistant, imageId: string, data: string): Promise<void> {
  await hass.callWS({ type: "home_3d/image/set", image_id: imageId, data });
}

export interface Snapshot {
  id: string;
  revision: number;
  /** Unix time in seconds. */
  saved_at: number;
  floors: number;
  rooms: number;
  furniture: number;
}

export async function listHistory(hass: HomeAssistant): Promise<Snapshot[]> {
  const res = await hass.callWS<{ snapshots: Snapshot[] }>({ type: "home_3d/history/list" });
  return res.snapshots;
}

export async function takeSnapshot(hass: HomeAssistant): Promise<void> {
  await hass.callWS({ type: "home_3d/history/snapshot" });
}

export async function restoreSnapshot(hass: HomeAssistant, snapshotId: string): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "home_3d/history/restore", snapshot_id: snapshotId });
  return res.revision;
}

export async function listPacks(hass: HomeAssistant): Promise<FurniturePack[]> {
  const res = await hass.callWS<{ packs: FurniturePack[] }>({ type: "home_3d/packs/list" });
  return res.packs;
}

export interface ImportedPack {
  id: string;
  name: string;
  publisher: string;
  /** The licence the pack declares; null for an old single-file pack. */
  licence: string | null;
  items: number;
}

/** Import an old single-file pack; the backend checks its content (errors carry a code, e.g. "invalid_content"). */
export async function importPack(hass: HomeAssistant, text: string): Promise<ImportedPack> {
  return hass.callWS<ImportedPack>({ type: "home_3d/packs/import", pack: text });
}

/** Import a v2 pack folder (path inside the folder -> file text); the backend checks every file. */
export async function importPackFolder(hass: HomeAssistant, files: Record<string, string>): Promise<ImportedPack> {
  return hass.callWS<ImportedPack>({ type: "home_3d/packs/import", files });
}

/** Install a pack from a GitHub URL (a repo, or a pack folder in one); Home Assistant fetches and checks it (#25). */
export async function installPackFromUrl(hass: HomeAssistant, url: string): Promise<ImportedPack & { origin: PackOrigin }> {
  return hass.callWS<ImportedPack & { origin: PackOrigin }>({ type: "home_3d/packs/install_url", url });
}

export async function removePack(hass: HomeAssistant, packId: string): Promise<void> {
  await hass.callWS({ type: "home_3d/packs/remove", pack_id: packId });
}

/** A full backup file: the plan, the packs and every stored picture. */
export interface BackupFile {
  format: "home3d-backup";
  version: 1;
  exported_at?: string;
  building: Building;
  packs?: FurniturePack[];
  images?: Record<string, string>;
}

export function fetchBackup(hass: HomeAssistant): Promise<Pick<BackupFile, "format" | "version" | "building" | "packs">> {
  return hass.callWS({ type: "home_3d/backup/export" });
}

/** Replace plan and packs from a backup (pictures follow one by one); packs that fail their check are skipped. */
export function restoreBackup(
  hass: HomeAssistant,
  building: Building,
  packs: FurniturePack[],
): Promise<{ revision: number; building: Building; packs: number; skipped: { id: string; reason: string }[] }> {
  return hass.callWS({ type: "home_3d/backup/import", building, packs });
}

export type SentenceMode = "distinct" | "all" | "off";

/** Which sentences Assist hands to Home 3D (the sentence files Home Assistant reads). */
export async function getVoiceSettings(hass: HomeAssistant): Promise<{ sentences: SentenceMode }> {
  return hass.callWS({ type: "home_3d/voice/settings" });
}

export async function setVoiceSentences(hass: HomeAssistant, sentences: SentenceMode): Promise<{ sentences: SentenceMode; kept?: string[] }> {
  return hass.callWS({ type: "home_3d/voice/settings/set", sentences });
}

/** Everyone who signs in and whether they are on the editors list (#7; admins only). `custom` is false while
 * the list is the default: every admin. */
export function getEditors(hass: HomeAssistant): Promise<{ users: EditorUser[]; custom: boolean }> {
  return hass.callWS({ type: "home_3d/editors/get" });
}

/** Pick the editors (null: every admin again). A list without an admin is refused ("no_admin"). */
export function setEditors(hass: HomeAssistant, editors: string[] | null): Promise<{ users: EditorUser[]; custom: boolean }> {
  return hass.callWS({ type: "home_3d/editors/set", editors });
}

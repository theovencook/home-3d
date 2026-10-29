// Pack updates (#26): what the backend says about updates (custom_components/home_3d/pack_updates.py), and the
// small rules the extensions page follows. Installed packs are checked on a schedule; a newer release goes into the
// library, and a placed item takes it only when it is updated (one by one, or by the auto-update setting).

export type CheckFrequency = "off" | "daily" | "weekly" | "monthly";

export interface PackUpdateSettings {
  /** Apply new releases to placed items without asking (off: each placed item waits for an editor). */
  auto_update: boolean;
  frequency: CheckFrequency;
  /** Local time of the check, "HH:MM". */
  time: string;
  /** The day of a weekly check, 0 = Monday (a monthly check runs on the 1st). */
  weekday: number;
}

export interface PackUpdateState {
  id: string;
  release: number;
  bundled: boolean;
  /** Pinned to its release: no check updates it, auto-update leaves its items alone. */
  pinned: boolean;
  /** Installed from GitHub, so checks look for new releases. */
  checked: boolean;
  /** The release a roll back would put back, null when there is none. */
  previous_release: number | null;
  /** The last check: when, the release found, or why it failed. */
  checked_at?: number;
  latest_release?: number;
  error?: string;
}

/** A placed item whose pack has a newer release than the plan's copy. */
export interface PlacedUpdate {
  /** The furniture type, "pack:<pack id>:<item id>". */
  type: string;
  pack: string;
  item: string;
  name: Record<string, string>;
  /** The release of the plan's copy and of the installed item. */
  release: number;
  new_release: number;
  /** How often it is placed. */
  placed: number;
  pinned: boolean;
}

export interface PackUpdateStatus {
  settings: PackUpdateSettings;
  last_check: number | null;
  packs: PackUpdateState[];
  items: PlacedUpdate[];
}

/** The refusals that are questions: an older release than the installed one, another release of a pinned pack. */
export const CONFIRM_CODES = ["older_release", "pinned"] as const;
export type ConfirmCode = (typeof CONFIRM_CODES)[number];

/**
 * Sends an import or install; when the backend asks first (an older release, a pinned pack), asks the user and sends
 * it again confirmed. Null when the user said no; any other refusal is thrown.
 */
export async function askingFirst<T>(
  send: (confirm: boolean) => Promise<T>,
  ask: (code: ConfirmCode, message: string) => boolean,
): Promise<T | null> {
  try {
    return await send(false);
  } catch (err) {
    const { code, message } = (err ?? {}) as { code?: string; message?: string };
    if (!CONFIRM_CODES.includes(code as ConfirmCode)) throw err;
    if (!ask(code as ConfirmCode, message ?? "")) return null;
    return send(true);
  }
}

/** The placed items with an update (not counting pinned packs), the pinned ones, and how many placements wait. */
export function updateSummary(status: PackUpdateStatus): { updates: number; pinned: number; placed: number } {
  const open = status.items.filter((i) => !i.pinned);
  return { updates: open.length, pinned: status.items.length - open.length, placed: open.reduce((s, i) => s + i.placed, 0) };
}

/** When the next scheduled check runs (local time), null when checks are off. */
export function nextCheck(settings: PackUpdateSettings, now: Date = new Date()): Date | null {
  if (settings.frequency === "off") return null;
  const [hour, minute] = settings.time.split(":").map(Number);
  for (let day = 0; day <= 62; day++) {
    const at = new Date(now.getFullYear(), now.getMonth(), now.getDate() + day, hour, minute);
    if (at <= now) continue;
    // JavaScript counts Sunday as 0; the setting counts Monday as 0 (like Python)
    if (settings.frequency === "weekly" && (at.getDay() + 6) % 7 !== settings.weekday) continue;
    if (settings.frequency === "monthly" && at.getDate() !== 1) continue;
    return at;
  }
  return null;
}

// A short message when something the household pressed did not work (#171): a service call that Home Assistant
// refused, a picture that was not stored. One toast per page, over everything (a card on a wall tablet may be full
// screen, so it goes into the full-screen element). The texts come from the caller (the items bundle has no room for
// i18n.ts). Tests set a sink and read what was shown.

import type { HomeAssistant } from "./types.ts";

type FailureGlobal = { __fp3dFailureSink?: ((text: string) => void) | null };
const g = globalThis as FailureGlobal;

/** Replaces the toast (tests); null brings it back. */
export function setFailureSink(sink: ((text: string) => void) | null): void {
  g.__fp3dFailureSink = sink;
}

/** What went wrong in a few words: the error's own message, else its code, else the text of whatever was thrown. */
export function errorText(err: unknown): string {
  const e = (err ?? {}) as { message?: string; code?: string | number; error?: { message?: string } };
  return String(e.message ?? e.error?.message ?? e.code ?? err);
}

let timer: ReturnType<typeof setTimeout> | undefined;

/** Shows `text` for a few seconds (a second one replaces the first). */
export function showFailure(text: string): void {
  if (g.__fp3dFailureSink) return g.__fp3dFailureSink(text);
  if (typeof document === "undefined") return;
  let fs: Element | null = document.fullscreenElement;
  while (fs?.shadowRoot?.fullscreenElement) fs = fs.shadowRoot.fullscreenElement;
  const root = fs ?? document.body;
  let el = root.querySelector<HTMLElement>(":scope > .fp3d-failure");
  if (!el) {
    el = document.createElement("div");
    el.className = "fp3d-failure";
    el.setAttribute("role", "alert");
    el.style.cssText =
      "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483000;max-width:min(92vw,520px);padding:12px 16px;border-radius:12px;" +
      "background:#8a1f1f;color:#fff;font:14px/1.35 system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.45);";
    root.appendChild(el);
  }
  el.textContent = text;
  clearTimeout(timer);
  timer = setTimeout(() => el.remove(), 6000);
}

/**
 * Calls a Home Assistant service and shows `message({error})` when it is refused or never arrives. Never throws: a
 * press that does nothing used to look exactly like one that worked.
 */
export function callServiceSafe(hass: HomeAssistant, domain: string, service: string, data: Record<string, unknown>, message: (error: string) => string): void {
  const fail = (err: unknown) => showFailure(message(errorText(err)));
  try {
    void Promise.resolve(hass.callService(domain, service, data)).catch(fail);
  } catch (err) {
    fail(err);
  }
}

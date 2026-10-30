// The warnings ignored "for good" from the 3D view's banner (#138), each with a button that brings it back. Shared by
// the editor's ⚙ Weather & warnings and the ⚙ menu over the 3D view; self-contained (markup and look) so the settings
// page (#139) can take it over as it is. Only editors restore.

import { html, nothing } from "lit";
import { alertKey, HOUSE_ALERTS, type AlertRef } from "../alerts.ts";
import { entityName } from "../devices.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { HomeAssistant } from "../types.ts";

/** "Contact unavailable · Hall window": the warning's kind (a module's own kind as it is) and the device. */
export function ignoredAlertLabel(hass: HomeAssistant | undefined, a: AlertRef): string {
  const kind = HOUSE_ALERTS.has(a.kind) ? translate(hass, `alert_short_${a.kind}` as I18nKey) : a.kind;
  return `${kind} · ${hass ? entityName(hass, a.entity) : a.entity}`;
}

/** The list (nothing while it is empty); `restore` gets the warning to bring back. */
export function ignoredAlerts(hass: HomeAssistant | undefined, ignored: readonly AlertRef[] | undefined, disabled: boolean, restore: (a: AlertRef) => void) {
  if (!ignored?.length) return nothing;
  return html`<div class="fp3d-ignored">
    <style>
      .fp3d-ignored {
        grid-column: 1 / -1;
        display: grid;
        gap: 4px;
        margin: 4px 0;
      }
      .fp3d-ignored b {
        font-size: 12.5px;
      }
      .fp3d-ignored p {
        margin: 0;
        font-size: 12px;
        opacity: 0.75;
      }
      .fp3d-ignored-row {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 36px;
      }
      .fp3d-ignored-row span {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
      }
      .fp3d-ignored-row button {
        min-height: 32px;
        padding: 0 12px;
        border-radius: 8px;
        border: 1px solid currentColor;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 12.5px;
        cursor: pointer;
      }
      .fp3d-ignored-row button:disabled {
        opacity: 0.5;
        cursor: default;
      }
    </style>
    <b>${translate(hass, "alert_ignored")}</b>
    <p>${translate(hass, "alert_ignored_hint")}</p>
    ${ignored.map(
      (a) => html`<div class="fp3d-ignored-row" data-key=${alertKey(a)}>
        <span title=${a.entity}>${ignoredAlertLabel(hass, a)}</span>
        <button ?disabled=${disabled} @click=${() => restore(a)}>${translate(hass, "alert_restore")}</button>
      </div>`,
    )}
  </div>`;
}

// The app's own ask / confirm / message dialog (#59): one per page, over everything, in the panel's look. The
// promise API lives in ../ask.ts (askConfirm, askText, tell); importing this module registers the dialog, which is
// created on the first question. Every bundle that asks imports it; the tag is defined once (whichever bundle comes
// first) and all copies of ask.ts share one host through globalThis.

import { css, html, LitElement, nothing } from "lit";
import { live } from "lit/directives/live.js";
import { AskQueue, registerAskFactory, type AskAnswer, type AskHost, type AskRequest } from "../ask.ts";
import { controls, tokens } from "../styles.ts";

const TAG = "fp3d-ask-dialog";

/** The element with focus, looking into shadow roots (so it can get the focus back after the dialog). */
function deepActive(): HTMLElement | null {
  let el = document.activeElement as HTMLElement | null;
  while (el?.shadowRoot?.activeElement) el = el.shadowRoot.activeElement as HTMLElement;
  return el;
}

/** Where the dialog goes: into the element shown full screen (a card on a wall tablet), else the page. */
function mountPoint(): Element {
  let fs: Element | null = document.fullscreenElement;
  while (fs?.shadowRoot?.fullscreenElement) fs = fs.shadowRoot.fullscreenElement;
  return fs ?? document.body;
}

export class Fp3dAskDialog extends LitElement implements AskHost {
  readonly queue = new AskQueue();
  private typed = "";
  private shown: AskRequest | null = null;
  private returnFocus: HTMLElement | null = null;

  constructor() {
    super();
    this.queue.onChange = () => this.requestUpdate();
  }

  ask(req: AskRequest): Promise<AskAnswer> {
    return this.queue.ask(req);
  }

  private answer(ok: boolean): void {
    const req = this.queue.current;
    if (!req) return;
    // a message has only OK: closing it any way counts as OK
    this.queue.answer(ok || req.cancel === undefined, req.input !== undefined ? this.typed : "");
  }

  private key(e: KeyboardEvent): void {
    e.stopPropagation(); // the editor's shortcuts (Delete, arrows, Ctrl+Z) stay out of the dialog
    if (e.key === "Escape") {
      e.preventDefault();
      this.answer(false);
    } else if (e.key === "Enter" && (e.target as HTMLElement).tagName === "INPUT") {
      e.preventDefault();
      this.answer(true);
    }
  }

  protected willUpdate(): void {
    const req = this.queue.current;
    if (req === this.shown) return;
    if (req && !this.shown) this.returnFocus = deepActive();
    this.typed = req?.input ?? "";
    this.toggleAttribute("open", !!req);
  }

  protected updated(): void {
    const req = this.queue.current;
    if (req === this.shown) return;
    this.shown = req;
    if (!req) {
      this.returnFocus?.focus?.();
      this.returnFocus = null;
      return;
    }
    // the text field, else the safe button of a warning, else OK
    const input = this.renderRoot.querySelector("input");
    if (input) {
      input.focus();
      input.select();
    } else (this.renderRoot.querySelector(req.danger && req.cancel !== undefined ? ".ask-cancel" : ".ask-ok") as HTMLElement | null)?.focus();
  }

  protected render() {
    const req = this.queue.current;
    if (!req) return nothing;
    return html`<div class="backdrop" @click=${() => this.answer(false)}></div>
      <div class="box" role=${req.cancel === undefined ? "dialog" : "alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${(e: KeyboardEvent) => this.key(e)}>
        <p id="ask-text" class="text">${req.text}</p>
        ${req.input !== undefined
          ? html`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${live(this.typed)} @input=${(e: Event) => (this.typed = (e.target as HTMLInputElement).value)} /></label>`
          : nothing}
        <div class="buttons">
          ${req.cancel !== undefined ? html`<button class="fp3d-btn ask-cancel" @click=${() => this.answer(false)}>${req.cancel}</button>` : nothing}
          <button class="fp3d-btn ask-ok ${req.danger ? "ask-danger" : "fp3d-primary"}" @click=${() => this.answer(true)}>${req.ok}</button>
        </div>
      </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: none;
      }
      :host([open]) {
        display: block;
      }
      .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(4, 8, 16, 0.55);
      }
      .box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(400px, calc(100% - 32px));
        max-height: calc(100% - 40px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 18px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
      }
      .text {
        margin: 0;
        font-size: 1rem;
        line-height: 1.45;
        white-space: pre-line;
        overflow-wrap: anywhere;
      }
      .fp3d-field input {
        font-size: 16px; /* 16 px: phones do not zoom into the field */
        padding: 9px 10px;
      }
      .buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;
      }
      .buttons .fp3d-btn {
        min-height: 40px;
        min-width: 88px;
      }
      .ask-danger {
        background: var(--fp3d-danger);
        color: #1a0208;
        border-color: transparent;
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `,
  ];
}

if (!customElements.get(TAG)) customElements.define(TAG, Fp3dAskDialog);

// only the first bundle's factory is used, so this one element serves the whole page
let dialog: Fp3dAskDialog | null = null;
registerAskFactory(() => {
  if (typeof document === "undefined") return null;
  return {
    ask(req) {
      dialog ??= document.createElement(TAG) as Fp3dAskDialog;
      const at = mountPoint();
      // a card went full screen since the last question: the dialog follows it (an open question keeps its place)
      if (dialog.parentNode !== at && !dialog.queue?.current) at.appendChild(dialog);
      return dialog.ask(req);
    },
  };
});

// Phone layout (#346): View and Cameras as full screen pages, the floor as a dropdown, one tidy bottom bar.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const src = (p: string) => readFileSync(new URL(p, import.meta.url), "utf8");
const after = (text: string, mark: string) => {
  const i = text.indexOf(mark);
  assert.ok(i >= 0, `missing: ${mark}`);
  return text.slice(i);
};

// 1. The View panel

test("the phone View panel is a full screen page with its Close button, no half height sheet (#346)", () => {
  const vp = src("./components/view-panel.ts");
  const phone = after(vp, "/* phones: a full screen page");
  assert.match(phone, /:host \{\s*inset: 0;/);
  assert.match(phone, /max-height: none;/);
  assert.doesNotMatch(vp, /max-height: 50%/);
  assert.doesNotMatch(vp, /sheetStep|view_sheet_/);
  assert.match(vp, /class="vp-close"[^>]*@click=\$\{\(\) => this\.emit\("view-close"\)\}/);
  // the time bar's lift of the floating panel does not apply to the page
  assert.match(after(src("./panel.ts"), "full screen page on a phone (#346)"), /\.fp3d-tt fp3d-view-panel \{\s*bottom: 0;/);
});

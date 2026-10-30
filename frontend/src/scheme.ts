// The colour schemes of the viewer's chrome (header, view settings, buttons, sheets): dark everywhere, light while the
// 3D view shows the Day look (#85). Plain data and a WCAG contrast helper, so tests can hold every pair to AA.

import type { Theme } from "./themes.ts";

export interface Scheme {
  bg: string;
  bg2: string;
  chrome: string;
  chromeSolid: string;
  line: string;
  text: string;
  muted: string;
  accent: string;
  accentText: string;
  soft: string;
  warm: string;
  danger: string;
  shadow: string;
  colorScheme: "dark" | "light";
}

export const DARK: Scheme = {
  bg: "#070b14",
  bg2: "#0d1424",
  chrome: "rgba(14, 21, 38, 0.86)",
  chromeSolid: "#0f1729",
  line: "rgba(120, 170, 255, 0.16)",
  text: "#e6eefc",
  muted: "#8a9bb8",
  accent: "#37e0ff",
  accentText: "#041018",
  soft: "#5b7cff",
  warm: "#ffb547",
  danger: "#ff6b8b",
  shadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
  colorScheme: "dark",
};

/** Day: white glass on the pale sky, navy text, a deeper cyan that still reads as text on white. */
export const LIGHT: Scheme = {
  bg: "#eef2f8",
  bg2: "#e3e9f2",
  chrome: "rgba(255, 255, 255, 0.88)",
  chromeSolid: "#ffffff",
  line: "rgba(30, 60, 110, 0.18)",
  text: "#132036",
  muted: "#4a5a74",
  accent: "#0b7a99",
  accentText: "#ffffff",
  soft: "#3d5bd9",
  warm: "#a35f00",
  danger: "#c4224a",
  shadow: "0 6px 22px rgba(20, 40, 80, 0.16)",
  colorScheme: "light",
};

/** The viewer's chrome turns light with the Day look only; the other looks sit on dark skies. */
export function lightChrome(theme: Theme): boolean {
  return theme === "day";
}

const linear = (c: number) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

function luminance(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  return 0.2126 * linear((n >> 16) & 255) + 0.7152 * linear((n >> 8) & 255) + 0.0722 * linear(n & 255);
}

/** WCAG contrast ratio of two "#rrggbb" colours (1 to 21; AA body text needs 4.5). */
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** The scheme as the inherited variables the shared tokens (styles.ts) read; `--fp3d-s-*`. */
export function schemeVars(s: Scheme): string {
  const name = (k: string) => k.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
  return Object.entries(s)
    .map(([k, v]) => `--fp3d-s-${name(k)}: ${v};`)
    .join("\n");
}

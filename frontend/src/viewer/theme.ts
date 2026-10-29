// Looks of the 3D view. Geometry keeps its neon colours; a small shader patch maps them to the chosen
// look, so switching is instant and nothing has to be rebuilt. Signal colours (lit lamps, open windows,
// glowing screens) are bright and saturated and stay as they are in every look.

import { AdditiveBlending, Color, NormalBlending, Vector3, type Material } from "three";
import { THEMES, type Theme } from "../themes.ts";
import { FLOOR_LOOK, FLOOR_REAL } from "./build.ts";

export type { Theme } from "../themes.ts";

export interface ThemeUniform {
  value: number;
}

export function themeIndex(theme: Theme): number {
  return THEMES.indexOf(theme);
}

/** The neon look's accent (lines, cyan surfaces): the stock cyan, or a colour of the user's choice. */
export const accentUniform = { value: new Vector3(0.22, 0.88, 1) };
export const accentOnUniform = { value: 0 };

/** "#rrggbb" to the 0–1 colour the shader uses, null for anything else. */
export function parseAccent(hex: string | null | undefined): [number, number, number] | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex?.trim() ?? "");
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

const vec3 = (hex: number) => {
  const c = new Color(hex);
  return `vec3(${c.r.toFixed(6)}, ${c.g.toFixed(6)}, ${c.b.toFixed(6)})`;
};

/** Realistic floors (#39): each neon floor tint (exactly as built) becomes its material's own colour; -1 for any other colour. */
const FLOOR_GLSL = `vec3 fp3dFloor(vec3 c) {
${Object.entries(FLOOR_REAL)
  .map(([k, real]) => `  if (distance(c, ${vec3(FLOOR_LOOK[k].color)}) < 0.0002) return ${vec3(real)};`)
  .join("\n")}
  return vec3(-1.0);
}`;

const GLSL = `
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
// the realistic look: how much a signal colour lights itself (lit lamps, open windows, screens glow in the light)
float fp3dGlow = 0.0;
${FLOOR_GLSL}
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 3) {
    // realistic (#39): the lights do the shading; surfaces get light, warm colours, edges are faint dark lines and
    // bright signal colours glow. The neon's navy cast is taken out of the hue, so its navy surfaces turn neutral
    // while a green lawn or a brown floor keeps some of its colour.
    if (line) return vec3(0.08, 0.09, 0.11);
    vec3 floorTint = fp3dFloor(c);
    if (floorTint.r >= 0.0) return floorTint;
    if (mx > 0.45 && sat > 0.45) {
      fp3dGlow = smoothstep(0.85, 1.0, mx) * 0.9;
      return c;
    }
    vec3 hue = (c / max(mx, 0.001)) / vec3(0.21, 0.4, 1.0);
    hue /= max(hue.r, max(hue.g, hue.b));
    vec3 g = vec3(clamp(0.3 + l * 3.2, 0.0, 0.86)) * vec3(1.0, 0.97, 0.93);
    return mix(g, g * hue, 0.5);
  }
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat –
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;

/**
 * Maps a material's colours to the look in `uniform` (0 neon, 1 blueprint, 2 day, 3 realistic). Composes with an
 * existing onBeforeCompile (e.g. the fold patch). `line`: edges are mapped as lines.
 */
export function themed<T extends Material>(material: T, uniform: ThemeUniform, line = false): T {
  const before = material.onBeforeCompile.bind(material);
  const key = material.customProgramCacheKey.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    before(shader, renderer);
    shader.uniforms.uTheme = uniform;
    shader.uniforms.uAccent = accentUniform;
    shader.uniforms.uAccentOn = accentOnUniform;
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>\n${GLSL}`)
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>\n  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${line ? "true" : "false"});${line ? "\n  if (uTheme == 3) diffuseColor.a *= 0.22;" : ""}`,
      );
  };
  material.customProgramCacheKey = () => `${key()}-themed-${line ? "l" : "s"}`;
  // the realistic look gives themed surfaces a lit twin (realism.ts); lines stay as they are
  material.userData.fp3dThemed = line ? "line" : "surface";
  return material;
}

/** Additive glow disappears on light backgrounds: in the day and realistic looks, lines are drawn normally. */
export function lineBlending(theme: Theme): typeof AdditiveBlending | typeof NormalBlending {
  return theme === "day" || theme === "realistic" ? NormalBlending : AdditiveBlending;
}

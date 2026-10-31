/**
 * The phone layout rule (#93): one width below which the viewer folds its settings, slims its bars and
 * keeps touch targets at 44 px. Components reuse PHONE_MEDIA in their CSS (via unsafeCSS) and
 * isPhoneWidth in code, so the breakpoint lives in one place.
 */

/** Widest screen (CSS px) treated as a phone. */
export const PHONE_MAX_PX = 600;

/** The same rule as a media query, for `@media ${unsafeCSS(PHONE_MEDIA)}`. */
export const PHONE_MEDIA = `(max-width: ${PHONE_MAX_PX}px)`;

export function isPhoneWidth(width: number): boolean {
  return width <= PHONE_MAX_PX;
}

/** Whether the floor pictures at the side show as plain buttons: the stored choice ("1"/"0"), else folded on phones. */
export function thumbsCompact(saved: string | null, phone: boolean): boolean {
  return saved === "1" || saved === "0" ? saved === "1" : phone;
}

/** Share of a phone's view kept clear at the top (Walk) and the bottom (the bar) when the house is fitted. */
export const PHONE_FIT_MARGIN = { x: 0, y: 0.1 } as const;
export const NO_FIT_MARGIN = { x: 0, y: 0 } as const;

/** Widest screen (CSS px) that gets the slim header (#216): title, version and the Extensions word are dropped. */
export const PHONE_NARROW_MAX_PX = 480;
export const PHONE_NARROW_MEDIA = `(max-width: ${PHONE_NARROW_MAX_PX}px)`;

/** Whether the View menu folds after one of its choices is picked: where it floats over the view (a phone). */
export function closesViewMenuAfterPick(width: number): boolean {
  return isPhoneWidth(width);
}

/** WCAG contrast helpers: keep brand colours, but nudge them until text is readable. */

const hex = (h: string) => {
  const s = h.replace("#", "");
  const f = s.length === 3 ? s.split("").map((c) => c + c).join("") : s.slice(0, 6);
  return [0, 2, 4].map((i) => parseInt(f.slice(i, i + 2), 16));
};
const toHex = (rgb: number[]) => "#" + rgb.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");

const lum = (h: string) => {
  const [r, g, b] = hex(h).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

/** Darken (on light backgrounds) or lighten (on dark ones) `fg` until it reaches `target` against `bg`. */
export function readable(fg: string, bg: string, target = 4.5) {
  if (ratio(fg, bg) >= target) return fg;
  const darkBg = lum(bg) < 0.35;
  let rgb = hex(fg);
  for (let i = 0; i < 40 && ratio(toHex(rgb), bg) < target; i++) {
    rgb = darkBg ? rgb.map((v) => v + (255 - v) * 0.08) : rgb.map((v) => v * 0.92);
  }
  return toHex(rgb);
}

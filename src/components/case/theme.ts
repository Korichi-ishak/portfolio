import type { Project } from "@/data/projects";

/** Visual tokens a shared block needs to sit inside a story without looking pasted in. */
export type Theme = {
  bg: string; // section background
  ink: string; // main text
  muted: string; // secondary text
  accent: string; // labels, highlights
  card: string; // card surface
  cardInk: string;
  line: string; // borders
  display: string; // heading font-family
  radius: string;
  dark?: boolean;
  accentText?: string; // accent adjusted for text contrast (computed)
  onAccent?: string; // text colour on an accent fill (computed)
};

export const storyThemes: Record<string, Theme> = {
  fds: { bg: "#FFFCF5", ink: "#001829", muted: "#6B6157", accent: "#FF7700", card: "#FFFFFF", cardInk: "#001829", line: "#EADFCB", display: "'Montserrat', sans-serif", radius: "18px" },
  velo: { bg: "#FFF6EC", ink: "#3A2E2A", muted: "#7A6A62", accent: "#EC634C", card: "#FFFFFF", cardInk: "#3A2E2A", line: "#F0DCC6", display: "'Fredoka', sans-serif", radius: "28px" },
  tasshila: { bg: "#F6F3EC", ink: "#0F172A", muted: "#64748B", accent: "#0F766E", card: "#FFFEFA", cardInk: "#0F172A", line: "#E2DDD1", display: "'Plus Jakarta Sans', sans-serif", radius: "16px" },
  auto: { bg: "#EEEBE4", ink: "#111214", muted: "#6B6458", accent: "#C98A00", card: "#FFFDF6", cardInk: "#111214", line: "#D9D4CA", display: "'Archivo', sans-serif", radius: "10px" },
  divan: { bg: "#F7F0E3", ink: "#1C1410", muted: "#7A6A55", accent: "#9B1C2E", card: "#FFFDF8", cardInk: "#1C1410", line: "#E6DAC4", display: "'Playfair Display', serif", radius: "6px" },
  mobile: { bg: "#EAF2FF", ink: "#0F172A", muted: "#64748B", accent: "#2F6BFF", card: "#FFFFFF", cardInk: "#0F172A", line: "#D3E0F5", display: "'Plus Jakarta Sans', sans-serif", radius: "20px" },
  queen: { bg: "#241B2F", ink: "#FDF7F2", muted: "#D4B5A5", accent: "#D6AE60", card: "#2E2240", cardInk: "#FDF7F2", line: "#4A2B6B", display: "'Cinzel', serif", radius: "16px", dark: true },
  ayan: { bg: "#0A0A0A", ink: "#F5F5F5", muted: "#A3A3A3", accent: "#EAB308", card: "#141416", cardInk: "#F5F5F5", line: "#27272A", display: "'Chakra Petch', sans-serif", radius: "10px", dark: true },
};

/** Theme for projects without a hand-drawn story, built from their brand colours. */
export function themeFromProject(p: Project): Theme {
  return {
    bg: "#F6F4EF",
    ink: "#141412",
    muted: "#66645C",
    accent: p.c.primary,
    card: "#FFFFFF",
    cardInk: "#141412",
    line: "#E3E0D8",
    display: p.fonts.dCss,
    radius: p.c.radius === "999px" ? "22px" : `calc(${p.c.radius} + 8px)`,
  };
}

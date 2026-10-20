import raw from "./cases.json";
import imageMap from "./images.json";

export type Pair = [string, string];
export type Triple = [string, string, string];

export type Project = {
  slug: string;
  name: string;
  slash: string;
  industry: string;
  platform: string;
  date: string;
  duration: string;
  client: string;
  role: string;
  lead: string;
  methods: string[];
  problem: string;
  hmw: string;
  research: string[];
  findings: Pair[];
  users: Triple[];
  goals: string[];
  ia: { root: string; branches: [string, string[]][] };
  flow: { title: string; steps: string[] };
  wfScreen: string;
  wf: string[];
  mood: string;
  palette: Triple[];
  fonts: { dName: string; dCss: string; dNote: string; dSample: string; bName: string; bCss: string; bNote: string };
  c: { primary: string; onPrimary: string; dark: string; bg: string; light: string; ink: string; radius: string };
  cta: string;
  cta2: string;
  chip1: string;
  chip2: string;
  input: string;
  admin: {
    url: string;
    app: string;
    nav: string[];
    active: number;
    title: string;
    action: string;
    cards: string[];
    cols: string[];
    rows: string[][];
    caption: string;
  };
  app: { title: string; sub: string; items: Pair[]; tabs: string[]; caption: string };
  solutionNote: string;
  outcome: Pair[];
  stack: string[];
  url: string;
  domain: string;
  liveLabel: string;
  d1: string;
  d2: string;
  d3: string;
  m: string;
  d1ratio?: string;
  boards?: Triple[];
};

export const projects = raw as unknown as Project[];

/** Card data for the grid (short label + thumbnail background). */
export const cards: Record<string, { what: string; year: string; bg: string }> = {
  fds: { what: "Management platform · e-learning", year: "2026", bg: "#FBF6EC" },
  goodloc: { what: "Driving school", year: "2025", bg: "#F26B2A" },
  elite: { what: "Consulting firm", year: "2025", bg: "#111110" },
  velo: { what: "Smoothie bikes", year: "2025", bg: "#FBEFE3" },
  ayan: { what: "Learning platform", year: "2025–26", bg: "#1A1A1C" },
  auto: { what: "ECU files platform", year: "2025", bg: "#0E0E10" },
  tasshila: { what: "M.Sc. thesis · e-health", year: "2025–26", bg: "#0B3B37" },
  tiger: { what: "Exceptional cars", year: "2025", bg: "#0E0E10" },
  picci: { what: "Multiservice station", year: "2025", bg: "#0E0E10" },
  queen: { what: "Self-discovery app", year: "2025", bg: "#2A1440" },
  bdtech: { what: "IT services", year: "2025", bg: "#EEF3FA" },
  goodpc: { what: "Refurbished tech store", year: "2025", bg: "#F4F7F8" },
  aqua: { what: "Aquatic training centre", year: "2025", bg: "#3E7C86" },
  divan: { what: "Turkish restaurant", year: "2024", bg: "#120D0A" },
  pdl: { what: "Car rental · WordPress", year: "2024–25", bg: "#F3EDE2" },
  mobile: { what: "Wassalni · Clinical · Astrolabs", year: "2023–24", bg: "#FFFFFF" },
};

/** Academic & startup projects (shown under their own heading on /work). */
/** French card labels. */
export const whatFr: Record<string, string> = {
  fds: "Plateforme de gestion · e-learning",
  goodloc: "Auto-école",
  elite: "Cabinet de conseil",
  velo: "Vélos à smoothies",
  ayan: "Plateforme d'apprentissage",
  auto: "Plateforme de fichiers ECU",
  tasshila: "Mémoire de master · e-santé",
  tiger: "Voitures d'exception",
  picci: "Station multiservice",
  queen: "Application de développement personnel",
  bdtech: "Services informatiques",
  goodpc: "Boutique tech reconditionnée",
  aqua: "Centre de formation aquatique",
  divan: "Restaurant turc",
  pdl: "Location de voitures · WordPress",
  mobile: "Wassalni · Clinical · Astrolabs",
};

export const academic = ["tasshila", "mobile"];

const files = imageMap as Record<string, string>;

/** Local path of an asset id (images were exported from the maquette). */
export const img = (id: string) => (id ? `/img/${files[id] || id + ".jpg"}` : "");

/** Freelance missions show no dates anywhere on the site. */
export const isFreelance = (p: { duration: string }) => /freelance/i.test(p.duration);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

export const pad = (n: number) => (n < 10 ? "0" : "") + n;
export const projectNumber = (slug: string) => pad(projects.findIndex((p) => p.slug === slug) + 1);

/** Google Fonts stylesheet URL for a list of CSS font-family strings. */
export function fontsHref(families: string[]) {
  const names = Array.from(
    new Set(
      families
        .map((f) => f.split(",")[0].replace(/['"]/g, "").trim())
        .filter((f) => f && !["Arial", "system-ui", "Helvetica"].includes(f)),
    ),
  );
  if (!names.length) return "";
  return (
    "https://fonts.googleapis.com/css2?" +
    names.map((n) => `family=${n.replace(/ /g, "+")}:wght@400;500;600;700;800`).join("&") +
    "&display=swap"
  );
}

/** Ishak's path, as nodes of a workflow. Order = when each step started. */
export type JourneyNode = {
  id: string;
  kind: "start" | "study" | "work" | "freelance" | "now";
  label: string; // short tag shown in the node header
  short: string; // name used in the mini-map and "came out of …"
  title: string;
  org: string;
  when: string;
  text?: string;
  stack?: string;
  projects?: string[];
  note?: string; // small badge, e.g. "runs in parallel"
};

export const journey: JourneyNode[] = [
  {
    id: "annaba",
    short: "Annaba",
    kind: "start",
    label: "input",
    title: "Annaba, Algeria",
    org: "Where it starts",
    when: "",
    text: "A computer-science student on the Algerian coast.",
  },
  {
    id: "bsc",
    short: "my B.Sc. at UBMA",
    kind: "study",
    label: "study",
    title: "B.Sc. Computer Systems",
    org: "Université Badji Mokhtar, Annaba",
    when: "2021 – 2024",
    text: "Final-year project Wassalni, selected under the university startup framework.",
    projects: ["mobile"],
    note: "startup label",
  },
  {
    id: "freelance",
    short: "my freelance work",
    kind: "freelance",
    label: "work",
    title: "Freelance full-stack & WordPress developer",
    org: "Clients in Algeria, France, Canada and DR Congo",
    when: "Mar 2023 – now",
    text: "Business sites, platforms and back offices, delivered end to end — from the first call to the live site.",
    stack: "Next.js · React · Tailwind · WordPress",
    projects: ["divan", "pdl", "goodloc", "velo", "tiger", "picci", "aqua", "goodpc", "elite", "bdtech", "auto", "queen", "ayan"],
    note: "runs in parallel",
  },
  {
    id: "aurafolio",
    short: "Aurafolio",
    kind: "work",
    label: "work",
    title: "Full-stack developer",
    org: "Aurafolio — IT agency, Algeria",
    when: "until Sep 2024",
    text: "My first position in an agency team.",
  },
  {
    id: "msc",
    short: "my M.Sc. in Big Data",
    kind: "study",
    label: "study",
    title: "M.Sc. Big Data Management and Analysis",
    org: "Université Badji Mokhtar, Annaba",
    when: "2024 – 2026",
    text: "Master's thesis: Tasshila, an e-health platform that reads lab results from a photo.",
    projects: ["tasshila"],
  },
  {
    id: "progix",
    short: "PROGIX",
    kind: "work",
    label: "work",
    title: "Full-stack developer",
    org: "PROGIX — Montreal agency, remote",
    when: "Jun 2025 – May 2026",
  },
  {
    id: "bnh",
    short: "BNH",
    kind: "work",
    label: "work",
    title: "Data analyst",
    org: "Banque Nationale de l'Habitat",
    when: "Apr – May 2026",
  },
  {
    id: "fds",
    short: "my role at FDS Institut",
    kind: "work",
    label: "work",
    title: "Head of Digital Transformation",
    org: "FDS Institut, Annaba",
    when: "May – Sep 2026",
    text: "The CRM, ERP and e-learning platform of a Goethe-certified language centre — designed and built alone.",
    stack: "Next.js · TypeScript · Supabase · PostgreSQL",
    projects: ["fds"],
  },
  {
    id: "paris8",
    short: "Paris 8",
    kind: "now",
    label: "now",
    title: "M.Sc. MIASHS — Assistive Technology",
    org: "Université Paris 8",
    when: "2026 – 2028",
    text: "How software actually reaches the people it's built for.",
    note: "in progress",
  },
];

/** The journey node a project belongs to. */
export const nodeOfProject = (slug: string) => journey.find((n) => n.projects?.includes(slug));

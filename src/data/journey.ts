/** Education and experience, as two lanes of a workflow, row by row in time. */
export type Lane = "education" | "experience";

export type JourneyItem = {
  id: string;
  lane: Lane;
  short: string; // name used in the mini-map and "came out of …"
  title: string; // degree or role
  org: string;
  when: string;
  text?: string;
  stack?: string;
  projects?: string[];
  note?: string; // small badge
  /** French version of the visible text */
  fr: { short: string; title: string; org: string; when: string; text?: string; note?: string };
};

export type JourneyRow = { year: string; items: JourneyItem[] };

export const laneInfo: Record<Lane, { label: string; hint: string }> = {
  education: { label: "Education", hint: "degrees" },
  experience: { label: "Experience", hint: "jobs & freelance" },
};

export const rows: JourneyRow[] = [
  {
    year: "2021",
    items: [
      {
        id: "bsc",
        fr: { short: "ma licence", title: "Licence Systèmes informatiques", org: "Université Badji Mokhtar", when: "2021 – 2024", text: "Projet de fin d'études Wassalni, retenu dans le dispositif startup de l'université.", note: "label startup" },
        lane: "education",
        short: "my B.Sc.",
        title: "B.Sc. Computer Systems",
        org: "Université Badji Mokhtar",
        when: "2021 – 2024",
        text: "Final-year project Wassalni, selected under the university startup framework.",
        projects: ["mobile"],
        note: "startup label",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        id: "freelance",
        fr: { short: "mon activité freelance", title: "Développeur full-stack & WordPress freelance", org: "Clients en Algérie, en France, au Canada et au Moyen-Orient", when: "mars 2023 – aujourd'hui", text: "Sites, plateformes et back-offices livrés de bout en bout — du premier appel au site en ligne.", note: "en cours" },
        lane: "experience",
        short: "my freelance work",
        title: "Freelance full-stack & WordPress developer",
        org: "Clients in Algeria, France, Canada and the Middle East",
        when: "Mar 2023 – now",
        text: "Business sites, platforms and back offices, delivered end to end — from the first call to the live site.",
        stack: "Next.js · React · Tailwind · WordPress",
        projects: ["divan", "pdl", "goodloc", "velo", "tiger", "picci", "aqua", "goodpc", "elite", "bdtech", "auto", "queen", "ayan"],
        note: "ongoing",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        id: "msc",
        fr: { short: "mon master Big Data", title: "Master Big Data — gestion et analyse des données", org: "Université Badji Mokhtar", when: "2024 – 2026", text: "Mémoire : Tasshila, une plateforme e-santé qui lit des résultats d'analyses à partir d'une photo." },
        lane: "education",
        short: "my M.Sc. in Big Data",
        title: "M.Sc. Big Data Management and Analysis",
        org: "Université Badji Mokhtar",
        when: "2024 – 2026",
        text: "Master's thesis: Tasshila, an e-health platform that reads lab results from a photo.",
        projects: ["tasshila"],
      },
      {
        id: "aurafolio",
        fr: { short: "Aurafolio", title: "Développeur full-stack", org: "Aurafolio — agence informatique", when: "jusqu'en sept. 2024", text: "Mon premier poste dans une équipe d'agence." },
        lane: "experience",
        short: "Aurafolio",
        title: "Full-stack developer",
        org: "Aurafolio — IT agency",
        when: "until Sep 2024",
        text: "My first position in an agency team.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        id: "progix",
        fr: { short: "PROGIX", title: "Développeur full-stack", org: "PROGIX — agence, à distance", when: "juin 2025 – mai 2026" },
        lane: "experience",
        short: "PROGIX",
        title: "Full-stack developer",
        org: "PROGIX — agency, remote",
        when: "Jun 2025 – May 2026",
      },
    ],
  },
  {
    year: "2026",
    items: [
      {
        id: "paris8",
        fr: { short: "Paris 8", title: "Master MIASHS — Technologies et handicap", org: "Université Paris 8", when: "2026 – 2028", text: "Comment un logiciel atteint vraiment les personnes pour qui il est fait.", note: "en cours" },
        lane: "education",
        short: "Paris 8",
        title: "M.Sc. MIASHS — Assistive Technology",
        org: "Université Paris 8",
        when: "2026 – 2028",
        text: "How software actually reaches the people it's built for.",
        note: "in progress",
      },
      {
        id: "bnh",
        fr: { short: "la BNH", title: "Data analyst", org: "Banque Nationale de l'Habitat", when: "avr. – mai 2026" },
        lane: "experience",
        short: "BNH",
        title: "Data analyst",
        org: "Banque Nationale de l'Habitat",
        when: "Apr – May 2026",
      },
    ],
  },
  {
    year: "2026",
    items: [
      {
        id: "fds",
        fr: { short: "mon poste à FDS Institut", title: "Responsable de la transformation digitale", org: "FDS Institut", when: "mai – sept. 2026", text: "Le CRM, l'ERP et la plateforme e-learning d'un centre de langues certifié Goethe — conçus et développés seul." },
        lane: "experience",
        short: "my role at FDS Institut",
        title: "Head of Digital Transformation",
        org: "FDS Institut",
        when: "May – Sep 2026",
        text: "The CRM, ERP and e-learning platform of a Goethe-certified language centre — designed and built alone.",
        stack: "Next.js · TypeScript · Supabase · PostgreSQL",
        projects: ["fds"],
      },
    ],
  },
];

/** Every step, in reading order. */
export const journey: JourneyItem[] = rows.flatMap((r) => r.items);

/** The step a project belongs to. */
export const nodeOfProject = (slug: string) => journey.find((n) => n.projects?.includes(slug));

/** Visible text of a step in the given language. */
export function textOf(n: JourneyItem, lang: "en" | "fr") {
  return lang === "fr" ? n.fr : { short: n.short, title: n.title, org: n.org, when: n.when, text: n.text, note: n.note };
}

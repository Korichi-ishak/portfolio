import type { Lang } from "@/i18n";

/**
 * Every term on the site gets two explanations:
 *   s — one plain sentence for someone who knows nothing about software,
 *   p — the detail a developer or a tech recruiter looks for.
 * k is the kind of word, shown like a dictionary entry.
 */
export type Entry = { k: string; s: string; p: string };
type Pair = { en: Entry; fr: Entry };

const g = (en: Entry, fr: Entry): Pair => ({ en, fr });

export const glossary: Record<string, Pair> = {
  // ---------- languages ----------
  typescript: g(
    { k: "language", s: "The language I write most of my code in.", p: "JavaScript with types: fewer bugs, autocomplete, safer refactors. Used on every recent project." },
    { k: "langage", s: "La langue dans laquelle j'écris la plupart de mon code.", p: "JavaScript typé : moins de bugs, autocomplétion, refactorisations plus sûres. Utilisé sur tous les projets récents." },
  ),
  javascript: g(
    { k: "language", s: "The language every web browser understands.", p: "ES2023+, async code, DOM and browser APIs. The base under TypeScript, React and Node.js." },
    { k: "langage", s: "La langue que tous les navigateurs web comprennent.", p: "ES2023+, code asynchrone, DOM et API du navigateur. La base sous TypeScript, React et Node.js." },
  ),
  python: g(
    { k: "language", s: "A language used a lot for data and artificial intelligence.", p: "Data processing and analysis; used for the Tasshila thesis." },
    { k: "langage", s: "Un langage très utilisé pour les données et l'intelligence artificielle.", p: "Traitement et analyse de données ; utilisé pour le mémoire Tasshila." },
  ),
  php: g(
    { k: "language", s: "The language WordPress websites run on.", p: "Server-side PHP: WordPress themes and plugins, hooks, custom post types." },
    { k: "langage", s: "Le langage qui fait tourner les sites WordPress.", p: "PHP côté serveur : thèmes et extensions WordPress, hooks, types de contenu personnalisés." },
  ),
  sql: g(
    { k: "language", s: "The language used to ask a database questions.", p: "Schemas, joins, indexes, views and migrations, mostly on PostgreSQL." },
    { k: "langage", s: "Le langage pour poser des questions à une base de données.", p: "Schémas, jointures, index, vues et migrations, surtout sur PostgreSQL." },
  ),
  r: g(
    { k: "language", s: "A language made for statistics.", p: "Statistical analysis and data visualisation, used during the Big Data master's." },
    { k: "langage", s: "Un langage fait pour les statistiques.", p: "Analyse statistique et visualisation de données, utilisé pendant le master Big Data." },
  ),
  java: g(
    { k: "language", s: "A classic language used in big companies and in Android apps.", p: "Object-oriented programming, learnt and practised at university." },
    { k: "langage", s: "Un langage classique, utilisé dans les grandes entreprises et sur Android.", p: "Programmation orientée objet, apprise et pratiquée à l'université." },
  ),
  c: g(
    { k: "language", s: "An old, very fast language, close to the machine.", p: "Memory, pointers and algorithms: the foundations, learnt at university." },
    { k: "langage", s: "Un vieux langage très rapide, proche de la machine.", p: "Mémoire, pointeurs et algorithmes : les bases, apprises à l'université." },
  ),
  // ---------- front-end ----------
  react: g(
    { k: "library · front-end", s: "The tool I use to build what you see and click on a screen.", p: "Components, hooks and state; server components with Next.js." },
    { k: "bibliothèque · front-end", s: "L'outil qui sert à construire ce qu'on voit et ce qu'on clique à l'écran.", p: "Composants, hooks et état ; composants serveur avec Next.js." },
  ),
  nextjs: g(
    { k: "framework", s: "The tool I build websites with, page by page. This site is made with it.", p: "React framework: server and static rendering, routing, image optimisation, deployment on Vercel." },
    { k: "framework", s: "L'outil avec lequel je construis les sites, page par page. Ce site est fait avec.", p: "Framework React : rendu serveur et statique, routes, optimisation des images, déploiement sur Vercel." },
  ),
  tailwind: g(
    { k: "styling", s: "The tool that gives a site its colours, spacing and sizes.", p: "Utility-first CSS with design tokens, themes and responsive variants." },
    { k: "style", s: "L'outil qui donne au site ses couleurs, ses espaces et ses tailles.", p: "CSS utilitaire avec tokens de design, thèmes et variantes responsive." },
  ),
  shadcn: g(
    { k: "components", s: "Ready-made building blocks for screens: buttons, menus, forms.", p: "Accessible components built on Radix UI and Tailwind, copied into the project and adapted." },
    { k: "composants", s: "Des briques toutes prêtes pour les écrans : boutons, menus, formulaires.", p: "Composants accessibles basés sur Radix UI et Tailwind, copiés dans le projet puis adaptés." },
  ),
  html: g(
    { k: "language", s: "The skeleton of every web page: titles, text, links, images.", p: "Semantic HTML: landmarks, headings, forms and ARIA only where HTML is not enough." },
    { k: "langage", s: "Le squelette de chaque page web : titres, textes, liens, images.", p: "HTML sémantique : repères, titres, formulaires, et ARIA seulement quand le HTML ne suffit pas." },
  ),
  css: g(
    { k: "language", s: "What makes a web page look the way it does.", p: "Grid, flexbox, custom properties, container queries and motion that respects reduced-motion settings." },
    { k: "langage", s: "Ce qui donne son apparence à une page web.", p: "Grid, flexbox, variables CSS, container queries et animations qui respectent le réglage « réduire les animations »." },
  ),
  // ---------- back-end & data ----------
  nodejs: g(
    { k: "runtime · back-end", s: "What runs the hidden part of a website, on the server.", p: "APIs, background jobs and integrations in TypeScript." },
    { k: "environnement · back-end", s: "Ce qui fait tourner la partie cachée d'un site, sur le serveur.", p: "API, tâches de fond et intégrations en TypeScript." },
  ),
  postgresql: g(
    { k: "database", s: "Where an application keeps its information, safely and in order.", p: "Relational database: schemas, constraints, transactions, row-level security." },
    { k: "base de données", s: "L'endroit où une application range ses informations, en ordre et en sécurité.", p: "Base relationnelle : schémas, contraintes, transactions, sécurité par ligne." },
  ),
  supabase: g(
    { k: "database · service", s: "An online service that stores the data and handles who can log in.", p: "Hosted PostgreSQL with authentication, row-level security (RLS), storage and realtime." },
    { k: "base de données · service", s: "Un service en ligne qui garde les données et gère qui peut se connecter.", p: "PostgreSQL hébergé avec authentification, règles d'accès par ligne (RLS), stockage et temps réel." },
  ),
  // ---------- mobile & cms ----------
  reactnative: g(
    { k: "mobile", s: "What I use to build real apps for iPhone and Android at the same time.", p: "React Native with Expo: one codebase, two native apps published on the stores." },
    { k: "mobile", s: "Ce qui me sert à faire de vraies applications pour iPhone et Android en même temps.", p: "React Native avec Expo : un seul code, deux applications natives publiées sur les stores." },
  ),
  wordpress: g(
    { k: "cms", s: "A tool that lets a business edit its own website without a developer.", p: "Custom themes and plugins, page builders, performance and security hardening." },
    { k: "cms", s: "Un outil qui permet à une entreprise de modifier son site sans développeur.", p: "Thèmes et extensions sur mesure, constructeurs de pages, performance et sécurité." },
  ),
  // ---------- tools ----------
  git: g(
    { k: "tool", s: "Keeps every version of the code, so nothing is ever lost.", p: "Branches, pull requests and reviews on GitHub." },
    { k: "outil", s: "Garde chaque version du code, pour ne jamais rien perdre.", p: "Branches, pull requests et relectures sur GitHub." },
  ),
  linux: g(
    { k: "system", s: "The system most web servers run on.", p: "Shell, servers and deployments from the command line." },
    { k: "système", s: "Le système sur lequel tournent la plupart des serveurs web.", p: "Shell, serveurs et déploiements en ligne de commande." },
  ),
  // ---------- words of the trade ----------
  fullstack: g(
    { k: "role", s: "A developer who builds both what you see on screen and what runs behind it.", p: "Front-end, back-end, database and deployment, from the first commit to production." },
    { k: "métier", s: "Un développeur qui fait à la fois ce qu'on voit à l'écran et ce qui tourne derrière.", p: "Front-end, back-end, base de données et mise en ligne, du premier commit à la production." },
  ),
  accessible: g(
    { k: "quality", s: "Usable by everyone, including people who are blind, deaf or who cannot use a mouse.", p: "WCAG 2.2 AA: keyboard use, screen readers, contrast, reduced motion. Checked with axe on every page." },
    { k: "qualité", s: "Utilisable par tout le monde, y compris les personnes aveugles, sourdes ou qui ne peuvent pas utiliser de souris.", p: "WCAG 2.2 AA : clavier, lecteurs d'écran, contraste, animations réduites. Vérifié avec axe sur chaque page." },
  ),
  daily: g(
    { k: "kind of project", s: "Software a team opens every morning to do its job.", p: "Back offices, management platforms and internal tools: tables, roles, forms and exports." },
    { k: "type de projet", s: "Un logiciel qu'une équipe ouvre chaque matin pour faire son travail.", p: "Back-offices, plateformes de gestion et outils internes : tableaux, rôles, formulaires et exports." },
  ),
  web: g(
    { k: "platform", s: "Websites and web apps you open in a browser.", p: "Server-rendered, responsive from small phones to wide screens, fast on slow networks." },
    { k: "plateforme", s: "Les sites et applications qu'on ouvre dans un navigateur.", p: "Rendu serveur, responsive du petit téléphone au grand écran, rapide sur un réseau lent." },
  ),
  mobile: g(
    { k: "platform", s: "Apps you install on a phone.", p: "React Native and Expo apps for iOS and Android, plus mobile-first web." },
    { k: "plateforme", s: "Les applications qu'on installe sur un téléphone.", p: "Applications React Native et Expo pour iOS et Android, et web pensé d'abord pour le mobile." },
  ),
  h1: g(
    { k: "label · a nod to Figma", s: "A wink at Figma, the design software: it is how it names a selected title.", p: "H1 is the main heading. Fill × Hug: the width fills its parent, the height hugs the content (Auto layout)." },
    { k: "étiquette · clin d'œil à Figma", s: "Un clin d'œil à Figma, le logiciel de design : c'est comme ça qu'il nomme un titre sélectionné.", p: "H1 = titre principal. Fill × Hug : la largeur remplit le parent, la hauteur s'ajuste au contenu (Auto layout)." },
  ),
  hero: g(
    { k: "label · code", s: "The name a developer gives to this first block of the page.", p: "A React component tag: this section is the <Hero /> component of the home page." },
    { k: "étiquette · code", s: "Le nom qu'un développeur donne à ce premier bloc de la page.", p: "Une balise de composant React : cette section est le composant <Hero /> de l'accueil." },
  ),
  portrait: g(
    { k: "file", s: "That's me.", p: "portrait.jpg — the frame and handles are a Figma selection, like the title above." },
    { k: "fichier", s: "C'est moi.", p: "portrait.jpg — le cadre et les poignées sont une sélection Figma, comme le titre plus haut." },
  ),
  // ---------- record ----------
  startup: g(
    { k: "award", s: "My final-year app was chosen by the university to become a startup project.", p: "Wassalni, selected under the Algerian ministerial student-startup framework (2024)." },
    { k: "distinction", s: "Mon application de fin d'études a été choisie par l'université pour devenir un projet de startup.", p: "Wassalni, retenu dans le dispositif ministériel algérien startup étudiant (2024)." },
  ),
  tcf: g(
    { k: "certificate", s: "An official French language test. B2 means I work comfortably in French.", p: "Test de connaissance du français, France Éducation International, CEFR level B2." },
    { k: "certificat", s: "Un test officiel de français. B2 veut dire que je travaille à l'aise en français.", p: "Test de connaissance du français, France Éducation International, niveau B2 du CECRL." },
  ),
  pse: g(
    { k: "certificate", s: "A first-aid training to help people in an emergency, as part of a team.", p: "Premiers secours en équipe, as a Red Crescent volunteer." },
    { k: "certificat", s: "Une formation de secouriste pour aider des personnes en urgence, en équipe.", p: "Premiers secours en équipe, en tant que bénévole au Croissant-Rouge." },
  ),
  // ---------- path steps ----------
  bsc: g(
    { k: "degree", s: "My first university degree, in computer science.", p: "B.Sc. Computer Systems, Université Badji Mokhtar. Final project: Wassalni, a mobile app." },
    { k: "diplôme", s: "Mon premier diplôme universitaire, en informatique.", p: "Licence Systèmes informatiques, Université Badji Mokhtar. Projet final : Wassalni, une application mobile." },
  ),
  msc: g(
    { k: "degree", s: "A master's degree about collecting, storing and understanding large amounts of data.", p: "M.Sc. Big Data Management and Analysis. Thesis: Tasshila, OCR and analysis of lab results." },
    { k: "diplôme", s: "Un master sur la collecte, le stockage et la compréhension de grandes quantités de données.", p: "Master Big Data, gestion et analyse des données. Mémoire : Tasshila, OCR et analyse de résultats d'analyses." },
  ),
  paris8: g(
    { k: "degree · in progress", s: "A master's degree about technology for people with disabilities.", p: "M.Sc. MIASHS, Assistive Technology track (Handi), Université Paris 8." },
    { k: "diplôme · en cours", s: "Un master sur les technologies pour les personnes en situation de handicap.", p: "Master MIASHS, parcours Technologie et Handicap (Handi), Université Paris 8." },
  ),
  freelance: g(
    { k: "work", s: "I work directly for clients, project by project.", p: "Scoping, design, development, deployment and support, for clients in Algeria, France, Canada and the Middle East." },
    { k: "travail", s: "Je travaille directement pour des clients, projet par projet.", p: "Cadrage, design, développement, mise en ligne et suivi, pour des clients en Algérie, en France, au Canada et au Moyen-Orient." },
  ),
  aurafolio: g(
    { k: "job", s: "An IT agency: my first job in a team.", p: "Full-stack developer on client websites and platforms." },
    { k: "poste", s: "Une agence informatique : mon premier poste en équipe.", p: "Développeur full-stack sur des sites et plateformes clients." },
  ),
  progix: g(
    { k: "job", s: "An agency I worked with remotely.", p: "Full-stack developer on client products, remote." },
    { k: "poste", s: "Une agence avec qui j'ai travaillé à distance.", p: "Développeur full-stack sur des produits clients, à distance." },
  ),
  bnh: g(
    { k: "job", s: "A national bank where I turned data into reports people could read.", p: "Data analyst: preparing and analysing the bank's data." },
    { k: "poste", s: "Une banque nationale où j'ai transformé des données en rapports lisibles.", p: "Data analyst : préparation et analyse des données de la banque." },
  ),
  fds: g(
    { k: "job", s: "A language school: I designed and built all its software, alone.", p: "Head of Digital Transformation: management platform and e-learning in Next.js, TypeScript, Supabase and PostgreSQL." },
    { k: "poste", s: "Une école de langues : j'ai conçu et développé tous ses logiciels, seul.", p: "Responsable de la transformation digitale : plateforme de gestion et e-learning en Next.js, TypeScript, Supabase et PostgreSQL." },
  ),
  // ---------- terminal commands ----------
  "cmd:ls": g(
    { k: "command", s: "Shows the list of projects.", p: "ls — list directory contents. Add client or academic to filter." },
    { k: "commande", s: "Affiche la liste des projets.", p: "ls — liste le contenu d'un dossier. Ajoutez client ou academic pour filtrer." },
  ),
  "cmd:cat": g(
    { k: "command", s: "Shows the details of one project.", p: "cat — print a file. Here: client, role, dates and stack." },
    { k: "commande", s: "Affiche les détails d'un projet.", p: "cat — affiche un fichier. Ici : client, rôle, dates et stack." },
  ),
  "cmd:open": g(
    { k: "command", s: "Opens the page of a project.", p: "open — open a file or URL. Accepts a name or a number." },
    { k: "commande", s: "Ouvre la page d'un projet.", p: "open — ouvre un fichier ou une adresse. Accepte un nom ou un numéro." },
  ),
  "cmd:grep": g(
    { k: "command", s: "Finds the projects that mention a word.", p: "grep — search text. Matches names, types and stacks." },
    { k: "commande", s: "Trouve les projets qui contiennent un mot.", p: "grep — recherche du texte. Cherche dans les noms, les types et les stacks." },
  ),
  "cmd:whoami": g(
    { k: "command", s: "Says who wrote all this.", p: "whoami — print the current user." },
    { k: "commande", s: "Dit qui a écrit tout ça.", p: "whoami — affiche l'utilisateur courant." },
  ),
  "cmd:clear": g(
    { k: "command", s: "Empties the screen.", p: "clear — clear the terminal." },
    { k: "commande", s: "Vide l'écran.", p: "clear — efface le terminal." },
  ),
};

/** Visible labels that map to a glossary key (tech names in lists and stacks). */
const alias: Record<string, string> = {
  "next.js": "nextjs",
  "tailwind css": "tailwind",
  "shadcn/ui": "shadcn",
  "node.js": "nodejs",
  "react native": "reactnative",
  "expo": "reactnative",
  postgres: "postgresql",
};

export function keyOf(label: string): string | undefined {
  const l = label.trim().toLowerCase();
  if (alias[l]) return alias[l];
  return glossary[l] ? l : undefined;
}

export function entry(key: string, lang: Lang): Entry | undefined {
  return glossary[key]?.[lang];
}

/** Attributes that turn any element into a tooltip trigger (read by <Tooltips />). */
export function termProps(e: Entry | undefined, focusable = true) {
  if (!e) return {};
  return {
    "data-tt-k": e.k,
    "data-tt-s": e.s,
    "data-tt-p": e.p,
    ...(focusable ? { tabIndex: 0 } : {}),
  } as Record<string, string | number>;
}

/** A project's tooltip: what it is in plain words, then its stack. */
export function projectEntry(lang: Lang, what: string, stack: string[], academic: boolean): Entry {
  const fr = lang === "fr";
  return {
    k: academic ? (fr ? "projet · université" : "project · university") : fr ? "projet · client" : "project · client",
    s: what,
    p: (fr ? "Stack : " : "Stack: ") + stack.join(", "),
  };
}

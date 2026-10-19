import type { Metadata } from "next";
import { dict } from "@/i18n";
import WorkView from "@/views/WorkView";

export const metadata: Metadata = {
  title: dict.fr.meta.workTitle,
  description: dict.fr.meta.workDesc,
  alternates: { languages: { en: "/work", fr: "/fr/work" } },
};

export default function Projets() {
  return <WorkView lang="fr" />;
}

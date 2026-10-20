import type { Metadata } from "next";
import { dict } from "@/i18n";
import { pageMeta } from "@/lib/seo";
import WorkView from "@/views/WorkView";

export const metadata: Metadata = pageMeta("fr", "/work", dict.fr.meta.workTitle, dict.fr.meta.workDesc);

export default function Projets() {
  return <WorkView lang="fr" />;
}

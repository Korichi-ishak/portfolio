import type { Metadata } from "next";
import { dict } from "@/i18n";
import WorkView from "@/views/WorkView";

export const metadata: Metadata = {
  title: dict.en.meta.workTitle,
  description: dict.en.meta.workDesc,
  alternates: { languages: { en: "/work", fr: "/fr/work" } },
};

export default function WorkIndex() {
  return <WorkView lang="en" />;
}

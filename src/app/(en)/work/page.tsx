import type { Metadata } from "next";
import { dict } from "@/i18n";
import { pageMeta } from "@/lib/seo";
import WorkView from "@/views/WorkView";

export const metadata: Metadata = pageMeta("en", "/work", dict.en.meta.workTitle, dict.en.meta.workDesc);

export default function WorkIndex() {
  return <WorkView lang="en" />;
}

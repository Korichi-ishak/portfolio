import type { Metadata, Viewport } from "next";
import Shell from "@/components/Shell";
import { dict } from "@/i18n";
import { baseMeta, pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...baseMeta,
  ...pageMeta("fr", "/", dict.fr.meta.title, dict.fr.meta.desc),
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Shell lang="fr">{children}</Shell>;
}

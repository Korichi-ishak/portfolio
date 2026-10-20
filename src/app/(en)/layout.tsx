import type { Metadata, Viewport } from "next";
import Shell from "@/components/Shell";
import { dict } from "@/i18n";
import { baseMeta, pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...baseMeta,
  ...pageMeta("en", "/", dict.en.meta.title, dict.en.meta.desc),
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Shell lang="en">{children}</Shell>;
}

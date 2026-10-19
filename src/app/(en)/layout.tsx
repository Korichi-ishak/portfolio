import type { Metadata, Viewport } from "next";
import Shell from "@/components/Shell";
import { dict } from "@/i18n";

export const metadata: Metadata = {
  title: dict.en.meta.title,
  description: dict.en.meta.desc,
  alternates: { languages: { en: "/", fr: "/fr" } },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Shell lang="en">{children}</Shell>;
}

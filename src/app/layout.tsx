import type { Metadata } from "next";
import "./globals.css";
import "@/components/home/home.css";
import "@/components/stories/auto.css";
import "@/components/stories/ayan.css";
import "@/components/stories/divan.css";
import "@/components/stories/fds.css";
import "@/components/stories/queen.css";
import "@/components/stories/tasshila.css";
import "@/components/stories/velo.css";
import "@/components/stories/wassalni.css";

export const metadata: Metadata = {
  title: "Ishak Korichi — Full-stack developer",
  description:
    "Full-stack developer. I build the CRMs, ERPs and internal platforms that replace spreadsheets and paper. Annaba → Paris.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@500;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import "@/app/globals.css";
import "@/components/home/home.css";
import "@/components/stories/auto.css";
import "@/components/stories/ayan.css";
import "@/components/stories/divan.css";
import "@/components/stories/fds.css";
import "@/components/stories/queen.css";
import "@/components/stories/tasshila.css";
import "@/components/stories/velo.css";
import "@/components/stories/wassalni.css";
import type { Lang } from "@/i18n";

/** <html> for one language: each language has its own root layout so `lang` is right for screen readers. */
export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- this is the root layout's <head>, shared by both languages */}
      <head>
        {/* lets CSS know JS is on (the mobile menu stays open without it) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@500;700&display=swap"
        />
      </head>
      <body>
        <div id="top" />
        {children}
      </body>
    </html>
  );
}

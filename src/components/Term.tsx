import { entry, termProps } from "@/data/glossary";
import type { Lang } from "@/i18n";

/**
 * A word with a two-level explanation that appears on hover, focus or tap (see <Tooltips />).
 * decorative: a design wink (layer names, Figma labels). It keeps its mouse tooltip but is
 * hidden from screen readers and skipped by the keyboard, so nobody hears it read out for nothing.
 */
export default function Term({ k, lang, children, className, decorative = false }: { k: string; lang: Lang; children: React.ReactNode; className?: string; decorative?: boolean }) {
  const e = entry(k, lang);
  if (!e) return decorative ? <span aria-hidden="true">{children}</span> : <>{children}</>;
  return (
    <span className={`tt${className ? ` ${className}` : ""}`} {...termProps(e, !decorative)} {...(decorative ? { "aria-hidden": true } : {})}>
      {children}
    </span>
  );
}

import { entry, termProps } from "@/data/glossary";
import type { Lang } from "@/i18n";

/** A word with a two-level explanation that appears on hover, focus or tap (see <Tooltips />). */
export default function Term({ k, lang, children, className }: { k: string; lang: Lang; children: React.ReactNode; className?: string }) {
  const e = entry(k, lang);
  if (!e) return <>{children}</>;
  return (
    <span className={`tt${className ? ` ${className}` : ""}`} {...termProps(e)}>
      {children}
    </span>
  );
}

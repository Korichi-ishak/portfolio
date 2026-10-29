import { NextResponse, type NextRequest } from "next/server";

/*
  First visit in a French-speaking context → the French version.
  - The browser's first language is French, or the visitor is in a French-speaking
    country and does not ask for English first.
  - The choice is kept in a cookie. Clicking EN or FR in the header always wins:
    those links carry ?lang=…, which sets the cookie and is then removed from the URL.
  - Search engines and link previews are never redirected, so each language keeps
    its own indexed page.
*/

const COOKIE = "lang";
const YEAR = 60 * 60 * 24 * 365;
// countries where French is the language people are most likely to read
const FRENCH_COUNTRIES = new Set(["FR", "BE", "LU", "MC", "CH", "DZ", "MA", "TN", "SN", "CI", "CM", "ML", "BF", "NE", "TG", "BJ", "GA", "CG", "CD", "MG", "HT", "RE", "GP", "MQ", "GF", "YT", "NC", "PF"]);
const BOT = /bot|crawl|spider|slurp|bing|google|facebookexternalhit|linkedin|twitter|whatsapp|telegram|slack|discord|preview|lighthouse/i;

/** Languages from Accept-Language, best first. */
function languages(header: string | null) {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.toLowerCase().split("-")[0], q: q ? parseFloat(q.split("=")[1]) || 0 : 1 };
    })
    .filter((l) => l.lang && l.lang !== "*")
    .sort((a, b) => b.q - a.q)
    .map((l) => l.lang);
}

function prefersFrench(req: NextRequest) {
  const langs = languages(req.headers.get("accept-language"));
  if (langs[0] === "fr") return true;
  if (langs[0] === "en") return false;
  const country = req.headers.get("x-vercel-ip-country")?.toUpperCase();
  return !!country && FRENCH_COUNTRIES.has(country);
}

const toFrench = (path: string) => (path === "/" ? "/fr" : `/fr${path}`);

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const isFrench = url.pathname === "/fr" || url.pathname.startsWith("/fr/");

  // an explicit click on EN / FR
  const asked = url.searchParams.get("lang");
  if (asked === "en" || asked === "fr") {
    const clean = url.clone();
    clean.searchParams.delete("lang");
    const res = NextResponse.redirect(clean);
    res.cookies.set(COOKIE, asked, { maxAge: YEAR, path: "/", sameSite: "lax" });
    return res;
  }

  if (isFrench || BOT.test(req.headers.get("user-agent") || "")) return NextResponse.next();

  const saved = req.cookies.get(COOKIE)?.value;
  if (saved === "en") return NextResponse.next();

  if (saved === "fr" || prefersFrench(req)) {
    const fr = url.clone();
    fr.pathname = toFrench(url.pathname);
    const res = NextResponse.redirect(fr, 307);
    res.cookies.set(COOKIE, "fr", { maxAge: YEAR, path: "/", sameSite: "lax" });
    return res;
  }

  const res = NextResponse.next();
  res.cookies.set(COOKIE, "en", { maxAge: YEAR, path: "/", sameSite: "lax" });
  return res;
}

export const config = {
  // pages only: no files, no Next internals, no sitemap / robots / images
  matcher: ["/((?!_next|api|img|og\\.png|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.[a-z0-9]+$).*)"],
};

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import Term from "@/components/Term";
import { entry, keyOf, projectEntry, termProps } from "@/data/glossary";
import { dict, localize, type Lang } from "@/i18n";

/*
  /work as a terminal. Everything works without typing: the project list is
  printed on load and every name is a real link. Typing is a bonus: ls, cat,
  open, grep, whoami, clear, help — with Tab completion and ↑ ↓ history.
*/

export type TermProject = {
  slug: string;
  num: string;
  name: string;
  what: string;
  year: string;
  kind: "client" | "academic";
  stack: string[];
  client: string;
  role: string;
  when: string;
  lead: string;
  thumb: string;
  url: string;
  domain: string;
};

type Out =
  | { k: "text"; t: string }
  | { k: "err"; t: string }
  | { k: "ls"; rows: TermProject[]; title?: string }
  | { k: "cat"; p: TermProject }
  | { k: "help" }
  | { k: "who" };

type Entry = { id: number; cmd?: string; out: Out };

const COMMANDS = ["help", "ls", "cat", "open", "grep", "whoami", "clear", "cd"];

export default function ProjectTerminal({ lang, items }: { lang: Lang; items: TermProject[] }) {
  const t = dict[lang].term;
  const router = useRouter();
  const [entries, setEntries] = useState<Entry[]>([
    { id: 0, out: { k: "text", t: t.welcome } },
    { id: 1, cmd: "ls", out: { k: "ls", rows: items } },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const idRef = useRef(2);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // keep the newest output in view
  useEffect(() => {
    const body = bodyRef.current;
    if (body && entries.length > 2) body.scrollTop = body.scrollHeight;
  }, [entries]);

  const find = (q: string): TermProject | undefined => {
    const s = q.trim().toLowerCase().replace(/^#/, "");
    if (!s) return undefined;
    if (/^\d+$/.test(s)) return items.find((p) => Number(p.num) === Number(s));
    return (
      items.find((p) => p.slug === s) ||
      items.find((p) => p.name.toLowerCase() === s) ||
      items.find((p) => p.name.toLowerCase().startsWith(s)) ||
      items.find((p) => p.name.toLowerCase().includes(s))
    );
  };

  const push = (cmd: string, out: Out | null) => {
    setEntries((e) => [...e, { id: idRef.current++, cmd, out: out ?? { k: "text", t: "" } }]);
  };

  const run = (raw: string) => {
    const line = raw.trim();
    if (!line) return;
    setHistory((h) => [...h, line]);
    setCursor(-1);
    const [cmd, ...rest] = line.split(/\s+/);
    const arg = rest.join(" ");
    switch (cmd.toLowerCase()) {
      case "help":
      case "?":
        return push(line, { k: "help" });
      case "ls":
      case "ll": {
        const f = arg.toLowerCase();
        if (f.startsWith("client")) return push(line, { k: "ls", rows: items.filter((p) => p.kind === "client") });
        if (f.startsWith("acad") || f.startsWith("univ")) return push(line, { k: "ls", rows: items.filter((p) => p.kind === "academic") });
        return push(line, { k: "ls", rows: items });
      }
      case "cat":
      case "open": {
        if (!arg) return push(line, { k: "err", t: t.which });
        const p = find(arg);
        if (!p) return push(line, { k: "err", t: t.none(arg) });
        if (cmd.toLowerCase() === "cat") return push(line, { k: "cat", p });
        push(line, { k: "text", t: t.opening(p.name) });
        router.push(localize(lang, `/work/${p.slug}`));
        return;
      }
      case "grep":
      case "find": {
        if (!arg) return push(line, { k: "err", t: t.which });
        const q = arg.toLowerCase();
        const rows = items.filter((p) => [p.name, p.what, p.client, ...p.stack].join(" ").toLowerCase().includes(q));
        return push(line, rows.length ? { k: "ls", rows, title: `grep “${arg}”` } : { k: "err", t: t.none(arg) });
      }
      case "whoami":
        return push(line, { k: "who" });
      case "cd":
        if (!arg || arg === "~" || arg === ".." || arg === "/") {
          push(line, { k: "text", t: "~" });
          router.push(localize(lang, "/"));
          return;
        }
        return push(line, { k: "err", t: t.none(arg) });
      case "clear":
      case "cls":
        setEntries([]);
        return;
      default: {
        // typing a project name alone opens its summary
        const p = find(line);
        if (p) return push(line, { k: "cat", p });
        return push(line, { k: "err", t: t.notFound(cmd) });
      }
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    run(value);
    setValue("");
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const next = cursor < 0 ? history.length - 1 : Math.max(0, cursor - 1);
      setCursor(next);
      setValue(history[next]);
    } else if (e.key === "ArrowDown" && cursor >= 0) {
      e.preventDefault();
      const next = cursor + 1;
      if (next >= history.length) {
        setCursor(-1);
        setValue("");
      } else {
        setCursor(next);
        setValue(history[next]);
      }
    } else if (e.key === "Tab" && value.trim()) {
      // complete only when there is something to complete, so Tab still moves focus otherwise
      const parts = value.split(/\s+/);
      if (parts.length === 1) {
        const m = COMMANDS.filter((c) => c.startsWith(parts[0].toLowerCase()));
        if (m.length === 1 && m[0] !== parts[0]) {
          e.preventDefault();
          setValue(m[0] + " ");
        }
      } else {
        const last = parts[parts.length - 1].toLowerCase();
        const m = items.filter((p) => p.slug.startsWith(last));
        if (m.length === 1 && m[0].slug !== last) {
          e.preventDefault();
          setValue([...parts.slice(0, -1), m[0].slug].join(" "));
        } else if (m.length > 1 && last) {
          e.preventDefault();
          push(value, { k: "text", t: m.map((p) => p.slug).join("   ") });
        }
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  // clicking empty space in the window puts the caret back in the prompt
  const focusPrompt = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button, input, summary") || window.getSelection()?.toString()) return;
    inputRef.current?.focus({ preventScroll: true });
  };

  const P = (cmd: string): ReactNode => (
    <span className="tw__line">
      <span className="tw__prompt" aria-hidden="true">
        <span className="tw__user">ishak@korichi</span>:<span className="tw__path">~/{lang === "fr" ? "projets" : "projects"}</span>$
      </span>{" "}
      <span className="tw__cmd">{cmd}</span>
    </span>
  );

  const render = (o: Out): ReactNode => {
    switch (o.k) {
      case "text":
        return o.t ? <p className="tw__text">{o.t}</p> : null;
      case "err":
        return <p className="tw__err">{o.t}</p>;
      case "who":
        return (
          <p className="tw__text">
            {t.whoami}{" "}
            <Link href={localize(lang, "/")} className="tw__link">
              {t.home} →
            </Link>
          </p>
        );
      case "help":
        return (
          <div className="tw__block">
            <p className="tw__dim">{t.helpTitle}</p>
            <dl className="tw__help">
              {t.help.map(([c, d]) => (
                <div key={c}>
                  <dt>
                    <button type="button" className="tw__run" onClick={() => run(c.replace(/ <.*>/, ""))} {...termProps(entry(`cmd:${c.split(" ")[0]}`, lang), false)}>
                      {c}
                    </button>
                  </dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        );
      case "ls":
        return (
          <div className="tw__block">
            <table className="tw__table">
              <caption className="sr-only">{o.title ?? t.count(o.rows.length)}</caption>
              <thead>
                <tr>
                  {t.cols.map((c, i) => (
                    <th key={c} scope="col" className={i === 2 ? "tw__col-what" : undefined}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {o.rows.map((p) => (
                  <tr key={p.slug}>
                    <td className="tw__num">{p.num}</td>
                    <td>
                      <Link href={localize(lang, `/work/${p.slug}`)} className="tw__name" data-kind={p.kind} {...termProps(projectEntry(lang, p.what, p.stack, p.kind === "academic"), false)}>
                        {p.name}
                      </Link>
                      <span className="tw__what-inline">{p.what}</span>
                    </td>
                    <td className="tw__col-what tw__dim">{p.what}</td>
                    <td className="tw__dim tw__year">{p.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="tw__dim tw__count">
              {o.title ? `${o.title} · ` : ""}
              {t.count(o.rows.length)}
            </p>
          </div>
        );
      case "cat": {
        const p = o.p;
        return (
          <article className="tw__cat" aria-label={p.name}>
            {p.thumb && (
              <Link href={localize(lang, `/work/${p.slug}`)} className="tw__thumb" tabIndex={-1} aria-hidden="true">
                <img src={p.thumb} alt="" loading="lazy" />
              </Link>
            )}
            <div className="tw__cat-body">
              <p className="tw__cat-name" data-kind={p.kind}>
                {p.num} · {p.name}
              </p>
              <p className="tw__dim">{p.what}</p>
              <dl className="tw__facts">
                <div>
                  <dt>{t.client}</dt>
                  <dd>{p.client}</dd>
                </div>
                <div>
                  <dt>{t.role}</dt>
                  <dd>{p.role}</dd>
                </div>
                <div>
                  <dt>{t.when}</dt>
                  <dd>{p.when}</dd>
                </div>
                <div>
                  <dt>{t.stack}</dt>
                  <dd>
                    {p.stack.map((s, i) => (
                      <span key={s}>
                        {i > 0 && " · "}
                        <Term k={keyOf(s) ?? ""} lang={lang}>{s}</Term>
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <p className="tw__text">{p.lead}</p>
              <p className="tw__actions">
                <Link href={localize(lang, `/work/${p.slug}`)} className="tw__link">
                  {t.read} →
                </Link>
                {p.url && (
                  <a href={p.url} className="tw__link" target="_blank" rel="noreferrer">
                    {t.live}: {p.domain || p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                  </a>
                )}
              </p>
            </div>
          </article>
        );
      }
    }
  };

  const tries = ["ls client", "cat fds", "grep supabase", "help"];

  return (
    <section className="tw" aria-labelledby="tw-title">
      <div className="tw__chrome">
        <span className="tw__lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <h1 id="tw-title" className="tw__title">
          <span className="sr-only">{t.h1} — </span>
          {t.title}
        </h1>
        <span className="tw__size" aria-hidden="true">
          zsh · {items.length}
        </span>
      </div>

      <div className="tw__body" ref={bodyRef} onMouseUp={focusPrompt}>
        <p className="sr-only">{t.intro}</p>
        <div role="log" aria-live="polite" aria-relevant="additions" className="tw__log">
          {entries.map((e) => (
            <div key={e.id} className="tw__entry">
              {e.cmd !== undefined && P(e.cmd)}
              {render(e.out)}
            </div>
          ))}
        </div>

        <form className="tw__form" onSubmit={onSubmit}>
          <label htmlFor="tw-input" className="tw__prompt">
            <span className="tw__user">ishak@korichi</span>:<span className="tw__path">~/{lang === "fr" ? "projets" : "projects"}</span>$
            <span className="sr-only"> {t.label}</span>
          </label>
          <input
            ref={inputRef}
            id="tw-input"
            className="tw__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="go"
            aria-describedby="tw-tip"
          />
          <button type="submit" className="sr-only">
            {t.run}
          </button>
        </form>
      </div>

      <div className="tw__foot">
        <span className="tw__dim">{t.try}:</span>
        <ul className="tw__tries">
          {tries.map((c) => (
            <li key={c}>
              <button type="button" className="tw__chip" onClick={() => run(c)}>
                {c}
              </button>
            </li>
          ))}
        </ul>
        <span id="tw-tip" className="tw__tip">
          {t.tip}
        </span>
      </div>
    </section>
  );
}

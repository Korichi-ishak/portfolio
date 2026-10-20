"use client";

import { useEffect, useRef, useState } from "react";

/*
  One tooltip for the whole site, styled like a dictionary entry.
  Any element with data-tt-s / data-tt-p / data-tt-k is a trigger:
  - mouse: appears after a short delay, stays while the pointer is on the word or on the tooltip;
  - keyboard: appears at once on focus;
  - touch: a tap on a word that is not a link opens it, a tap elsewhere closes it;
  - Escape closes it.
  The trigger gets aria-describedby while it is shown, so screen readers read it too.
*/

const DELAY = 700;
type Tip = { word: string; k: string; s: string; p: string; x: number; y: number; above: boolean };

export default function Tooltips() {
  const [tip, setTip] = useState<Tip | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const owner = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let showT = 0;
    let hideT = 0;
    let touch = false;

    const triggerOf = (t: EventTarget | null) => (t instanceof Element ? (t.closest("[data-tt-s]") as HTMLElement | null) : null);

    const show = (el: HTMLElement) => {
      window.clearTimeout(hideT);
      if (owner.current && owner.current !== el) owner.current.removeAttribute("aria-describedby");
      owner.current = el;
      el.setAttribute("aria-describedby", "site-tip");
      const r = el.getBoundingClientRect();
      const word = (el.getAttribute("data-tt-w") || el.textContent || "").replace(/\s+/g, " ").trim();
      setTip({ word, k: el.dataset.ttK || "", s: el.dataset.ttS || "", p: el.dataset.ttP || "", x: r.left, y: r.bottom, above: r.bottom > window.innerHeight * 0.62 && r.top > 220 });
    };
    const hide = () => {
      window.clearTimeout(showT);
      owner.current?.removeAttribute("aria-describedby");
      owner.current = null;
      setTip(null);
    };
    const hideSoon = () => {
      window.clearTimeout(showT);
      hideT = window.setTimeout(hide, 160);
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      if (boxRef.current?.contains(e.target as Node)) return window.clearTimeout(hideT);
      const el = triggerOf(e.target);
      if (!el) return;
      window.clearTimeout(hideT);
      if (owner.current === el) return;
      window.clearTimeout(showT);
      showT = window.setTimeout(() => show(el), DELAY);
    };
    const onOut = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const to = e.relatedTarget as Node | null;
      const from = triggerOf(e.target) || (boxRef.current?.contains(e.target as Node) ? boxRef.current : null);
      if (!from) return;
      if (to && (from.contains(to) || boxRef.current?.contains(to) || triggerOf(to) === owner.current)) return;
      hideSoon();
    };
    const onDown = (e: PointerEvent) => {
      touch = e.pointerType === "touch";
      if (!triggerOf(e.target) && !boxRef.current?.contains(e.target as Node)) hide();
    };
    const onClick = (e: MouseEvent) => {
      const el = triggerOf(e.target);
      if (!el || el.closest("a,button")) return; // links and buttons keep doing their job
      if (owner.current === el) hide();
      else show(el);
    };
    const onFocus = (e: FocusEvent) => {
      if (touch) return;
      const el = triggerOf(e.target);
      if (el && el === e.target) show(el);
    };
    const onBlur = (e: FocusEvent) => {
      if (triggerOf(e.target) === owner.current) hideSoon();
    };
    const onKey = (e: KeyboardEvent) => {
      touch = false;
      if (e.key === "Escape" && owner.current) hide();
    };
    const onScroll = () => owner.current && hide();

    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("click", onClick);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("click", onClick);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onBlur);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(showT);
      window.clearTimeout(hideT);
    };
  }, []);

  // keep the box inside the screen once its size is known
  useEffect(() => {
    const box = boxRef.current;
    if (!tip || !box) return;
    const w = box.offsetWidth;
    const h = box.offsetHeight;
    const left = Math.max(12, Math.min(tip.x, window.innerWidth - w - 12));
    const top = tip.above ? tip.y - h - (owner.current?.getBoundingClientRect().height ?? 0) - 12 : tip.y + 10;
    box.style.left = `${left}px`;
    box.style.top = `${Math.max(12, top)}px`;
  }, [tip]);

  return (
    <div id="site-tip" role="tooltip" ref={boxRef} className="tip" hidden={!tip}>
      {tip && (
        <>
          <p className="tip__head">
            <span className="tip__word">{tip.word}</span>
            {tip.k && <span className="tip__kind">{tip.k}</span>}
          </p>
          <ol className="tip__defs">
            <li>{tip.s}</li>
            {tip.p && <li className="tip__pro">{tip.p}</li>}
          </ol>
        </>
      )}
    </div>
  );
}

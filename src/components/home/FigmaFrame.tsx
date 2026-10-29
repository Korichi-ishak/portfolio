"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { dict, type Lang } from "@/i18n";

/*
  The hero title inside a Figma selection frame that people can actually play with:
  drag a corner handle to scale it, drag the frame to move it (mouse and pen; on touch
  only the handles react, so the page still scrolls), or use the keyboard once it has focus.
  Everything happens with a CSS transform, so the layout around it never moves.
  When the person lets go, a short note explains why titles are not fixed-size on the web,
  and the frame slides back to Fill × Hug.
*/

type Corner = "tl" | "tr" | "bl" | "br";
const ORIGIN: Record<Corner, string> = { tl: "100% 100%", tr: "0% 100%", bl: "100% 0%", br: "0% 0%" };
const MIN = 0.45;
const MAX = 1.9;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export default function FigmaFrame({ lang, label, children }: { lang: Lang; label: ReactNode; children: ReactNode }) {
  const t = dict[lang].hero.frame;
  const box = useRef<HTMLDivElement>(null);
  const s = useRef({ tx: 0, ty: 0, k: 1 });
  const [edited, setEdited] = useState(false);
  const [size, setSize] = useState("");
  const [warn, setWarn] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };
  const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms));

  const paint = (animate = false) => {
    const el = box.current;
    if (!el) return;
    el.classList.toggle("ff--back", animate);
    const { tx, ty, k } = s.current;
    el.style.transform = tx || ty || k !== 1 ? `translate(${tx}px, ${ty}px) scale(${k})` : "";
    el.style.setProperty("--ffk", String(k)); // handles and labels keep their size, like in Figma
    const r = el.getBoundingClientRect();
    setSize(`${Math.round(r.width)} × ${Math.round(r.height)}`);
  };

  const touched = () => {
    clearTimers();
    setWarn(false);
    setEdited(true);
  };

  /** let go: explain, then slide back */
  const release = (delay: number) => {
    clearTimers();
    later(() => {
      setWarn(true);
      later(() => {
        s.current = { tx: 0, ty: 0, k: 1 };
        paint(true);
        later(() => {
          setEdited(false);
          box.current?.classList.remove("ff--back");
          box.current?.style.removeProperty("transform-origin");
        }, 650);
      }, 900);
      later(() => setWarn(false), 6500);
    }, delay);
  };

  useEffect(() => () => clearTimers(), []);

  const onHandleDown = (corner: Corner) => (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const el = box.current;
    if (!el) return;
    touched();
    const handle = e.currentTarget as HTMLElement;
    handle.setPointerCapture(e.pointerId);
    // scale around the opposite corner, keeping the current visual position
    el.style.transformOrigin = ORIGIN[corner];
    const r = el.getBoundingClientRect();
    const start = { x: e.clientX, y: e.clientY, k: s.current.k, w: r.width / s.current.k, h: r.height / s.current.k };
    const sx = corner === "tr" || corner === "br" ? 1 : -1;
    const sy = corner === "bl" || corner === "br" ? 1 : -1;
    const move = (ev: PointerEvent) => {
      const dw = ((ev.clientX - start.x) * sx) / start.w;
      const dh = ((ev.clientY - start.y) * sy) / start.h;
      s.current.k = clamp(start.k + Math.max(dw, dh), MIN, MAX);
      paint();
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      release(300);
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
  };

  const onFrameDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || e.button !== 0) return; // fingers scroll the page
    if ((e.target as Element).closest(".tt")) return; // the label keeps its tooltip
    const el = box.current;
    if (!el) return;
    e.preventDefault();
    touched();
    el.setPointerCapture(e.pointerId);
    const start = { x: e.clientX, y: e.clientY, tx: s.current.tx, ty: s.current.ty };
    const lim = { x: window.innerWidth / 3, y: 220 };
    const move = (ev: PointerEvent) => {
      s.current.tx = clamp(start.tx + ev.clientX - start.x, -lim.x, lim.x);
      s.current.ty = clamp(start.ty + ev.clientY - start.y, -lim.y, lim.y);
      paint();
    };
    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      if (s.current.tx || s.current.ty || s.current.k !== 1) release(300);
      else setEdited(false);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.target !== box.current) return;
    const step = 12;
    const d: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    if (e.key === "Escape" && edited) {
      e.preventDefault();
      release(0);
      return;
    }
    if (!d[e.key]) return;
    e.preventDefault();
    touched();
    const [x, y] = d[e.key];
    if (e.shiftKey) {
      box.current!.style.transformOrigin = "50% 50%";
      s.current.k = clamp(s.current.k + (x || -y) * 0.06, MIN, MAX);
    } else {
      s.current.tx = clamp(s.current.tx + x * step, -window.innerWidth / 3, window.innerWidth / 3);
      s.current.ty = clamp(s.current.ty + y * step, -220, 220);
    }
    paint();
    release(1400);
  };

  return (
    <div className="ff-wrap">
      <div
        ref={box}
        className={`ff${edited ? " ff--edited" : ""}`}
        tabIndex={0}
        role="group"
        aria-label={t.label}
        aria-describedby="ff-keys"
        onPointerDown={onFrameDown}
        onKeyDown={onKey}
      >
        {(["tl", "tr", "bl", "br"] as Corner[]).map((c) => (
          <span key={c} className={`ff__h ff__h--${c}`} aria-hidden="true" onPointerDown={onHandleDown(c)} />
        ))}
        <span className="ff__label" aria-hidden="true">{edited ? t.fixed : label}</span>
        {children}
        {edited && (
          <span className="ff__size" aria-hidden="true">
            {size}
          </span>
        )}
      </div>
      <span id="ff-keys" className="sr-only">
        {t.keys}
      </span>
      <p className="ff__warn" role="status" aria-live="polite" data-show={warn}>
        {warn && (
          <>
            <b>{t.warnTitle}</b> {t.warn}
          </>
        )}
      </p>
    </div>
  );
}

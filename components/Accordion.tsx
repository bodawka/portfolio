"use client";
import { useId, useState, type ReactNode } from "react";
import s from "./Accordion.module.css";

export type AccItem = { title: ReactNode; label?: string; meta?: string; body: ReactNode };

export default function Accordion({ items, defaultOpen = 0 }: { items: AccItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen === null ? [] : [defaultOpen]));
  const base = useId();
  const toggle = (i: number) => setOpen((p) => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n; });
  return (
    <div className={s.list}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} className={s.item}>
            <button className={s.head} aria-expanded={isOpen} aria-controls={`${base}-${i}`} onClick={() => toggle(i)}>
              {it.label && <span className={`t-mono-cap accent ${s.lab}`}>{it.label}</span>}
              <span className={`t-body-l ${s.title}`}>{it.title}</span>
              {it.meta && <span className={`t-mono-cap muted ${s.meta}`}>{it.meta}</span>}
              <span className={`${s.icon} ${isOpen ? s.on : ""}`} aria-hidden><i /><i /></span>
            </button>
            <div id={`${base}-${i}`} className={`${s.panel} ${isOpen ? s.open : ""}`} role="region">
              <div className={s.inner}><div className={s.body}>{it.body}</div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

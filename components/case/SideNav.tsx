"use client";

import { useEffect, useState } from "react";
import s from "./case.module.css";

export type NavItem = { id: string; title: string };

/** Sticky table of contents with scroll-spy: the section in view gets the accent. */
export default function SideNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className={s.sideNav} aria-label="Case sections">
      <ol>
        {items.map((it, i) => (
          <li key={it.id}>
            <a href={`#${it.id}`} className={it.id === active ? s.navActive : undefined} aria-current={it.id === active ? "true" : undefined}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              {it.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

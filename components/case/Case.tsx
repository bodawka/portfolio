import Link from "next/link";
import type { ReactNode } from "react";
import { cases } from "@/lib/site";
import SideNav, { type NavItem } from "./SideNav";
import s from "./case.module.css";

/* ---------- Page frame ---------- */

export function CaseHero({ title, subtitle, cover, coverAlt, coverW, coverH }: { title: string; subtitle: string; cover: string; coverAlt: string; coverW: number; coverH: number }) {
  return (
    <>
      <header className={`wrap ${s.hero}`}>
        <Link href="/#work" className={`t-label muted ulink ${s.back}`}>← Work</Link>
        <h1 className="t-display-xl">{title}</h1>
        <p className="t-heading-m muted">{subtitle}</p>
      </header>
      <div className="wrap">
        <img className={s.cover} src={cover} alt={coverAlt} width={coverW} height={coverH} fetchPriority="high" />
      </div>
    </>
  );
}

export function Overview({ meta, numbers }: { meta: [string, string][]; numbers: { value: string; label: string; accent?: boolean }[] }) {
  return (
    <section className={`wrap ${s.overview}`} aria-label="Overview">
      <dl className={s.meta}>
        {meta.map(([k, v]) => (
          <div key={k}><dt className="t-small muted">{k}</dt><dd className="t-body-s">{v}</dd></div>
        ))}
      </dl>
      <div className={s.numbers}>
        {numbers.map((n) => (
          <div key={n.label} className="reveal">
            <p className={`t-display-l ${n.accent ? "accent" : ""}`}>{n.value}</p>
            <p className="t-caption muted">{n.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CaseBody({ nav, children }: { nav: NavItem[]; children: ReactNode }) {
  return (
    <div className={`wrap split ${s.body}`}>
      <aside className={s.side}><SideNav items={nav} /></aside>
      <div className={s.content}>{children}</div>
    </div>
  );
}

export function Section({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section id={id} className={s.sec}>
      <p className="label"><b>{String(n).padStart(2, "0")}</b>{title}</p>
      {children}
    </section>
  );
}

export function NextCase({ slug }: { slug: string }) {
  const c = cases.find((x) => x.slug === slug);
  if (!c) return null;
  return (
    <section className={`wrap split ${s.next}`}>
      <p className="t-label">Next case</p>
      <Link href={`/${c.slug}`} className={s.nextCard}>
        <div className={`${s.nextCover} ${c.wide ? s.nextWide : ""}`} style={{ background: c.bg }}><img src={c.wide ?? c.cover} alt={`${c.title} cover`} loading="lazy" /></div>
        <div className={s.nextTitle}>
          <span className="t-title">{c.title} <span className={s.arrow}>→</span></span>
          <span className="t-caption muted">{c.metric}</span>
        </div>
        <p className="t-body-s muted">{c.subtitle}</p>
      </Link>
    </section>
  );
}

/* ---------- Content blocks ---------- */

export const P = ({ children, size = "l", muted }: { children: ReactNode; size?: "l" | "s" | "lead" | "big"; muted?: boolean }) => {
  const cls = { l: "t-body-l", s: "t-caption", lead: "t-heading-m", big: "t-heading-l" }[size];
  return <p className={`${cls} ${muted ? "muted" : ""} ${size === "lead" || size === "big" ? "reveal" : ""}`}>{children}</p>;
};

export const Accent = ({ children }: { children: ReactNode }) => <span className="serif accent">{children}</span>;

/** Two-column list: bold term + muted description, separated by hairlines. */
export function Rows({ items }: { items: [string, string][] }) {
  return (
    <dl className={s.rows}>
      {items.map(([k, v]) => (
        <div key={k}><dt className="t-body-m">{k}</dt><dd className="t-body-s muted">{v}</dd></div>
      ))}
    </dl>
  );
}

/** Problem / Solution / Trade-off style blocks with a mono label. */
export function Labeled({ items }: { items: [string, ReactNode][] }) {
  return (
    <div className={s.labeled}>
      {items.map(([k, v]) => (
        <div key={k}><span className="t-mono accent">{k}</span><p className="t-body-l">{v}</p></div>
      ))}
    </div>
  );
}

export function Figure({ src, alt, w, h, caption, frame, maxW }: { src: string; alt: string; w: number; h: number; caption?: string; frame?: boolean; maxW?: number }) {
  return (
    <figure className={`${s.fig} reveal`} style={maxW ? { maxWidth: maxW } : undefined}>
      <img src={src} alt={alt} width={w} height={h} loading="lazy" className={frame ? s.framed : undefined} />
      {caption && <figcaption className="t-mono-cap muted">{caption}</figcaption>}
    </figure>
  );
}

export function Pair({ children }: { children: ReactNode }) {
  return <div className={s.pair}>{children}</div>;
}

/** Wide diagram that keeps its size and scrolls sideways on small screens. */
export function Diagram({ label, src, alt, w, h }: { label: string; src: string; alt: string; w: number; h: number }) {
  return (
    <figure className={`${s.diagram} reveal`}>
      <figcaption className="t-mono-cap accent">{label}</figcaption>
      <div className={s.scroller}><img src={src} alt={alt} width={w} height={h} loading="lazy" /></div>
      <span className={`t-mono-cap muted ${s.swipe}`} aria-hidden>Swipe →</span>
    </figure>
  );
}

export function BigNumber({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className={s.bigNum}>
      <p className={`t-display-xl ${accent ? "accent" : ""}`}>{value}</p>
      <p className="t-body-s muted">{label}</p>
    </div>
  );
}

export type Cell = { text: string; tone?: "ink" | "muted" | "accent" };
export function Table({ caption, head, rows }: { caption: string; head: string[]; rows: { task: string; cells: Cell[] }[] }) {
  return (
    <figure className={s.tableWrap}>
      <figcaption className="t-mono-cap muted">{caption}</figcaption>
      <table className={s.table}>
        <thead><tr>{head.map((h) => <th key={h} className="t-mono-cap muted" scope="col">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.task}>
              <th scope="row" className="t-body-s">{r.task}</th>
              {r.cells.map((c, i) => (
                <td key={i} data-label={head[i + 1]} className={`t-body-s ${c.tone === "muted" ? "muted" : c.tone === "accent" ? "accent" : ""}`}>{c.text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export function Quote({ text, by }: { text: string; by: string }) {
  return (
    <blockquote className={`${s.quote} reveal`}>
      <p>{text}</p>
      <cite className="t-mono-cap muted">{by}</cite>
    </blockquote>
  );
}

export type Phone = { src: string; alt: string; label?: string; accent?: boolean };
/** Row of phone screens. Desktop: left-aligned row. Mobile: swipeable carousel. */
export function Phones({ items, size = "m", note }: { items: Phone[]; size?: "s" | "m"; note?: string }) {
  const w = size === "s" ? 160 : 226;
  return (
    <figure className={`${s.phones} reveal`}>
      <div className={s.phoneRow} style={{ ["--pw" as string]: `${w}px`, ["--pg" as string]: size === "s" ? "14px" : "24px" }}>
        {items.map((p) => (
          <div key={p.src} className={s.phone}>
            <img src={p.src} alt={p.alt} width={w} height={Math.round(w * 2.045)} loading="lazy" />
            {p.label && <span className={`t-mono-cap ${p.accent ? "accent" : "muted"}`}>{p.label}</span>}
          </div>
        ))}
      </div>
      {items.length > 1 && <span className={`t-mono-cap muted ${s.swipe}`} aria-hidden>Swipe →</span>}
      {note && <figcaption className="t-caption muted">{note}</figcaption>}
    </figure>
  );
}

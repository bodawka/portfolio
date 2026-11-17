import Link from "next/link";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import { cases, contact } from "@/lib/site";
import s from "./home.module.css";

const faq = [
  { q: "What do you bring besides design?", a: "A recruiter's habits. I'm used to talking to people, asking follow-up questions and noticing where a process breaks — which is most of user research." },
  { q: "What do you design?", a: "Web and mobile products, from internal tools to subscription apps." },
  { q: "How do you work?", a: "Workflows first, then flows, then screens. Every decision comes with what I rejected." },
  { q: "Where are you based?", a: "Prague. Office, hybrid or remote." },
];

export default function Home() {
  return (
    <main>
      <section className={`wrap ${s.hero}`}>
        <h1 className={`t-display-l ${s.statement} reveal`}>
          I design digital products people don&apos;t have to <span className="serif accent">work around</span>: clear flows, honest decisions, tested with real people.
        </h1>
        <div className={`${s.meta} t-caption reveal`}>
          <span className={s.status}><i aria-hidden />Open to work · office, hybrid or remote</span>
          <span className={s.links}>
            <a className="accent ulink" href={contact.cv} target="_blank" rel="noreferrer">CV ↗</a>
            <a className="muted ulink" href={`mailto:${contact.email}`}>Email ↗</a>
            <a className="muted ulink" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </span>
        </div>
      </section>

      <section id="work" className="wrap">
        <div className={s.workHead}>
          <p className="label"><b>01</b>Selected work</p>
          <span className="t-label muted">2026</span>
        </div>
        <div className={s.grid}>
          {cases.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className={`${s.card} reveal`}>
              <div className={s.cover}><img src={c.cover} alt={`${c.title} cover`} loading="lazy" /></div>
              <div className={s.titleRow}>
                <span className="t-title">{c.title} <span className={s.arrow}>→</span></span>
                <span className="t-small muted">{c.platform}</span>
              </div>
              <p className="t-caption muted">{c.subtitle}</p>
              <p className={`t-caption ${c.metricAccent ? "accent" : "muted"}`}>{c.metric}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="wrap section">
        <div className="split">
          <p className="label"><b>02</b>About</p>
          <div className={s.about}>
            <p className="t-heading-m reveal">
              Before design, I worked as a <span className="serif accent">recruiter</span> and used an ATS every day. The workarounds around it became my first design brief. Now I design web and mobile products end to end.
            </p>
            <dl className={s.facts}>
              {[["Before", "Recruiting, HR Unit"], ["Studied", "Architecture, KNUCA"], ["Also", "Branding & print"], ["Languages", "EN · UA · RU · CZ (learning)"]].map(([k, v]) => (
                <div key={k}><dt className="t-small muted">{k}</dt><dd className="t-caption">{v}</dd></div>
              ))}
            </dl>
            <div className={s.photos}>
              <img className={s.bw} src="/img/photo-warsaw.jpg" alt="Bohdan in Warsaw" loading="lazy" />
              <img src="/img/photo-pool.jpg" alt="Bohdan at an exhibition" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="split">
          <p className="label"><b>03</b>FAQ</p>
          <Accordion items={faq.map((f) => ({ title: f.q, body: <p className="t-body-s muted">{f.a}</p> }))} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

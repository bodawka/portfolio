import { contact } from "@/lib/site";
import s from "./Footer.module.css";

export default function Footer({ n = "04" }: { n?: string }) {
  return (
    <footer id="contact" className={`wrap ${s.footer}`}>
      <div className="split">
        <p className="label"><b>{n}</b>Contact</p>
        <div className={s.text}>
          <h2 className="t-display-l">Let&apos;s talk about your <span className="serif accent">product.</span></h2>
          <div className={s.contacts}>
            <a className="t-body-xl accent ulink" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="t-body-xl ulink" href={contact.whatsapp} target="_blank" rel="noreferrer">{contact.phone}</a>
          </div>
        </div>
      </div>
      <div className={`${s.bottom} t-small`}>
        <span className="muted">© 2026 Bohdan Chuprina</span>
        <nav className={s.links}>
          <a className="ulink" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="ulink" href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="ulink" href={contact.cv} target="_blank" rel="noreferrer">CV</a>
        </nav>
      </div>
    </footer>
  );
}

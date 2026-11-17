import Link from "next/link";
import s from "./TopBar.module.css";

export default function TopBar() {
  return (
    <header className={s.bar}>
      <div className={`wrap ${s.inner}`}>
        <Link href="/" className={s.name}><span className={s.mark} aria-hidden />Bohdan Chuprina</Link>
        <span className={`${s.role} muted`}>Product designer, Prague</span>
        <nav className={s.nav} aria-label="Main">
          <Link href="/#work" className="ulink">Work</Link>
          <Link href="/#about" className="ulink">About</Link>
          <Link href="/#contact" className="ulink">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

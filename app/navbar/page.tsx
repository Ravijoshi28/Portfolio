"use client";

import { ArrowUpRight, Menu, X, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = ["About", "Skills", "Projects", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <nav className="nav-inner" aria-label="Main navigation" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
      <Link href="/" className="brand" aria-label="Ravi Joshi home"><span className="brand-icon"><Terminal size={19} /></span> Ravi Joshi<span className="accent">.</span></Link>
      <div className="desktop-nav">{links.map((link) => <Link key={link} href={`/#${link.toLowerCase()}`}>{link}</Link>)}</div>
      <Link className="button button-small desktop-resume" href="/resume">Resume <ArrowUpRight size={15} /></Link>
      <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <div id="mobile-navigation" className="mobile-nav">{links.map((link) => <Link key={link} href={`/#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</Link>)}<Link href="/resume" onClick={() => setOpen(false)}>Résumé <ArrowUpRight size={15} /></Link></div>}
    </nav>
  </header>;
}

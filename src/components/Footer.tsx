"use client";

import Image from "next/image";
import { Button } from "./Button";
import { useLang } from "@/lib/language";
import { links } from "@/lib/content";

export function Footer() {
  const { dict } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <a className="footer-brand" href="#main" aria-label="FREEDOM">
            <Image src="/assets/logo/logo.jpg" alt="FREEDOM" width={120} height={80} />
          </a>
          <nav className="footer-nav" aria-label={dict.a11y.mainNav}>
            <a href="#about">{dict.nav.about}</a>
            <a href="#services">{dict.nav.services}</a>
            <a href="#contact">{dict.nav.contact}</a>
          </nav>
          <Button href={links.booksy} target="_blank" rel="noopener noreferrer" size="sm">
            {dict.footer.book}
          </Button>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © <span className="num">{year}</span> FREEDOM Barber & Fryzjer · {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

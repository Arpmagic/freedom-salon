"use client";

import Image from "next/image";
import Link from "next/link";
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
          <Link className="footer-brand" href="/" aria-label="FREEDOM">
            <Image src="/assets/logo/logo.jpg" alt="FREEDOM" width={120} height={80} />
          </Link>
          <nav className="footer-nav" aria-label={dict.a11y.mainNav}>
            <Link href="/#about">{dict.nav.about}</Link>
            <Link href="/#services">{dict.nav.services}</Link>
            <Link href="/#contact">{dict.nav.contact}</Link>
          </nav>
          <Button href={links.booksy} target="_blank" rel="noopener noreferrer" size="sm">
            {dict.footer.book}
          </Button>
        </div>

        <div className="footer-legal">
          <p>
            <strong>Freedom Anna Kuzminets</strong>
            <br />
            os. Stare Żegrze 142, 61-249 Poznań
            <br />
            NIP: 7831906014 | REGON: 528880417
          </p>
          <div className="footer-legal__links">
            <Link href="/polityka-prywatnosci">{dict.legal.privacyLink}</Link>
            <span aria-hidden="true"> | </span>
            <Link href="/regulamin">{dict.legal.regulationsLink}</Link>
          </div>
          <p>
            © <span className="num">{year}</span> FREEDOM Barber & Fryzjer. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { useLang } from "@/lib/language";
import { links, type Lang } from "@/lib/content";

const langs: Lang[] = ["pl", "uk", "en"];

export function Header() {
  const { lang, dict, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onResize = () => {
      if (window.innerWidth > 780) close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#main">
        {dict.a11y.skip}
      </a>
      <div className="header-inner">
        <a className="brand" href="#main" aria-label="FREEDOM" onClick={close}>
          <Image
            className="brand__logo"
            src="/assets/logo/logo.jpg"
            alt="FREEDOM"
            width={140}
            height={93}
            priority
          />
        </a>

        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label={dict.a11y.mainNav}>
          <a href="#about" onClick={close}>
            {dict.nav.about}
          </a>
          <a href="#services" onClick={close}>
            {dict.nav.services}
          </a>
          <a href="#portfolio" onClick={close}>
            {dict.nav.portfolio}
          </a>
          <a href="#reviews" onClick={close}>
            {dict.nav.reviews}
          </a>
          <a href="#contact" onClick={close}>
            {dict.nav.contact}
          </a>
          <Button
            className="site-nav__cta"
            href={links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            {dict.nav.book}
          </Button>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label={dict.a11y.language}>
            {langs.map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-btn ${lang === code ? "is-active" : ""}`}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code === "uk" ? "UA" : code.toUpperCase()}
              </button>
            ))}
          </div>
          <Button
            className="header-cta"
            href={links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            {dict.nav.book}
          </Button>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={dict.a11y.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

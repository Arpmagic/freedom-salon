"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/language";
import { links } from "@/lib/content";
import { IconInstagram, IconPhone } from "./icons";

const SHOW_AFTER = 180;

export function MobileDock() {
  const { dict } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`mobile-dock ${visible ? "is-visible" : ""}`}
      role="navigation"
      aria-label={dict.a11y.quickActions}
    >
      <a
        className="mobile-dock__book"
        href={links.booksy}
        target="_blank"
        rel="noopener noreferrer"
      >
        {dict.nav.book}
      </a>
      <a
        className="mobile-dock__icon"
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <IconInstagram />
      </a>
      <a className="mobile-dock__icon" href={`tel:${links.phone}`} aria-label={dict.a11y.call}>
        <IconPhone />
      </a>
    </div>
  );
}

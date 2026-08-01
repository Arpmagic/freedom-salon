"use client";

import Image from "next/image";
import { Button } from "./Button";
import { useLang } from "@/lib/language";
import { links } from "@/lib/content";

export function Hero() {
  const { dict } = useLang();

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <Image
          src="/assets/about/anna-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__img"
        />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__brand-lockup">
          <Image
            className="hero__logo"
            src="/assets/logo/logo.jpg"
            alt="FREEDOM"
            width={280}
            height={187}
            priority
          />
          <span className="hero__tagline">{dict.hero.tagline}</span>
        </div>
        <h1 id="hero-heading" className="hero__headline">
          {dict.hero.headline}
        </h1>
        <p className="hero__sub">{dict.hero.sub}</p>
        <div className="hero__actions">
          <Button href={links.booksy} target="_blank" rel="noopener noreferrer">
            {dict.hero.cta}
          </Button>
          <Button href="#portfolio" variant="ghost">
            {dict.hero.secondary}
          </Button>
        </div>
        <div className="hero__meta">
          <span className="hero__rating">
            <strong>{dict.hero.rating}</strong>
          </span>
          <span className="hero__dot" aria-hidden="true" />
          <span>{dict.hero.location}</span>
        </div>
      </div>
    </section>
  );
}

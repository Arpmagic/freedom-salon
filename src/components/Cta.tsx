"use client";

import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/language";
import { links } from "@/lib/content";

export function CtaBand() {
  const { dict } = useLang();

  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-band__glow" aria-hidden="true" />
      <Reveal>
        <div className="container cta-band__inner">
          <h2 id="cta-title" className="cta-band__title">
            {dict.cta.title}
          </h2>
          <p className="cta-band__sub">{dict.cta.sub}</p>
          <Button href={links.booksy} target="_blank" rel="noopener noreferrer">
            {dict.cta.button}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/language";

export function About() {
  const { dict } = useLang();

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <div className="about-visual">
            <div className="about-visual__frame">
              <Image
                src="/assets/portfolio/work-13.jpg"
                alt="FREEDOM Barber & Fryzjer"
                width={1200}
                height={1200}
                className="about-visual__img"
              />
            </div>
            <div className="about-visual__accent">
              <strong>{dict.about.name}</strong>
              <span>{dict.about.role}</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="about-copy">
            <span className="eyebrow">{dict.about.eyebrow}</span>
            <h2 id="about-title" className="section-title">
              {dict.about.title}
            </h2>
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
            <p>{dict.about.p3}</p>
            <div className="about-badges">
              <span className="badge">{dict.about.badge1}</span>
              <span className="badge">
                <span className="num">{dict.about.badge2}</span>
              </span>
              <span className="badge">{dict.about.badge3}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

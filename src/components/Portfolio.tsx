"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/language";
import { portfolioImages } from "@/lib/content";

export function Portfolio() {
  const { dict } = useLang();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeLightbox = () => {
    setActiveIndex(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
        triggerRef.current?.focus();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex]);

  return (
    <section className="section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">{dict.portfolio.eyebrow}</span>
            <h2 id="portfolio-title" className="section-title">
              {dict.portfolio.title}
            </h2>
            <p className="section-sub">{dict.portfolio.sub}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="gallery">
            {portfolioImages.map((src, i) => (
              <button
                key={src}
                type="button"
                className="gallery-item"
                aria-label={`${dict.portfolio.open} — ${dict.portfolio.title} ${i + 1}`}
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setActiveIndex(i);
                }}
              >
                <Image
                  src={src}
                  alt={`${dict.portfolio.title} ${i + 1}`}
                  width={1200}
                  height={1200}
                  className="gallery-item__img"
                />
                <span className="gallery-item__shine" aria-hidden="true" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {activeIndex !== null ? (
        <div
          className="lightbox is-open"
          role="dialog"
          aria-modal="true"
          aria-label={dict.a11y.openGallery}
          onClick={closeLightbox}
        >
          <button
            className="lightbox__close"
            type="button"
            aria-label={dict.a11y.close}
            onClick={closeLightbox}
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portfolioImages[activeIndex]}
            alt={`${dict.portfolio.title} ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}

"use client";

import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { Stars } from "./Stars";
import { useLang } from "@/lib/language";
import { RATING, links, reviews } from "@/lib/content";

export function Reviews() {
  const { lang, dict } = useLang();
  const ratingDisplay =
    lang === "en" ? RATING.value.toFixed(1) : RATING.value.toFixed(1).replace(".", ",");

  return (
    <section className="section section--alt" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">{dict.reviews.eyebrow}</span>
            <h2 id="reviews-title" className="section-title">
              {dict.reviews.title}
            </h2>
            <p className="section-sub">{dict.reviews.sub}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="reviews-score">
            <div className="reviews-score__num num">{ratingDisplay}</div>
            <div className="reviews-score__meta">
              <Stars value={5} />
              <div className="reviews-score__copy">
                <span>{dict.reviews.ratingLabel}</span>
                <span className="reviews-score__sep">·</span>
                <span className="num">{RATING.count}</span> {dict.reviews.countLabel}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name + review.service.pl}>
                <div className="review-card__top">
                  <div>
                    <h3 className="review-card__name">{review.name}</h3>
                    <span className="review-card__verified">
                      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2z"
                        />
                      </svg>
                      {dict.reviews.verified}
                    </span>
                  </div>
                  <Stars value={review.stars} />
                </div>
                <p className="review-card__text">“{review.text[lang]}”</p>
                <p className="review-card__service">{review.service[lang]}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="reviews-more">
            <Button href={links.booksy} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm">
              {dict.reviews.viewAll}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

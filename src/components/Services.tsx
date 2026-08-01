"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/language";
import { links, services, type ServiceTab } from "@/lib/content";

const tabs: ServiceTab[] = ["barber", "women", "color", "care"];

function formatPrice(
  price: string,
  free: boolean | undefined,
  fromLabel: string,
  freeLabel: string,
) {
  if (free) return freeLabel;
  if (price.includes("+")) {
    return `${fromLabel} ${price.replace("+", "").trim()}`;
  }
  return price;
}

export function Services() {
  const { lang, dict } = useLang();
  const [tab, setTab] = useState<ServiceTab>("barber");
  const items = services[tab];

  return (
    <section className="section section--alt" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">{dict.services.eyebrow}</span>
            <h2 id="services-title" className="section-title">
              {dict.services.title}
            </h2>
            <p className="section-sub">{dict.services.sub}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="services-tabs" role="tablist" aria-label={dict.a11y.serviceCategories}>
            {tabs.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                className={`services-tab ${tab === key ? "is-active" : ""}`}
                onClick={() => setTab(key)}
              >
                {dict.services.tabs[key]}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="services-list" role="list">
            {items.map((item) => {
              const name = item.name[lang];
              const desc = "desc" in item && item.desc ? item.desc[lang] : undefined;
              const free = "free" in item ? Boolean(item.free) : false;
              return (
                <article className="service-row" key={name + item.price} role="listitem">
                  <div className="service-row__info">
                    <h3 className="service-row__name">{name}</h3>
                    {desc ? <p className="service-row__desc">{desc}</p> : null}
                    <span className="service-row__time">
                      <span className="time-pip" aria-hidden="true" />
                      {item.duration}
                    </span>
                  </div>
                  <div className="service-row__meta">
                    <span className="service-row__price num">
                      {formatPrice(item.price, free, dict.services.from, dict.services.free)}
                    </span>
                    <Button
                      href={links.booksy}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                    >
                      {dict.services.book}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="services-note">{dict.services.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

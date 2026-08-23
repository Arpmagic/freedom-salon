"use client";

import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { IconBooksy, IconFacebook, IconInstagram } from "./icons";
import { useLang } from "@/lib/language";
import { hours, links } from "@/lib/content";

const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;

export function Contact() {
  const { dict } = useLang();

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">{dict.contact.eyebrow}</span>
            <h2 id="contact-title" className="section-title">
              {dict.contact.title}
            </h2>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-stack">
              <div className="contact-card">
                <span className="contact-label">{dict.contact.addressLabel}</span>
                <p className="contact-address">{dict.contact.address}</p>
                <p className="contact-city">{dict.contact.city}</p>

                <div className="contact-direct">
                  <div>
                    <span className="contact-label">{dict.contact.phoneLabel}</span>
                    <a className="contact-link num" href={`tel:${links.phone}`}>
                      {links.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <span className="contact-label">{dict.contact.emailLabel}</span>
                    <a className="contact-link contact-link--email" href={`mailto:${links.email}`}>
                      {links.email}
                    </a>
                  </div>
                </div>

                <Button
                  href={links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="sm"
                >
                  {dict.contact.mapLabel}
                </Button>
              </div>

              <div className="contact-card">
                <span className="contact-label">{dict.contact.hoursLabel}</span>
                <ul className="hours-list">
                  {dayKeys.map((day) => {
                    const value = hours[day];
                    const closed = value == null;
                    return (
                      <li key={day} className={closed ? "is-closed" : ""}>
                        <span>{dict.contact.days[day]}</span>
                        <span className="num">{closed ? dict.contact.closed : value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="contact-card">
                <span className="contact-label">{dict.contact.socialLabel}</span>
                <div className="social-row">
                  <a
                    className="social-link"
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconInstagram className="social-link__icon" />
                    Instagram
                  </a>
                  <a
                    className="social-link"
                    href={links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconFacebook className="social-link__icon" />
                    Facebook
                  </a>
                  <a
                    className="social-link"
                    href={links.booksy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBooksy className="social-link__icon" />
                    Booksy
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="map-embed">
              <iframe
                title="FREEDOM Barber & Fryzjer — map"
                width={600}
                height={240}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=osiedle%20Stare%20%C5%BBegrze%20142%2C%2061-249%20Pozna%C5%84&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

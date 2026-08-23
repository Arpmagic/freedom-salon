"use client";

import { PageShell } from "./PageShell";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Reviews } from "./Reviews";
import { CtaBand } from "./Cta";
import { Contact } from "./Contact";

export function Site() {
  return (
    <PageShell>
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <CtaBand />
        <Contact />
      </main>
    </PageShell>
  );
}

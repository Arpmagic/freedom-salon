"use client";

import { LanguageProvider } from "@/lib/language";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Reviews } from "./Reviews";
import { CtaBand } from "./Cta";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Site() {
  return (
    <LanguageProvider>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/language";
import { LegalOverlayProvider } from "@/lib/legalOverlay";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileDock } from "./MobileDock";
import { LegalOverlay } from "./LegalOverlay";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <LegalOverlayProvider>
        <Header />
        {children}
        <Footer />
        <MobileDock />
        <LegalOverlay />
      </LegalOverlayProvider>
    </LanguageProvider>
  );
}

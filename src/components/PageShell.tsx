"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/language";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileDock } from "./MobileDock";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
      <MobileDock />
    </LanguageProvider>
  );
}

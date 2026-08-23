"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { LegalKind } from "./legal";

type LegalOverlayContextValue = {
  kind: LegalKind | null;
  openLegal: (kind: LegalKind) => void;
  closeLegal: () => void;
};

const LegalOverlayContext = createContext<LegalOverlayContextValue | null>(null);

export function LegalOverlayProvider({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<LegalKind | null>(null);

  const openLegal = useCallback((next: LegalKind) => {
    setKind(next);
  }, []);

  const closeLegal = useCallback(() => {
    setKind(null);
  }, []);

  useEffect(() => {
    if (!kind) return;
    document.body.classList.add("legal-overlay-open");
    const html = document.documentElement;
    const previousHtml = html.style.overflow;
    const previousBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.classList.remove("legal-overlay-open");
      html.style.overflow = previousHtml;
      document.body.style.overflow = previousBody;
    };
  }, [kind]);

  const value = useMemo(
    () => ({ kind, openLegal, closeLegal }),
    [kind, openLegal, closeLegal],
  );

  return <LegalOverlayContext.Provider value={value}>{children}</LegalOverlayContext.Provider>;
}

export function useLegalOverlay() {
  const ctx = useContext(LegalOverlayContext);
  if (!ctx) throw new Error("useLegalOverlay must be used within LegalOverlayProvider");
  return ctx;
}

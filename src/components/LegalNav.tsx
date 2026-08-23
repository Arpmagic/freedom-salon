"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { useLang } from "@/lib/language";
import { closeLegalPage } from "@/lib/legalReturn";
import { useLegalOverlay } from "@/lib/legalOverlay";

export function LegalNav({ children }: { children: ReactNode }) {
  const { dict } = useLang();
  const router = useRouter();
  const { kind, closeLegal } = useLegalOverlay();

  const onClose = useCallback(() => {
    if (kind) {
      closeLegal();
      return;
    }
    closeLegalPage(router);
  }, [kind, closeLegal, router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (document.body.classList.contains("nav-open")) return;
      e.preventDefault();
      onClose();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  return (
    <>
      <div className="legal-toolbar">
        <button type="button" className="legal-close" onClick={onClose} aria-label={dict.a11y.close}>
          <span className="legal-close__icon" aria-hidden="true">
            ×
          </span>
          {dict.a11y.close}
        </button>
      </div>
      {children}
      <div className="legal-doc__end">
        <Button variant="gold" onClick={onClose}>
          {dict.legal.backHome}
        </Button>
      </div>
    </>
  );
}

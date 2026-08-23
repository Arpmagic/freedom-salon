"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { useLang } from "@/lib/language";
import { closeLegalPage } from "@/lib/legalReturn";

export function LegalNav({ children }: { children: ReactNode }) {
  const { dict } = useLang();
  const router = useRouter();

  const closeLegal = useCallback(() => {
    closeLegalPage(router);
  }, [router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (document.body.classList.contains("nav-open")) return;
      e.preventDefault();
      closeLegal();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [closeLegal]);

  return (
    <>
      <div className="legal-toolbar">
        <button type="button" className="legal-close" onClick={closeLegal} aria-label={dict.a11y.close}>
          <span className="legal-close__icon" aria-hidden="true">
            ×
          </span>
          {dict.a11y.close}
        </button>
      </div>
      {children}
      <div className="legal-doc__end">
        <Button variant="gold" onClick={closeLegal}>
          {dict.legal.backHome}
        </Button>
      </div>
    </>
  );
}

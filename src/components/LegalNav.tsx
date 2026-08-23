"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { useLang } from "@/lib/language";

export function LegalNav({ children }: { children: ReactNode }) {
  const { dict } = useLang();
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (document.body.classList.contains("nav-open")) return;
      router.push("/");
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [router]);

  return (
    <>
      <div className="legal-toolbar">
        <Link className="legal-close" href="/" aria-label={dict.a11y.close}>
          <span className="legal-close__icon" aria-hidden="true">
            ×
          </span>
          {dict.a11y.close}
        </Link>
      </div>
      {children}
      <div className="legal-doc__end">
        <Button href="/" variant="gold">
          {dict.legal.backHome}
        </Button>
      </div>
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { LegalDoc } from "./LegalDoc";
import { useLegalOverlay } from "@/lib/legalOverlay";

export function LegalOverlay() {
  const { kind } = useLegalOverlay();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [kind]);

  if (!kind) return null;

  return (
    <div ref={ref} className="legal-overlay" role="dialog" aria-modal="true">
      <article className="container legal-doc">
        <LegalDoc kind={kind} />
      </article>
    </div>
  );
}

"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { useLang } from "@/lib/language";

function NotFoundBody() {
  const { dict } = useLang();
  return (
    <main
      id="main"
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "2.5rem 0",
      }}
    >
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="section-title" style={{ margin: "0 auto 1rem", maxWidth: "20ch" }}>
          {dict.legal.notFoundTitle}
        </h1>
        <p className="section-sub" style={{ margin: "0 auto 2rem" }}>
          {dict.legal.notFoundBody}
        </p>
        <Link href="/" className="btn btn--gold">
          <span className="btn__label">{dict.legal.backHome}</span>
        </Link>
      </div>
    </main>
  );
}

export default function NotFound() {
  return (
    <PageShell>
      <NotFoundBody />
    </PageShell>
  );
}

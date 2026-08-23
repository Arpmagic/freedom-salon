import type { ReactNode } from "react";
import { LegalNav } from "./LegalNav";
import { PageShell } from "./PageShell";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <main id="main" className="legal-page">
        <article className="container legal-doc">
          <LegalNav>
            <h1>{title}</h1>
            {children}
          </LegalNav>
        </article>
      </main>
    </PageShell>
  );
}

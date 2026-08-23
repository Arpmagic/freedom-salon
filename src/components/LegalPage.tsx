import type { ReactNode } from "react";
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
          <h1>{title}</h1>
          {children}
        </article>
      </main>
    </PageShell>
  );
}

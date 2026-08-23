import { LegalDoc } from "./LegalDoc";
import { PageShell } from "./PageShell";
import type { LegalKind } from "@/lib/legal";

export function LegalPage({ kind }: { kind: LegalKind }) {
  return (
    <PageShell>
      <main id="main" className="legal-page">
        <article className="container legal-doc">
          <LegalDoc kind={kind} />
        </article>
      </main>
    </PageShell>
  );
}

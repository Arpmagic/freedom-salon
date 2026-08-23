import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Regulamin salonu",
  description:
    "Regulamin świadczenia usług w salonie FREEDOM Barber & Fryzjer w Poznaniu. Rezerwacje, spóźnienia, płatności i reklamacje.",
  alternates: {
    canonical: "/regulamin",
  },
};

export default function RegulationsPage() {
  return <LegalPage kind="regulations" />;
}

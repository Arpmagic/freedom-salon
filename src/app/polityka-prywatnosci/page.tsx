import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Polityka prywatności i cookies",
  description:
    "Polityka prywatności i plików cookies salonu FREEDOM Barber & Fryzjer w Poznaniu. Administrator: Freedom Anna Kuzminets.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPage kind="privacy" />;
}

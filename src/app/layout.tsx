import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://freedom-barber.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FREEDOM Barber & Fryzjer | Poznań",
    template: "%s | FREEDOM Barber & Fryzjer",
  },
  description:
    "Premium barber i fryzjer w Poznaniu. Fade, koloryzacja Airtouch, total blond, strzyżenia damskie i męskie. Umów wizytę online.",
  keywords: [
    "barber Poznań",
    "fryzjer Poznań",
    "fade Poznań",
    "koloryzacja Airtouch",
    "total blond Poznań",
    "strzyżenie damskie Poznań",
    "strzyżenie męskie Poznań",
  ],
  authors: [{ name: "FREEDOM Barber & Fryzjer" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FREEDOM Barber & Fryzjer | Poznań",
    description:
      "Premium barber i fryzjer w Poznaniu. Fade, koloryzacja Airtouch, total blond, strzyżenia damskie i męskie. Umów wizytę online.",
    url: siteUrl,
    siteName: "FREEDOM Barber & Fryzjer",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/assets/about/anna-hero.jpg",
        width: 1080,
        height: 720,
        alt: "FREEDOM Barber & Fryzjer — Anna Freedom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FREEDOM Barber & Fryzjer | Poznań",
    description:
      "Premium barber i fryzjer w Poznaniu. Fade, koloryzacja Airtouch, total blond, strzyżenia damskie i męskie.",
    images: ["/assets/about/anna-hero.jpg"],
  },
  icons: {
    icon: "/assets/logo/favicon.jpg",
    shortcut: "/assets/logo/favicon.jpg",
    apple: "/assets/logo/favicon.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "FREEDOM Barber & Fryzjer",
  image: `${siteUrl}/assets/logo/logo.jpg`,
  url: siteUrl,
  telephone: "+48571488281",
  email: "anna.kira85@ukr.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "osiedle Stare Żegrze 142",
    addressLocality: "Poznań",
    postalCode: "61-249",
    addressCountry: "PL",
  },
  sameAs: [
    "https://www.instagram.com/freedom__anna/",
    "https://www.facebook.com/people/Anna-Freedom/100011637162515/",
    "https://booksy.com/pl-pl/266319_freedom-barber-fryzjer_fryzjer_15608_poznan",
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "11:00", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "11:00", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "20:15" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "218",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorantGaramond.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

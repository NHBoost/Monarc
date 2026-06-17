import type { Metadata } from "next";
import { Manrope, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL = "https://monarc.agency";
const TITLE = "Monarc Agency — Agence digitale premium · Stratégie & croissance";
const DESCRIPTION =
  "Monarc Agency est l'agence digitale premium qui transforme votre visibilité en croissance : stratégie, acquisition, conversion et création de contenu pour les marques ambitieuses.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Monarc Agency",
  },
  description: DESCRIPTION,
  keywords: [
    "Monarc Agency",
    "agence digitale",
    "agence marketing digital",
    "stratégie digitale",
    "acquisition client",
    "Google Ads",
    "Meta Ads",
    "création de site web",
    "Paris",
  ],
  authors: [{ name: "Monarc Agency" }],
  creator: "Monarc Agency",
  publisher: "Monarc Agency",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Monarc Agency",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      data-anim="on"
      className={`${playfair.variable} ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

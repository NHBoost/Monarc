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

export const metadata: Metadata = {
  title: "MONARC — Premium Digital Agency",
  description:
    "MONARC Agency — agence digitale premium dédiée à la stratégie, la visibilité, l'acquisition et la conversion pour les entreprises ambitieuses.",
  metadataBase: new URL("https://monarc.agency"),
  openGraph: {
    title: "MONARC — Premium Digital Agency",
    description:
      "Agence digitale premium dédiée à la stratégie, la visibilité, l'acquisition et la conversion.",
    type: "website",
    locale: "fr_FR",
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

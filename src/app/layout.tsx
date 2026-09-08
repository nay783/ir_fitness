import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irfitnessgym.co.mz"),
  title: "IR Fitness Gym | Especialistas em Alta Performance | Maputo",
  description:
    "Ginásio de alta performance em Maputo, Moçambique. Treino de força, artes marciais com a IR Karate Academy (KSI) e suplementação desportiva IR Fitness Shop.",
  keywords: [
    "IR Fitness Gym",
    "Ginásio Maputo",
    "Academia Karate Maputo",
    "KSI Moçambique",
    "IR Fitness Shop",
    "Suplementos Maputo",
    "Treino de Alta Performance",
    "Music and Gym Experience",
  ],
  authors: [{ name: "IR Fitness Gym" }],
  openGraph: {
    title: "IR Fitness Gym | Onde Cada Treino É Uma Vitória",
    description:
      "Treino de alto rendimento, artes marciais e suplementação desportiva de referência em Maputo.",
    url: "https://irfitnessgym.co.mz",
    siteName: "IR Fitness Gym",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "IR Fitness Gym Maputo Logo",
      },
    ],
    locale: "pt_MZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IR Fitness Gym | Maputo",
    description:
      "Treino de alto rendimento, artes marciais e suplementação desportiva de referência em Maputo.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${bebas.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-background text-text-primary overflow-x-hidden selection:bg-brand-red selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

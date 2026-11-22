import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Babacan Nexus Web",
    default: "Babacan Nexus Web - Recep Babacık | Döşemealtı / Antalya Web Tasarım, SEO ve E-Ticaret Çözümleri",
  },
  description:
    "Döşemealtı / Antalya merkezinde modern, mobil uyumlu ve Google SEO dostu web sitesi tasarımı. Recep Babacık liderliğinde Babacan Nexus Web olarak kurumsal web sitesi, e-ticaret, teknik SEO, Google Harita kaydı ve yapay zeka çözümleri sunuyoruz. İletişim: 0541 448 30 69 | recep_baback@hotmail.com",
  keywords: [
    "Babacan Nexus Web",
    "Recep Babacık",
    "web tasarım Döşemealtı",
    "Antalya web sitesi",
    "kurumsal web tasarım",
    "e-ticaret sitesi",
    "teknik SEO hizmeti",
    "Google Harita kaydı",
    "yapay zeka çözümleri",
    "Döşemealtı web tasarım",
    "Antalya SEO",
  ],
  authors: [{ name: "Recep Babacık" }],
  creator: "Babacan Nexus Web",
  publisher: "Babacan Nexus Web",
  robots: "index, follow",
  openGraph: {
    title: "Babacan Nexus Web - Recep Babacık | Döşemealtı / Antalya Web Tasarım ve Çözümler",
    description:
      "Döşemealtı / Antalya merkezinde modern, mobil uyumlu ve Google SEO dostu web sitesi tasarımı. Kurumsal web sitesi, e-ticaret, SEO ve yapay zeka çözümleri.",
    url: "https://babacanwebtasarim.com",
    siteName: "Babacan Nexus Web",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Babacan Nexus Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babacan Nexus Web - Recep Babacık | Döşemealtı / Antalya Web Tasarım ve Çözümler",
    description:
      "Döşemealtı / Antalya merkezinde modern, mobil uyumlu ve Google SEO dostu web sitesi tasarımı. Kurumsal web sitesi, e-ticaret, SEO ve yapay zeka çözümleri.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://babacanwebtasarim.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

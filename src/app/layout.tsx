import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pooja Tours and Travels | Reliable Cab Service from Pune & Mumbai",
  description:
    "Pooja Tours and Travels – trusted cab service from Pune & Mumbai. Airport transfers, outstation trips, local rides. Sedan, Ertiga, Innova, Innova Crysta, Tempo. Book 24/7.",
  keywords:
    "cab service Pune Mumbai, taxi Pune, Pooja Tours, airport transfer, outstation cab, SUV cab, Ertiga, Innova, hatchback, tempo traveller, intercity cab service",
  authors: [{ name: "Pooja Tours and Travels" }],
  creator: "Pooja Tours and Travels",
  publisher: "Pooja Tours and Travels",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://www.pujatoursandtravels.com"),
  alternates: {
    canonical: "https://www.pujatoursandtravels.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pujatoursandtravels.com",
    siteName: "Pooja Tours and Travels",
    title: "Pooja Tours and Travels | Reliable Cab Service from Pune & Mumbai",
    description:
      "Book reliable cab service from Pune & Mumbai. Airport transfers, outstation trips, local rides. Sedan, Ertiga, Innova, Innova Crysta, Tempo. 24/7 service.",
    images: [
      {
        url: "https://www.pujatoursandtravels.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pooja Tours and Travels - Quality Cab Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja Tours and Travels | Reliable Cab Service",
    description:
      "Book reliable cab service from Pune & Mumbai. 24/7 available. Airport transfers, outstation trips, local rides.",
    images: ["https://www.pujatoursandtravels.com/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pooja Tours and Travels",
              image: "https://www.pujatoursandtravels.com/logo.png",
              description:
                "Reliable cab service from Pune & Mumbai. Airport transfers, outstation trips, local rides. 24/7 available.",
              url: "https://www.pujatoursandtravels.com",
              telephone: "+919579111356",
              email: "Poojatoursandtravels3@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                postalCode: "411001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/110198160835145",
              ],
              areaServed: {
                "@type": "City",
                name: "Pune",
              },
              priceRange: "₹10 - ₹24 per km",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "450",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

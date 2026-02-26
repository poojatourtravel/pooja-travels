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
    "cab service Pune Mumbai, taxi Pune, Pooja Tours, airport transfer, outstation cab, SUV cab, Ertiga, Innova",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

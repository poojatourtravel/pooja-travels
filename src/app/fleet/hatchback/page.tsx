import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Hatchback Cab @ ₹10/km | Celerio, WagonR | Pooja Tours",
  description:
    "Book an affordable hatchback cab at ₹10/km in Pune & Mumbai. Celerio, WagonR - 3 seater. Perfect for quick city transfers, solo travelers. 24/7 available, professional driver.",
  keywords:
    "hatchback cab, economy taxi, city cab, Celerio, WagonR, affordable cab, Pune taxi, cab booking",
  openGraph: {
    title: "Hatchback Cab @ ₹10/km | Pooja Tours and Travels",
    description:
      "Book affordable hatchback taxi at ₹10/km. Celerio, WagonR from Pune & Mumbai. 3 seater, ideal for city transfers.",
    url: "https://poojatoursandtravels.com/fleet/hatchback",
    type: "website",
  },
  alternates: {
    canonical: "https://poojatoursandtravels.com/fleet/hatchback",
  },
};

export default async function HatchbackPage() {
  const { site } = await getContent();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Hatchback Cab Service - Celerio, WagonR",
            description:
              "Book an affordable hatchback cab at ₹10/km. Perfect for city transfers with 3 seats. Celerio, WagonR available.",
            image: "https://poojatoursandtravels.com/images/hatchback.png",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "10",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.6",
              reviewCount: "280",
            },
          }),
        }}
      />
      <Navbar site={site} />
      <FleetDetailPage
        name="Hatchback"
        tagline="Affordable & Efficient City Rides"
        emoji="🚙"
        priceFrom="10"
        seats="3 Passengers"
        bags="3 Bags"
        phoneRaw={site.phoneRaw}
        whatsappText={site.whatsappText}
        description="Our hatchback fleet — including Celerio and WagonR — is perfect for solo travellers and small groups needing quick, affordable city transfers. Compact yet comfortable, these cars navigate city streets with ease."
        features={[
          { label: "Celerio / WagonR" },
          { label: "3 Seats + 3 Bags" },
          { label: "24/7 Available" },
          { label: "GPS-Enabled" },
          { label: "Air-Conditioned" },
          { label: "Professional Driver" },
          { label: "Clean & Well-Maintained" },
        ]}
      />
      <Footer site={site} footer={{ description: "", copyright: "" }} />
      <FloatingButtons site={site} />
    </>
  );
}

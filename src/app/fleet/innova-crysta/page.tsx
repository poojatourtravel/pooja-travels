import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Toyota Innova Crysta @ ₹18/km | Luxury 7-Seater Cab | Pooja Tours",
  description:
    "Book a Toyota Innova Crysta at ₹18/km from Pune & Mumbai. Premium luxury 7-seater for business executives, airport transfers, family outstation. Professional driver, luxury interiors, 24/7.",
  keywords:
    "Innova Crysta, luxury cab, 7 seater, premium taxi, executive cab, business travel, luxury outstation cab",
  openGraph: {
    title: "Toyota Innova Crysta @ ₹18/km | Pooja Tours and Travels",
    description:
      "Book luxury Toyota Innova Crysta at ₹18/km. 7-seater premium cab for executives and luxury outstation from Pune & Mumbai.",
    url: "https://poojatoursandtravels.com/fleet/innova-crysta",
    type: "website",
  },
  alternates: {
    canonical: "https://poojatoursandtravels.com/fleet/innova-crysta",
  },
};

export default async function InnovaCrystaPage() {
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
            name: "Toyota Innova Crysta Cab Service - Luxury 7 Seater",
            description:
              "Book a Toyota Innova Crysta at ₹18/km. Premium luxury 7-seater for executives, airport transfers, and family outstation from Pune & Mumbai.",
            image: "https://poojatoursandtravels.com/images/innova-crysta.png",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "18",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "340",
            },
          }),
        }}
      />
      <Navbar site={site} />
      <FleetDetailPage
        name="Innova Crysta"
        tagline="Luxury 7-Seater — Travel in Total Comfort"
        emoji="🚐"
        priceFrom="18"
        seats="7 Passengers"
        bags="4 Bags"
        phoneRaw={site.phoneRaw}
        whatsappText={site.whatsappText}
        description="The Toyota Innova Crysta sets the benchmark for premium cab travel. With its plush interiors, powerful engine, and first-class ride quality across highways and city roads, the Crysta is the preferred choice for executives, airport transfers, and luxury outstation tours from Pune and Mumbai."
        features={[
          { label: "Toyota Innova Crysta" },
          { label: "7 Seats + 4 Bags" },
          { label: "24/7 Available" },
          { label: "GPS-Enabled" },
          { label: "Luxury Air-Conditioned Interiors" },
          { label: "Ideal for Business & Premium Travel" },
          { label: "Experienced Professional Driver" },
        ]}
      />
      <Footer site={site} footer={{ description: "", copyright: "" }} />
      <FloatingButtons site={site} />
    </>
  );
}

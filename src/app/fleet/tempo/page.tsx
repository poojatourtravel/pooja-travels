import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Tempo Traveller @ ₹24/km | 13-Seater Group Bus | Pooja Tours",
  description:
    "Book a 13-seater Tempo Traveller at ₹24/km from Pune & Mumbai. Perfect for group tours, pilgrimages, corporate events, weddings. AC, professional driver, spacious luggage, 24/7 available.",
  keywords:
    "Tempo Traveller, 13 seater, group tour, pilgrimage cab, corporate event travel, wedding transport, group travel, Pune tours",
  openGraph: {
    title: "Tempo Traveller @ ₹24/km | Pooja Tours and Travels",
    description:
      "Book a 13-seater Tempo Traveller at ₹24/km for group tours, pilgrimages, and corporate events from Pune & Mumbai.",
    url: "https://poojatoursandtravels.com/fleet/tempo",
    type: "website",
  },
  alternates: {
    canonical: "https://poojatoursandtravels.com/fleet/tempo",
  },
};

export default async function TempoPage() {
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
            name: "Tempo Traveller Group Coach - 13 Seater",
            description:
              "Book a 13-seater Tempo Traveller at ₹24/km. Perfect for group tours, pilgrimages, corporate events, and weddings from Pune & Mumbai.",
            image: "https://poojatoursandtravels.com/images/tempo.png",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "24",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "220",
            },
          }),
        }}
      />
      <Navbar site={site} />
      <FleetDetailPage
        name="Tempo Traveller"
        tagline="The Ultimate Group Travel Solution"
        emoji="🚌"
        priceFrom="24"
        seats="13 Passengers"
        bags="4 Bags"
        phoneRaw={site.phoneRaw}
        whatsappText={site.whatsappText}
        description="Planning a group trip, corporate outing, pilgrimage, or wedding procession? Our Tempo Traveller is equipped to carry large groups in comfort. Spacious seating, ample luggage space, and an experienced driver — everything you need for an unforgettable group journey."
        features={[
          { label: "13 Seats + 4 Large Bags" },
          { label: "24/7 Available" },
          { label: "GPS-Enabled" },
          { label: "Air-Conditioned" },
          { label: "Perfect for Group Tours & Pilgrimages" },
          { label: "Corporate & Wedding Events" },
          { label: "Experienced Professional Driver" },
        ]}
      />
      <Footer site={site} footer={{ description: "", copyright: "" }} />
      <FloatingButtons site={site} />
    </>
  );
}

import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Maruti Ertiga @ ₹13/km | 6-Seater SUV | Pooja Tours",
  description:
    "Book a Maruti Ertiga at ₹13/km from Pune & Mumbai. 6-seater SUV, perfect for families and group outstation trips. Professional driver, AC, GPS enabled, 24/7 available.",
  keywords:
    "Ertiga cab, 6 seater cab, family SUV, outstation cab, Maruti Ertiga, group cab, Pune to Mumbai cab",
  openGraph: {
    title: "Maruti Ertiga @ ₹13/km | Pooja Tours and Travels",
    description:
      "Book a 6-seater Maruti Ertiga at ₹13/km. Perfect for families and group outstation trips from Pune & Mumbai.",
    url: "https://poojatoursandtravels.com/fleet/ertiga",
    type: "website",
  },
  alternates: {
    canonical: "https://poojatoursandtravels.com/fleet/ertiga",
  },
};

export default async function ErtigaPage() {
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
            name: "Maruti Ertiga Cab Service - 6 Seater SUV",
            description:
              "Book a Maruti Ertiga at ₹13/km. 6-seater SUV perfect for families and group outstation trips from Pune & Mumbai.",
            image: "https://poojatoursandtravels.com/images/ertiga.png",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "13",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "420",
            },
          }),
        }}
      />
      <Navbar site={site} />
      <FleetDetailPage
        name="Ertiga"
        tagline="Spacious Family SUV for Comfortable Journeys"
        emoji="🚙"
        priceFrom="13"
        seats="6 Passengers"
        bags="3 Bags"
        phoneRaw={site.phoneRaw}
        whatsappText={site.whatsappText}
        description="The Maruti Ertiga is the perfect choice for families and small groups. With 3 rows of seating, AC throughout, and smooth suspension for highway travel, the Ertiga is our most popular vehicle for outstation family trips from Pune and Mumbai."
        features={[
          { label: "Maruti Ertiga" },
          { label: "6 Seats + 3 Bags" },
          { label: "24/7 Available" },
          { label: "GPS-Enabled" },
          { label: "Air-Conditioned" },
          { label: "Ideal for Family & Group Outstation" },
          { label: "Experienced Professional Driver" },
        ]}
      />
      <Footer site={site} footer={{ description: "", copyright: "" }} />
      <FloatingButtons site={site} />
    </>
  );
}

import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Toyota Innova @ ₹16/km | 7-Seater Premium Cab | Pooja Tours",
  description:
    "Book a Toyota Innova at ₹16/km from Pune & Mumbai. 7-seater premium cab for families, business travelers, outstation trips. Professional driver, AC, GPS enabled, 24/7 available.",
  keywords:
    "Innova cab, 7 seater cab, premium cab, business taxi, Toyota Innova, outstation cab, family travel",
  openGraph: {
    title: "Toyota Innova @ ₹16/km | Pooja Tours and Travels",
    description:
      "Book a 7-seater Toyota Innova at ₹16/km. Premium cab for business and family outstation trips from Pune & Mumbai.",
    url: "https://poojatoursandtravels.com/fleet/innova",
    type: "website",
  },
  alternates: {
    canonical: "https://poojatoursandtravels.com/fleet/innova",
  },
};

export default async function InnovaPage() {
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
            name: "Toyota Innova Cab Service - 7 Seater Premium Cab",
            description:
              "Book a Toyota Innova at ₹16/km. 7-seater premium cab for families, business travelers, and outstation trips from Pune & Mumbai.",
            image: "https://poojatoursandtravels.com/images/innova.png",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "16",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "380",
            },
          }),
        }}
      />
      <Navbar site={site} />
      <FleetDetailPage
        name="Innova"
        tagline="Premium 7-Seater for Every Journey"
        emoji="🚐"
        priceFrom="16"
        seats="7 Passengers"
        bags="4 Bags"
        phoneRaw={site.phoneRaw}
        whatsappText={site.whatsappText}
        description="The Toyota Innova is a premium 7-seater offering superior comfort for business travelers, corporate outings, and family holidays. Trusted for its reliability and spacious cabin, the Innova ensures every journey — whether Pune to Mumbai or a multi-day tour — is a pleasure."
        features={[
          { label: "Toyota Innova" },
          { label: "7 Seats + 4 Bags" },
          { label: "24/7 Available" },
          { label: "GPS-Enabled" },
          { label: "Air-Conditioned" },
          { label: "Premium Corporate & Outstation Travel" },
          { label: "Experienced Professional Driver" },
        ]}
      />
      <Footer site={site} footer={{ description: "", copyright: "" }} />
      <FloatingButtons site={site} />
    </>
  );
}

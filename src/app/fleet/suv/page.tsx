import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "SUV Cabs @ ₹13-₹18/km | Ertiga, Innova, Innova Crysta | Pooja Tours",
  description:
    "Book premium SUVs from ₹13/km. Maruti Ertiga, Toyota Innova, Toyota Innova Crysta. 5-7 seater, ideal for families and group outstation from Pune & Mumbai. 24/7 available.",
  keywords:
    "SUV cab, premium cab, Ertiga, Innova, Innova Crysta, family cab, group travel, outstation cab, Pune cab service",
  openGraph: {
    title: "Premium SUV Cabs @ ₹13-₹18/km | Pooja Tours and Travels",
    description:
      "Book SUVs - Ertiga, Innova, Innova Crysta from ₹13/km. Perfect for families and group outstation from Pune & Mumbai.",
    url: "https://poojatoursandtravels.com/fleet/suv",
    type: "website",
  },
  alternates: {
    canonical: "https://poojatoursandtravels.com/fleet/suv",
  },
};

export default async function SUVPage() {
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
            name: "SUV Cab Service - Ertiga, Innova, Innova Crysta",
            description:
              "Book premium SUVs from ₹13/km. Choose from Maruti Ertiga, Toyota Innova, or Toyota Innova Crysta for family and group outstation from Pune & Mumbai.",
            image: "https://poojatoursandtravels.com/images/suv.png",
            offers: [
              {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "13",
                description: "Maruti Ertiga",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "16",
                description: "Toyota Innova",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "18",
                description: "Toyota Innova Crysta",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "400",
            },
          }),
        }}
      />
      <Navbar site={site} />
      <FleetDetailPage
        name="SUV"
        tagline="Spacious, Powerful & Premium"
        emoji="🚐"
        priceFrom="13"
        seats="5–7 Passengers"
        bags="4 Bags"
        phoneRaw={site.phoneRaw}
        whatsappText={site.whatsappText}
        description="For families, corporate groups, and those who refuse to compromise on comfort, our SUV fleet is the perfect choice. Choose from Ertiga, Innova, or the premium Innova Crysta for your next journey."
        options={[
          { name: "Ertiga", price: "13" },
          { name: "Innova", price: "16" },
          { name: "Innova Crysta", price: "18" },
        ]}
        features={[
          { label: "Ertiga / Innova / Innova Crysta" },
          { label: "5–7 Seats + Large Boot" },
          { label: "24/7 Available" },
          { label: "GPS-Enabled" },
          { label: "Premium Air-Conditioned Cabin" },
          { label: "Ideal for Family & Group Travel" },
          { label: "Experienced Professional Driver" },
        ]}
      />
      <Footer site={site} footer={{ description: "", copyright: "" }} />
      <FloatingButtons site={site} />
    </>
  );
}

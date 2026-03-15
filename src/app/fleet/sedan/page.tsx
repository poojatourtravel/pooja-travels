import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Sedan Cab @ ₹11/km | Toyota Etios, Maruti Dzire, Hyundai Xcent | Pooja Tours",
  description:
    "Book a sedan cab at ₹11/km from Pune & Mumbai. Toyota Etios, Maruti Dzire, Hyundai Xcent. Perfect for airport transfers, outstation trips. 4 seats, professional driver, 24/7 available.",
  keywords:
    "sedan cab, cab booking, airport transfer, outstation cab, Etios, Dzire, Xcent, Pune to Mumbai taxi, cab service",
  openGraph: {
    title: "Sedan Cab @ ₹11/km | Pooja Tours and Travels",
    description:
      "Book a comfortable sedan taxi at ₹11/km. Toyota Etios, Maruti Dzire, Hyundai Xcent from Pune & Mumbai. 24/7 available.",
    url: "https://poojatoursandtravels.com/fleet/sedan",
    type: "website",
  },
  alternates: {
    canonical: "https://poojatoursandtravels.com/fleet/sedan",
  },
};

export default async function SedanPage() {
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
            name: "Sedan Cab Service - Etios, Dzire, Xcent",
            description:
              "Book a comfortable sedan cab at ₹11/km. Toyota Etios, Maruti Dzire, Hyundai Xcent. Perfect for airport transfers and outstation trips.",
            image: "https://poojatoursandtravels.com/images/etios-dzire-xcent.png",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "11",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "350",
            },
          }),
        }}
      />
      <Navbar site={site} />
      <FleetDetailPage
        name="Sedan"
        tagline="Comfortable & Reliable for Every Route"
        emoji="🚗"
        priceFrom="11"
        seats="4 Passengers"
        bags="3 Bags"
        phoneRaw={site.phoneRaw}
        whatsappText={site.whatsappText}
        description="The Etios / Dzire / Xcent sedan offers a perfect balance of comfort and affordability. Spacious interiors, smooth ride quality, and a professional driver make this the go-to choice for airport transfers, outstation trips, and daily commutes."
        features={[
          { label: "Toyota Etios / Dzire / Xcent" },
          { label: "4 Seats + 3 Bags" },
          { label: "24/7 Available" },
          { label: "GPS-Enabled" },
          { label: "Air-Conditioned" },
          { label: "Ideal for Airport & Outstation" },
          { label: "Experienced Professional Driver" },
        ]}
      />
      <Footer site={site} footer={{ description: "", copyright: "" }} />
      <FloatingButtons site={site} />
    </>
  );
}

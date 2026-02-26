import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Sedan Cab | Pooja Tours and Travels",
  description:
    "Book a comfortable sedan cab at ₹11/km. Toyota Etios / Dzire / Xcent — perfect for outstation and airport trips from Pune & Mumbai.",
};

export default async function SedanPage() {
  const { site } = await getContent();

  return (
    <>
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

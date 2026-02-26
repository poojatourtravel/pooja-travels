import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Innova Crysta Cab | Pooja Tours and Travels",
  description:
    "Book a Toyota Innova Crysta at ₹18/km. Premium 7-seater luxury cab for business and outstation from Pune & Mumbai.",
};

export default async function InnovaCrystaPage() {
  const { site } = await getContent();

  return (
    <>
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

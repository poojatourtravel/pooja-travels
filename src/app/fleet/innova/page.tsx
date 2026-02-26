import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Innova Cab | Pooja Tours and Travels",
  description:
    "Book a Toyota Innova at ₹16/km. 7-seater premium cab — perfect for business and outstation trips from Pune & Mumbai.",
};

export default async function InnovaPage() {
  const { site } = await getContent();

  return (
    <>
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

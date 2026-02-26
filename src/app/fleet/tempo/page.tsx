import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Tempo Traveller | Pooja Tours and Travels",
  description:
    "Book a Tempo Traveller at ₹24/km. 13-seater ideal for group tours, pilgrimages and corporate events from Pune & Mumbai.",
};

export default async function TempoPage() {
  const { site } = await getContent();

  return (
    <>
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

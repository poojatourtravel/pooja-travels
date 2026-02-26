import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Ertiga Cab | Pooja Tours and Travels",
  description:
    "Book an Ertiga cab at ₹13/km. 6-seater SUV — ideal for families and outstation trips from Pune & Mumbai.",
};

export default async function ErtigaPage() {
  const { site } = await getContent();

  return (
    <>
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

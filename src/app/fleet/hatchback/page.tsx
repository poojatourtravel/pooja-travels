import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "Hatchback Cab | Pooja Tours and Travels",
  description:
    "Book an affordable hatchback cab at just ₹10/km. Ideal for city transfers with 3 seats.",
};

export default async function HatchbackPage() {
  const { site } = await getContent();

  return (
    <>
      <Navbar site={site} />
      <FleetDetailPage
        name="Hatchback"
        tagline="Affordable & Efficient City Rides"
        emoji="🚙"
        priceFrom="10"
        seats="3 Passengers"
        bags="3 Bags"
        phoneRaw={site.phoneRaw}
        whatsappText={site.whatsappText}
        description="Our hatchback fleet — including Celerio and WagonR — is perfect for solo travellers and small groups needing quick, affordable city transfers. Compact yet comfortable, these cars navigate city streets with ease."
        features={[
          { label: "Celerio / WagonR" },
          { label: "3 Seats + 3 Bags" },
          { label: "24/7 Available" },
          { label: "GPS-Enabled" },
          { label: "Air-Conditioned" },
          { label: "Professional Driver" },
          { label: "Clean & Well-Maintained" },
        ]}
      />
      <Footer site={site} footer={{ description: "", copyright: "" }} />
      <FloatingButtons site={site} />
    </>
  );
}

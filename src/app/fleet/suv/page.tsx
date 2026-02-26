import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FleetDetailPage from "@/components/FleetDetailPage";

export const metadata: Metadata = {
  title: "SUV Cab | Pooja Tours and Travels",
  description:
    "Book a premium SUV cab. Ertiga, Innova, and Innova Crysta available from ₹13/km from Pune & Mumbai.",
};

export default async function SUVPage() {
  const { site } = await getContent();

  return (
    <>
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

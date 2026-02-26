import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ContactContent from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Pooja Tours and Travels",
  description:
    "Get in touch with Pooja Tours and Travels. Call, WhatsApp or email us to book your cab from Pune & Mumbai.",
};

export default async function ContactPage() {
  const { site, footer } = await getContent();

  return (
    <>
      <Navbar site={site} />
      <ContactContent site={site} />
      <Footer site={site} footer={footer} />
      <FloatingButtons site={site} />
    </>
  );
}

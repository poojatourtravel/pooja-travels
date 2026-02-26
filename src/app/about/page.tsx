import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AboutContent from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Pooja Tours and Travels",
  description:
    "Learn about Pooja Tours and Travels – trusted cab service in Pune & Mumbai. Our story, our mission, and why thousands choose us.",
};

export default async function AboutPage() {
  const { site, footer } = await getContent();

  return (
    <>
      <Navbar site={site} />
      <AboutContent site={site} />
      <Footer site={site} footer={footer} />
      <FloatingButtons site={site} />
    </>
  );
}

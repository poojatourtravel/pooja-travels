import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AboutContent from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Pooja Tours and Travels - Trusted Cab Service Pune & Mumbai",
  description:
    "Learn about Pooja Tours and Travels – a trusted cab service in Pune & Mumbai. Our story, mission, values, and commitment to excellent customer service. 10,000+ happy customers.",
  keywords:
    "about Pooja Tours, cab service company Pune, cab service history, trusted taxi operator, professional cab service, customer testimonials",
  openGraph: {
    title: "About Pooja Tours and Travels | Trusted Cab Service",
    description:
      "Discover our story, mission, and values. Serving 10,000+ happy customers across Pune & Mumbai with reliable cab service.",
    url: "https://www.pujatoursandtravels.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://www.pujatoursandtravels.com/about",
  },
};

export default async function AboutPage() {
  const { site, footer } = await getContent();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Pooja Tours and Travels",
            url: "https://www.pujatoursandtravels.com/about",
            image: "https://www.pujatoursandtravels.com/logo.png",
            description:
              "Pooja Tours and Travels is a trusted cab and taxi service operator in Pune and Mumbai. We provide reliable airport transfers, outstation trips, and local taxi services with professional drivers.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
            telephone: "+919579111356",
            email: "Poojatoursandtravels3@gmail.com",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "450",
            },
          }),
        }}
      />
      <Navbar site={site} />
      <AboutContent site={site} />
      <Footer site={site} footer={footer} />
      <FloatingButtons site={site} />
    </>
  );
}

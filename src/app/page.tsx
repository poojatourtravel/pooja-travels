import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import Routes from "@/components/Routes";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Pooja Tours and Travels | Reliable Cab Service from Pune & Mumbai",
  description:
    "Book trusted cab service from Pune & Mumbai. Airport transfers, outstation trips, local rides. Sedan, Ertiga, Innova, Innova Crysta, Tempo Traveller. 24/7 available. ₹10-₹24/km.",
  keywords:
    "cab service Pune, cab service Mumbai, airport transfer Pune, outstation cab, taxi booking, Sedan, Ertiga, Innova, Tempo Traveller, reliable cab service, 24/7 cab service",
  openGraph: {
    title: "Pooja Tours and Travels | Reliable Cab Service from Pune & Mumbai",
    description:
      "Book trusted cab service from Pune & Mumbai. Airport transfers, outstation trips, local rides. 24/7 available.",
    url: "https://www.pujatoursandtravels.com",
    type: "website",
  },
};

export default async function Home() {
  const content = await getContent();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pooja Tours and Travels",
            url: "https://www.pujatoursandtravels.com",
            logo: "https://www.pujatoursandtravels.com/logo.png",
            description:
              "Reliable cab and taxi service from Pune & Mumbai. Airport transfers, outstation trips, group tours, and local rides. Operating 24/7 with professional drivers.",
            sameAs: ["https://www.facebook.com/110198160835145"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+919579111356",
              contactType: "Customer Service",
              email: "Poojatoursandtravels3@gmail.com",
              availableLanguage: ["en", "hi"],
            },
          }),
        }}
      />
      <Navbar site={content.site} />
      <Hero hero={content.hero} site={content.site} />
      <Features features={content.features} />
      <Fleet fleet={content.fleet} site={content.site} />
      <Routes
        routes={content.routes}
        phoneRaw={content.site.phoneRaw}
        phone={content.site.phone}
      />
      <Services services={content.services} />
      <About about={content.about} />
      <CTA cta={content.cta} site={content.site} />
      <Testimonials testimonials={content.testimonials} />
      <Footer site={content.site} footer={content.footer} />
      <FloatingButtons site={content.site} />
    </>
  );
}

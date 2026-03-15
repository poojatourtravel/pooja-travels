import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ContactContent from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Pooja Tours and Travels - Book Your Cab 24/7",
  description:
    "Get in touch with Pooja Tours and Travels. Call +91 95791 11356 or WhatsApp to book your cab from Pune & Mumbai. Email: Poojatoursandtravels3@gmail.com. Available 24/7.",
  keywords:
    "contact Pooja Tours, book cab Pune, book taxi Mumbai, phone number, WhatsApp cab booking, email contact, customer support",
  openGraph: {
    title: "Contact Pooja Tours and Travels | Book Cab 24/7",
    description:
      "Contact us to book your cab. Call, WhatsApp, or email. Available 24/7 for airport transfers, outstation trips, and local rides.",
    url: "https://poojatoursandtravels.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://poojatoursandtravels.com/contact",
  },
};

export default async function ContactPage() {
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
            url: "https://poojatoursandtravels.com/contact",
            image: "https://poojatoursandtravels.com/logo.png",
            telephone: "+919579111356",
            email: "Poojatoursandtravels3@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+919579111356",
              contactType: "Customer Service",
              availableLanguage: ["en", "hi"],
            },
          }),
        }}
      />
      <Navbar site={site} />
      <ContactContent site={site} />
      <Footer site={site} footer={footer} />
      <FloatingButtons site={site} />
    </>
  );
}

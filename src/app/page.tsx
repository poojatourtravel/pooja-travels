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

export default async function Home() {
  const content = await getContent();

  return (
    <>
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

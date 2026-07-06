import SectionNav from "@/components/SectionNav";
import HashScrollFix from "@/components/HashScrollFix";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import Services from "@/components/Services";
import ProcessScrolly from "@/components/ProcessScrolly";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import PriceCalculator from "@/components/PriceCalculator";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import LocationsMap from "@/components/LocationsMap";
import AboutContact from "@/components/AboutContact";

export default function Home() {
  return (
    <>
      <HashScrollFix />
      <SectionNav />
      <Hero />
      <StatsCounter />
      <Services />
      <ProcessScrolly />
      <BeforeAfter />
      <Gallery />
      <PriceCalculator />
      <Team />
      <Testimonials />
      <Awards />
      <FAQ />
      <Blog />
      <LocationsMap />
      <AboutContact />
    </>
  );
}

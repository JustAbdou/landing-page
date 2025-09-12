"use client";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing/Pricing"; // Removed
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

// Sticky Mobile CTA
const StickyMobileCTA = () => (
  <div className="sticky-cta-bar md:hidden">
    <a href="#cta" className="cta-btn">Download ChefFlow</a>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />

        {/* Pricing section removed */}

        <Testimonials />

        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
      <StickyMobileCTA />
    </>
  );
};

export default HomePage;

"use client";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Benefits section removed - it shows phone images */}

      <Testimonials />

      <FAQ />

      <Stats />
      
      <CTA />
    </>
  );
};

export default HomePage;

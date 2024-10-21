"use client";
import Hero from "@/components/home-comps/hero_section";
import Services from "@/components/home-comps/services_section";
import About from "@/components/home-comps/about_section";
import Statistics from "@/components/home-comps/stats_section";
import Testimonials from "@/components/home-comps/testimonials";
import MenteeSection from "@/components/home-comps/mentees_section";
import Career from "@/components/home-comps/career_section";
import Partners from "@/components/home-comps/partners_section";

// import Image from "next/image";

// import AnimatedCircles from "@/components/animate_circles";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      <Statistics />
      <MenteeSection />
      <Testimonials />
      <Career />
    </>
  );
}

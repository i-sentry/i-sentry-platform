"use client";
import Hero from "@/components/home-comps/hero_section";
import Services from "@/components/home-comps/services_section";
import About from "@/components/home-comps/about_section";
import Statistics from "@/components/home-comps/stats_section";
import Testimonials from "@/components/home-comps/testimonials";
import MenteeSection from "@/components/home-comps/mentees_section";
import Career from "@/components/home-comps/career_section";
import Partners from "@/components/home-comps/partners_section";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useEffect } from "react";

gsap.registerPlugin(ScrollSmoother);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && !ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 1, // Smoothness level
        effects: true, // Enables effects like parallax
      });
    }
  }, []);
  return (
    <main id="wrapper">
      <div id="content">
        <Hero />
        <Partners />
        <About />
        <Services />
        <Statistics />
        <MenteeSection />
        <Testimonials />
        <Career />
      </div>
    </main>
  );
}

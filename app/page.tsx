"use client";
import Hero from "@/components/home-comps/hero_section";
import Services from "@/components/home-comps/services_section";
import About from "@/components/home-comps/about_section";
import Statistics from "@/components/home-comps/stats_section";
import Testimonials from "@/components/home-comps/testimonials";
import MenteeSection from "@/components/home-comps/mentees_section";
import Career from "@/components/home-comps/career_section";
import Partners from "@/components/home-comps/partners_section";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  AOS.init({
    // offset: 120, // offset (in px) from the original trigger point
    // delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    // once: false, // whether animation should happen only once - while scrolling down
    // mirror: false, // whether elements should animate out while scrolling past them
  });
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

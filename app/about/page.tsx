"use client";

import BannerAbout from "@/components/about-comps/BannerAbout";
import Learn from "@/components/about-comps/Learn";
import Vision from "@/components/about-comps/Vision";
import CoreTeam from "@/components/about-comps/CoreTeam";
import AboutInfo from "@/components/about-comps/AboutInfo";
const About = () => {
  return (
    <>
      <BannerAbout />
      <AboutInfo />
      <Vision />
      <Learn />
      <CoreTeam />
    </>
  );
};

export default About;

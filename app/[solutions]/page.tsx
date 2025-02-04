"use client";
// import Banner from "@/components/custom-software-comps/banner";
// import Features from "@/components/custom-software-comps/Features";
// import Offerings from "@/components/custom-software-comps/Offerings";
import { usePathname } from "next/navigation";
import React from "react";
import NotFound from "../not-found";
import { servicesContent } from "@/utils/services";

const solutions = [
  "/custom-software",
  "/tech-consultancy",
  "/expert-guidance-and-strategy",
];

const Service = () => {
  const pathname = usePathname();
  const solution = pathname.replace("/", "") as keyof typeof servicesContent;
  // const { title, description, image, process } = servicesContent[solution];

  console.log(pathname, "SERVICE");
  if (servicesContent[solution]) {
    console.log(servicesContent[solution], "SERVICE PATH", solution);
  } else {
    console.log("Service not found", solution);
  }

  if (solutions.includes(pathname)) {
    return (
      <>
        {/* <Banner title={title} description={description} image={image} />
        <Offerings process={process} />
        <Features /> */}
      </>
    );
  } else {
    return <NotFound />;
  }
};

export default Service;

"use client";
import React from "react";
import MoreServices from "@/components/services-comps/more_services";
import ServiceBanner from "@/components/services-comps/service_banner";
import ServiceStats from "@/components/services-comps/service_stats";
import OurApproaches from "@/components/services-comps/our_approaches";
import ServiceFaqs from "@/components/services-comps/services_faqs";
import OurProjects from "@/components/services-comps/our_projects";

const Services = () => {
  return (
    <>
      <ServiceBanner />
      <ServiceStats />
      <OurApproaches />
      <ServiceFaqs />
      <MoreServices />
      <OurProjects />
    </>
  );
};

export default Services;

export type IProps = {
  title: string;
  content: string;
};

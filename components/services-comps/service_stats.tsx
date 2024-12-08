import StatCard from "@/components/home-comps/stat_card";
import { StatProps } from "@/utils";
import React from "react";

const ServiceStats = () => {
  return (
    <div className="wrapper py-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-medium text-white md:text-3xl md:leading-tight">
          Powerful Security Delivered in Minutes
        </h2>
        <p className="text-balance text-center font-inter font-extralight text-primary-100">
          Join our year-long mentorship program to accelerate your career with
          hands-on projects, guidance from industry experts, and practical
          experience that sets you apart.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:mx-auto lg:max-w-4xl">
        {stats?.map((stat: StatProps, index: number) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default ServiceStats;

const stats: StatProps[] = [
  {
    percentage: "99%",
    title: "Client Satisfaction Rate",
  },
  {
    percentage: "90%",
    title: "Reduction in Deployment Time",
  },
  {
    percentage: "50%",
    title: "Faster Response to Threats",
  },
];

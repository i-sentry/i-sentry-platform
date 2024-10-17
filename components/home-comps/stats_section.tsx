import React from "react";
import StatCard from "./stat_card";

type StatProps = {
  percentage: string;
  title: string;
};

const stats: StatProps[] = [
  {
    percentage: "90%",
    title: "reduction in deployment time",
  },
  {
    percentage: "90%",
    title: "reduction in deployment time",
  },
  {
    percentage: "90%",
    title: "reduction in deployment time",
  },
];

const Statistics = () => {
  return (
    <section className="bg-[#01234540] py-[100px]">
      <div className="wrapper">
        <h2 className="text-center text-xl font-medium text-white md:text-3xl md:leading-10">
          Powerful security deployed in minutes
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:mx-auto lg:max-w-4xl">
          {stats?.map((stat: StatProps, index: number) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

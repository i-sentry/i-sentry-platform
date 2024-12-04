import React from "react";
import EachElement from "../widgets/list_rendering";

type IFeature = {
  title: string;
  content: string;
};

const keyFeatures: IFeature[] = [
  {
    title: "Consultation",
    content:
      "Prioritizing the client's needs and understanding their unique requirements to deliver tailored software solutions.",
  },
  {
    title: "Implementation",
    content:
      "Prioritizing the client's needs and understanding their unique requirements to deliver tailored software solutions.",
  },
  {
    title: "Support",
    content:
      "Prioritizing the client's needs and understanding their unique requirements to deliver tailored software solutions.",
  },
];

const Features = () => {
  return (
    <>
      {/* Key Features */}
      <section className="py-16">
        <div className="wrapper">
          <h2 className="mb-16 text-left text-2xl font-medium text-white sm:text-center sm:text-3xl md:text-[2rem] md:leading-snug">
            We offer a comprehensive suite of <br className="hidden md:block" />
            services to help business and startups
            <br className="hidden md:block" /> thrive in a competitive
            landscape.
          </h2>

          <div className="relative mt-16 grid gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-12">
            <hr className="absolute left-1/2 top-[28px] hidden -translate-x-1/2 border-dashed lg:block lg:w-[70%]" />
            <EachElement
              of={keyFeatures}
              render={(item: IFeature, index: number) => (
                <Feature key={index} data={item} index={index} />
              )}
            />
          </div>
          <div className="mt-16"></div>
        </div>
      </section>
    </>
  );
};

export default Features;

const Feature = ({ data, index }: { data: IFeature; index: number }) => {
  return (
    <div className="relative z-10 grid grid-cols-[56px_1fr] gap-4 md:flex md:flex-col md:items-center md:justify-center">
      <span className="relative grid h-14 w-14 items-center justify-center rounded-full border border-white bg-primary-900 text-2xl text-white md:flex">
        {index + 1}
      </span>

      <div>
        <h3 className="mb-2 text-xl font-medium text-white md:text-center">
          {data.title}
        </h3>
        <p className="font-light text-primary-200 md:text-center">
          {data.content}
        </p>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import Illus from "@/public/images/density-medium.svg";
import EachElement from "../widgets/list_rendering";

const Offerings = () => {
  return (
    <>
      {/* OFFERIGS */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-[#FAFAFA13] to-[#F4F4F40D] py-16 lg:py-24">
        <Image
          src={Illus}
          alt="Brick illustration"
          className="absolute -right-[0px] -top-0 z-0 w-[300px] scale-150 md:scale-[1.8]"
        />

        <div className="wrapper relative z-10">
          <h2 className="mb-16 text-left text-2xl font-medium text-white sm:text-center sm:text-3xl md:text-[2rem] md:leading-snug">
            We offer a comprehensive suite of <br className="hidden md:block" />{" "}
            services to help business and startups{" "}
            <br className="hidden md:block" /> thrive in a competitive
            landscape.
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <EachElement
              of={ourOffers}
              render={(item: IOffer, index: number) => (
                <OfferCard key={index} data={item} index={index} />
              )}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Offerings;

type IOffer = {
  title: string;
  content: string;
};

const ourOffers: IOffer[] = [
  {
    title: "Customer-Centric Approach",
    content:
      "Prioritizing the client's needs and understanding their unique requirements to deliver tailored software solutions.",
  },
  {
    title: "Customer-Centric Approach",
    content:
      "Prioritizing the client's needs and understanding their unique requirements to deliver tailored software solutions.",
  },
  {
    title: "Customer-Centric Approach",
    content:
      "Prioritizing the client's needs and understanding their unique requirements to deliver tailored software solutions.",
  },
];

const OfferCard = ({ data, index }: { data: IOffer; index: number }) => {
  return (
    <div>
      <span className="mb-2 inline-block font-dm-sans text-xl font-medium text-white md:text-2xl">
        0{index + 1}
      </span>
      <hr className="border-0 border-t border-white/20" />
      <h3 className="mb-2 mt-4 text-xl font-medium text-white md:text-2xl">
        {data.title}
      </h3>
      <p className="leading-normal text-white">{data.content}</p>
    </div>
  );
};

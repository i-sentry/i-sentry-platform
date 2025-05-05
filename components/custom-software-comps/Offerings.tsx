import React from "react";
import Image from "next/image";
import Illus from "@/public/images/density-medium.svg";
import EachElement from "../widgets/list_rendering";

type IProcess = {
  title: string;
  description: string;
  lists: {
    title: string;
    description: string;
  }[];
};

type IProcessProps = {
  title: string;
  description: string;
  lists: {
    title: string;
    features: string[];
  }[];
};

type ProcessProps = { process: IProcess | IProcessProps };

const Offerings: React.FC<ProcessProps> = ({ process }) => {
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
          <div className="mx-auto mb-16 max-w-3xl text-left sm:text-center">
            <h2 className="text-2xl font-medium text-white sm:text-3xl md:text-[2rem] md:leading-snug">
              {process.title}
            </h2>
            <p className="font-inter text-lg font-light leading-normal text-primary-200">
              {process.description}
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <EachElement
              of={process.lists}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              render={(item: any, index: number) => (
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

// type IOffer = {
//   title: string;
//   description: string;
//   features: string[];
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OfferCard = ({ data, index }: { data: any; index: number }) => {
  console.log(Object.keys(data).includes("features"), "DATA");
  return (
    <div>
      <span className="mb-2 inline-block font-dm-sans text-xl font-medium text-white">
        0{index + 1}
      </span>
      <hr className="border-0 border-t border-white/20" />
      <h3 className="mb-2 mt-4 text-xl font-medium text-white">{data.title}</h3>
      {!Object.keys(data).includes("features") ? (
        <p className="leading-normal text-primary-100">{data.description}</p>
      ) : (
        <ul className="list-disc pl-5">
          {data.features.map((feature: string, index: number) => (
            <li
              key={index}
              className="mt-2 items-center font-light text-primary-100"
            >
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

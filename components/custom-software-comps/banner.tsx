import React from "react";
import SmartButton from "@/components/custom_button";
import Image from "next/image";
import Img from "@/public/images/custom-software.webp";
import Illus from "@/public/assets/svg/cone-pattern.svg";

const Banner = () => {
  return (
    <>
      {/* BANNER */}
      <section className="relative py-24 md:pt-32">
        <Image
          src={Illus}
          alt="Brick illustration"
          className="absolute -right-[0px] -top-0 z-0 w-[300px] scale-150 md:scale-[1.8]"
        />
        <div className="wrapper relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:gap-8 xl:gap-32">
          <div>
            <h1 className="mb-2 text-left text-3xl font-medium text-white md:text-balance md:text-4xl md:leading-snug xl:text-5xl xl:leading-snug">
              We make your software stand out.
            </h1>
            <p className="mb-6 font-light leading-normal text-primary-100">
              We building custom software across various niches that are very
              responsive and work effective to drive business growth. Our team
              are one of the best across the globe that build software that are
              tailor your needs.
            </p>

            <SmartButton
              buttonText="Get Started Today"
              isLink
              url="/"
              variant="bright"
            />
          </div>
          <div className="mb-8 md:mb-0 md:h-full">
            <Image
              src={Img}
              alt="A hand holding a smartphone"
              className="h-[200px] w-full rounded-[12px] object-cover object-center md:h-[300px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

import React from "react";
import SmartButton from "@/components/custom_button";
import Image from "next/image";
// import Illus from "@/public/assets/svg/cone-pattern.svg";

const Banner = ({
  title,
  description,
  // image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <>
      {/* BANNER */}
      <section className="relative py-24 md:pt-32">
        <Image
          src="/assets/svg/cone-pattern.svg"
          width={500}
          height={500}
          alt="Brick illustration"
          className="absolute -right-[0px] -top-0 z-0 w-[300px] scale-150 md:scale-[1.8]"
        />
        <div className="wrapper relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:gap-8 xl:gap-32">
          <div>
            <h1 className="mb-2 text-left text-3xl font-medium text-white md:text-balance md:text-4xl md:leading-snug xl:text-5xl xl:leading-snug">
              {title}
            </h1>
            <p className="mb-6 font-light leading-normal text-primary-100">
              {description}
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
              // src={image}
              src="/images/custom-software.webp"
              width={867}
              height={1300}
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

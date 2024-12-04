import React from "react";
import { useMediaQuery } from "usehooks-ts";
import Block from "@/public/assets/svg/Keyboard-control-key.svg";
import Cone from "@/public/assets/svg/cone-pattern.svg";
import Image from "next/image";

const BannerProjects = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <section className="relative">
        {/* SVG BG */}
        <Image
          src={Block}
          data-speed="3.5"
          alt="Brick illustration"
          className="absolute left-[70px] top-[14rem] z-0 w-[150px] scale-150 md:scale-[1.8] lg:left-[300px]"
        />
        <Image
          src={Cone}
          data-speed="3.5"
          alt="Brick illustration"
          className="absolute -right-[100px] -top-[10px] h-[200px] w-[376px] -rotate-[20deg] scale-[1.15] md:scale-125 lg:-right-[12rem] lg:-top-12 lg:h-[400px] lg:w-[500px] lg:scale-[1]"
        />

        <div className="wrapper overflow-[hidden_!important] relative z-10">
          {/* HEADING */}
          <div className="relative pt-[150px] lg:static">
            <div className="md:flex md:items-end md:justify-between">
              <div className="mx-auto max-w-xl text-center md:mx-0 md:w-1/2 md:text-left">
                <p className="text-sm text-secondary-200 lg:text-base">
                  {isMobile ? "Case Studies" : "Projects"}
                </p>
                <h2 className="mb-4 mt-3 font-dm-sans text-[32px] font-normal text-white md:text-[3rem]">
                  Crafting unique
                  <br className="sm:hidden md:block" /> solutions
                </h2>
                <p className="text-sm font-light text-primary-100 md:hidden">
                  Ready to transform your ideas into reality? Whether
                  you&apos;re looking for digital solutions or interested in our
                  mentorship program, we&apos;re here to help.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2">
                <p className="text-base font-light leading-normal text-primary-100">
                  Transform your career trajectory through our intensive
                  year-long mentorship program. At I-Sentry Technologies, we
                  don&apos;t just teach—we immerse you in real-world projects,
                  surround you with industry experts, and guide your journey
                  from aspiring developer to tech professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerProjects;

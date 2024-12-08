import React from "react";
import BannerIllustration from "../BannerIllustration";

const BannerAbout = () => {
  return (
    <>
      {/* HEADING */}
      <section id="content" className="pb-16 pt-28 contain-paint">
        <BannerIllustration />

        <div className="wrapper relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base text-secondary-200">About us</p>
            <h1 className="mb-4 mt-3 font-dm-sans text-[32px] font-normal text-white md:text-[3rem]">
              I-Sentry is building
              <br className="sm:hidden md:block" /> cutting-edge innovations
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAbout;

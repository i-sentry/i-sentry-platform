import React from "react";
import BannerIllustration from "../BannerIllustration";

const ServiceBanner = () => {
  return (
    <section className="pb-20 pt-28 lg:pt-40">
      <BannerIllustration />
      <div className="wrapper">
        <div className="text-center md:mx-auto md:max-w-xl">
          <h4 className="text-sm text-secondary-200">Services</h4>
          <h1 className="my-4 text-3xl font-medium leading-[1.3] text-white sm:text-5xl sm:leading-snug">
            We make your products
            <br className="hidden sm:block" /> stand out
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;

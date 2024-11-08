import Partners from "@/components/home-comps/partners_section";
import Testimonials from "@/components/home-comps/testimonials";
import React from "react";

const Talents = () => {
  return (
    <>
      <section className="pb-20 pt-28 lg:pt-40">
        <div className="wrapper">
          <div className="text-center md:mx-auto md:max-w-xl">
            <h4 className="text-sm text-secondary-200">Careers</h4>
            <h1 className="my-4 text-3xl font-medium leading-[1.3] text-white sm:text-5xl sm:leading-snug">
              Work at the heart of&nbsp;
              <br className="hidden sm:block" />
              change
            </h1>
            {/* <SmartButton
              variant="bright"
              buttonText="See open positions"
              className="mt-10"
            /> */}
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <div>
            <h2 className="text-sm text-white">Our sponsors</h2>
          </div>
          <Partners />
        </div>
      </section>

      {/* PROJECTS BY INTERNS */}
      <section>
        <div className="wrapper">
          <h2 className="text-2xl text-white">Projects built by our interns</h2>

          <div className="">
            
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Talents;

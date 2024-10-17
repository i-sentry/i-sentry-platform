import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <section className="h-auto w-full py-20">
        <div className="wrapper">
          <div className="mx-auto flex flex-col items-center md:max-w-2xl">
            <h1 className="text-center text-[28px] font-normal text-white sm:text-3xl md:text-5xl">
              Pioneering the Digital Frontier
            </h1>
            <p className="mb-8 mt-3 text-center text-sm font-extralight leading-6 text-[#C2C2C2CC] sm:mx-auto sm:w-[80%]">
              Our cutting-edge solutions and global expertise empower businesses
              to navigate and thrive in the digital landscape of tomorrow.
            </p>

            <div className="flex items-center gap-2">
              <Button className="bg-grad-alt h-auto rounded-full border border-[#023B744D] px-8 py-3.5 backdrop-blur-xl">
                Our Services
              </Button>
              <Button className="bg-grad h-auto rounded-full px-8 py-3.5">
                Join our Program
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative border-y-[0.2px] border-[#f9f9f924] py-4">
        <div className="bg-partners absolute left-0 top-0 h-full w-full"></div>
        <div className="wrapper text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
          expedita, hic earum animi vero harum porro eligendi dolore veniam
          doloribus magni distinctio libero ab est itaque eum at quae. Officiis?
        </div>
      </section>
    </>
  );
};

export default Hero;

/* 
       <Button className="mx-auto flex rounded-full bg-gradient-to-tr from-base-400 via-orange-400 to-brand-400 p-1 shadow-lg">
              <button className="bg-grad-alt flex-1 rounded-full px-6 py-1 text-xl font-bold">
                Welcome
              </button>
            </Button>


*/

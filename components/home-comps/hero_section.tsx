import React from "react";
import SmartButton from "../custom_button";
import AnimatedCircle from "../animate_circles";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[30vh] w-full overflow-hidden py-36 lg:flex lg:h-screen lg:items-center lg:justify-center lg:py-0 lg:py-20">
        <div className="wrapper">
          <>
            {/* <svg
              className="absolute left-0 top-0 h-auto w-full"
              width="1920"
              height="767"
              viewBox="0 0 1920 767"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M642 766.4C1039.65 766.4 1362 444.045 1362 46.4C1362 -351.245 1039.65 -673.6 642 -673.6C244.355 -673.6 -78 -351.245 -78 46.4C-78 444.045 244.355 766.4 642 766.4Z"
                fill="url(#paint0_linear_19_800)"
                fill-opacity="0.2"
              />
              <path
                d="M1278 766.4C1675.65 766.4 1998 444.045 1998 46.4C1998 -351.245 1675.65 -673.6 1278 -673.6C880.355 -673.6 558 -351.245 558 46.4C558 444.045 880.355 766.4 1278 766.4Z"
                fill="url(#paint1_linear_19_800)"
                fill-opacity="0.2"
              />
              <path
                d="M960 692C1357.65 692 1680 369.645 1680 -28C1680 -425.645 1357.65 -748 960 -748C562.355 -748 240 -425.645 240 -28C240 369.645 562.355 692 960 692Z"
                fill="url(#paint2_linear_19_800)"
                fill-opacity="0.2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_19_800"
                  x1="960"
                  y1="255.2"
                  x2="960"
                  y2="699.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C2C2C2" stop-opacity="0" />
                  <stop offset="1" stop-color="#C2C2C2" stop-opacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_19_800"
                  x1="960"
                  y1="255.2"
                  x2="960"
                  y2="699.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C2C2C2" stop-opacity="0" />
                  <stop offset="1" stop-color="#C2C2C2" stop-opacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_19_800"
                  x1="960"
                  y1="255.2"
                  x2="960"
                  y2="699.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C2C2C2" stop-opacity="0" />
                  <stop offset="1" stop-color="#C2C2C2" stop-opacity="0.5" />
                </linearGradient>
              </defs>
            </svg> */}
            <AnimatedCircle />
          </>
          <div className="relative z-10 mx-auto flex flex-col items-center md:max-w-2xl lg:max-w-4xl">
            <h1 className="text-center text-[28px] font-semibold text-white sm:text-3xl md:text-5xl lg:text-6xl">
              Pioneering the Digital Frontier
            </h1>
            <p className="mb-8 mt-4 text-center text-sm font-extralight leading-6 text-[#C2C2C2CC] sm:mx-auto sm:w-[80%] lg:max-w-xl lg:text-lg">
              Our cutting-edge solutions and global expertise empower businesses
              to navigate and thrive in the digital landscape of tomorrow.
            </p>

            <div className="flex items-center gap-2">
              <SmartButton variant="dark" buttonText="Our Services" />
              <SmartButton variant="bright" buttonText="Join our Program" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

/* 
       <Button className="mx-auto flex rounded-full bg-gradient-to-tr from-secondary-400 via-orange-400 to-primary-400 p-1 shadow-lg">
              <button className="bg-grad-alt flex-1 rounded-full px-6 py-1 text-xl font-bold">
                Welcome
              </button>
            </Button>


*/

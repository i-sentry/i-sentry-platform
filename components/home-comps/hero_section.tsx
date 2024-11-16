import React from "react";
import SmartButton from "../custom_button";
import AnimatedCircle from "../animate_circles";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <section className="relative min-h-[30vh] w-full overflow-hidden py-36 lg:flex lg:h-screen lg:items-center lg:justify-center lg:py-20">
        <div className="wrapper">
          <>
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
              <SmartButton
                variant="dark"
                buttonText="Our Services"
                onClick={() => router.push("/services")}
              />
              <SmartButton
                variant="bright"
                buttonText="Join our Program"
                onClick={() => router.push("/mentorships")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

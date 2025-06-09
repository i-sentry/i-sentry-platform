"use client";
import SmartButton from "@/components/custom_button";
import Image from "next/image";
import React from "react";
// import Stacks from "@/public/images/pictures-stack.png";
import { useRouter } from "next/navigation";
import KeyPoints from "@/components/careers-comps/key_points";
import JobPositions from "@/components/careers-comps/job_positions";

const Career = () => {
  const router = useRouter();

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
            <SmartButton
              variant="bright"
              buttonText="See open positions"
              className="mt-10"
              onClick={() => router.push("#positions")}
            />
          </div>
          <div className="relative">
            <div className="absolute -bottom-2 left-0 h-full w-full bg-stack"></div>
            <Image src={Stacks} alt="image mansory" className="w-full" />
          </div>
        </div>
      </section>
      <KeyPoints />
      <JobPositions />
    </>
  );
};

export default Career;

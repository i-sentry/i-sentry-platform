import SmartButton from "@/components/custom_button";
import Link from "next/link";
import React from "react";

const Internship = () => {
  return (
    <section className="pb-20 pt-28 lg:pt-40">
      <div className="wrapper">
        <div className="text-center md:mx-auto md:max-w-xl">
          <h4 className="text-sm text-secondary-200">Internship</h4>
          <h1 className="my-4 text-3xl font-medium leading-[1.35] text-white sm:text-5xl sm:leading-tight">
            Launch your career with
            <br className="hidden sm:block" /> innovation at I-Sentry
          </h1>
          <p className="font-light leading-normal text-primary-200">
            Our internship programs are 99% hands-on. You get to design and
            build outstanding projects that can give you an edge in a hiring
            process.
          </p>
          <Link href="/internship/enroll">
            <SmartButton
              variant="bright"
              buttonText="Enroll for free"
              className="mt-10"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Internship;

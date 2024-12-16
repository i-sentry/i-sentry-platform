"use client";
import Image from "next/image";
import React from "react";
import Cone from "@/public/assets/svg/cone-pattern.svg";
import InternshipForm from "@/components/internship-comps/internship_enrollment_form";
const InternshipEnroll = () => {
  return (
    <>
      <section className="overflow-x-hidden pb-16 pt-[11rem]">
        <Image
          src={Cone}
          alt="svg"
          className="absolute -right-[10rem] top-0 z-0 opacity-30"
        />
        <div className="wrapper relative z-10 gap-8 md:grid lg:grid-cols-2">
          <div className="mb-10 space-y-8 lg:mb-0">
            <h1 className="font-dm-sans text-2xl font-semibold text-white md:text-[2rem]">
              Let&apos;s get started
            </h1>
            <p className="text-sm font-light leading-normal text-primary-100 md:text-base">
              Transform your career trajectory through our intensive year-long
              mentorship program. At I-Sentry Technologies, we don&apos;t just
              teach—we immerse you in real-world projects, surround you with
              industry experts, and guide your journey from aspiring developer
              to tech professional.
            </p>
            <ul>
              <li>
                <div className="inline-flex items-center gap-3 text-sm font-light text-white md:text-base">
                  <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
                  Program Foundation Building
                </div>
              </li>
              <li>
                <div className="inline-flex items-center gap-3 text-sm font-light text-white md:text-base">
                  <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
                  Program Foundation Building
                </div>
              </li>
              <li>
                <div className="inline-flex items-center gap-3 text-sm font-light text-white md:text-base">
                  <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
                  Program Foundation Building
                </div>
              </li>
            </ul>
          </div>
          {/* FORM */}
          <InternshipForm />
        </div>
      </section>
    </>
  );
};

export default InternshipEnroll;

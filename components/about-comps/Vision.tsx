import Image from "next/image";
import React from "react";
import AboutImg from "@/public/images/isentry-ab.webp";
import EachElement from "../widgets/list_rendering";
import { Badge } from "../ui/badge";

const Vision = () => {
  return (
    <>
      <section className="py-10">
        <div className="wrapper">
          <div className="mt-8 items-start gap-5 space-y-8 md:h-auto md:space-y-0 lg:grid lg:h-auto lg:grid-cols-[1.5fr_2fr]">
            <div className="relative lg:h-full">
              <Image
                src={AboutImg}
                alt="Placeholder"
                className="hidden w-full rounded-xl object-cover object-center md:mb-4 md:block md:h-[300px] lg:absolute lg:left-0 lg:top-0 lg:m-0 lg:h-full"
              />
            </div>

            <div className="divide-y-[1px] divide-primary-50/20 rounded-[8px] border border-primary-50/20 bg-box p-5">
              {/* OUR VISION */}
              <div className="space-y-3 pb-5">
                <h3 className="font-dm-sans text-[20px] font-medium text-white">
                  Our Vision
                </h3>
                <p className="text-base font-light text-primary-100">
                  At Isentry, our mission is to drive technological advancement
                  through two key pillars: delivering innovative software
                  solutions and nurturing tech talent.
                </p>
                <p className="text-base font-light text-primary-100">
                  We aim to foster growth and efficiency by providing
                  state-of-the-art digital solutions while maintaining our
                  commitment to excellence, integrity, and client success.
                </p>
                <p className="text-base font-light text-primary-100">
                  We strive to be the bridge between current business needs and
                  future tech capabilities, transforming both organizations and
                  individuals through technology.
                </p>
              </div>

              {/* OUR MISSION */}
              <div className="space-y-3 py-5">
                <h3 className="font-dm-sans text-[20px] font-medium text-white">
                  Our Mission
                </h3>
                <p className="text-base font-light text-primary-100">
                  At Isentry, our mission is to lead technological advancement,
                  creating a world where businesses and individuals can thrive
                  through innovation.
                </p>
                <p className="text-base font-light text-primary-100">
                  We aim to foster growth, enhance efficiency and generate
                  global impact while upholding our standard of professionalism,
                  integrity and customer focus.
                </p>
                <p className="text-base font-light text-primary-100">
                  We aspire to be the catalyst that transforms technological
                  potential into tangible success for our clients and partners
                </p>
              </div>

              {/* CORE VALUES */}
              <div className="space-y-5 py-5">
                <h3 className="font-dm-sans text-[20px] font-medium text-white">
                  Our Core Values
                </h3>

                <div className="flex flex-wrap gap-x-3 gap-y-4">
                  <EachElement
                    of={coreValues}
                    render={(item: string) => {
                      return (
                        <Badge
                          key={item}
                          variant="outline"
                          className="rounded-full bg-transparent text-sm font-light text-white"
                        >
                          {item}
                        </Badge>
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;

const coreValues = [
  "Innovation",
  "Quality",
  "Collaboration",
  "Integrity",
  "Customer-Centricity",
  "Sustainability",
];

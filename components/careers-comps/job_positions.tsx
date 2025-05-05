/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronDown, CircleDollarSign, Clock, MapPin } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import CareerImg from "@/public/images/career.jpeg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const JobPositions = () => {
  return (
    <section id="positions" className="bg-footer2 py-16 md:pt-24">
      <div className="wrapper">
        <div className="mb-6 border-b border-[#FAFAFA1F] pb-6 sm:grid sm:grid-cols-[1.5fr_1fr] sm:items-start sm:justify-between sm:gap-6">
          <div className="">
            <h3 className="mb-5 font-dm-sans text-xl font-normal text-white sm:text-2xl md:text-3xl">
              Start doing work that matters
            </h3>
            <p className="font-light text-primary-100">
              Want to work with some of the best global talent and build
              software used by all the companies you know and love? Join the
              team — we&apos;re hiring!
            </p>
          </div>
          <div className="mt-8 items-center gap-2.5 sm:mt-0 sm:inline-flex sm:justify-end">
            <span className="hidden text-sm text-primary-50 sm:inline-block">
              Location:
            </span>
            <Select defaultValue="any">
              <SelectTrigger className="h-auto w-[180px] items-center rounded-[8px] border-0 bg-grad p-2 text-sm text-white outline-0 focus:ring-0 [&>span]:inline-flex [&>span]:items-center [&>span]:gap-2">
                <SelectValue
                  placeholder={
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={20} className="sm:w-4" />
                      <span>Worldwide</span>
                    </span>
                  }
                  className=""
                />
              </SelectTrigger>
              <SelectContent className="bg-primary-100">
                <SelectItem value="any">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={20} className="sm:w-4" />
                    <span>Worldwide</span>
                  </span>
                </SelectItem>
                <SelectItem value="lagos">Lagos</SelectItem>
                <SelectItem value="abuja">Abuja</SelectItem>
                <SelectItem value="portharcourt">Port Harcourt</SelectItem>
              </SelectContent>
            </Select>

            {/* <div className="flex items-center justify-between rounded-[8px] bg-grad p-3 sm:gap-10 sm:p-1.5">
              <div className="inline-flex items-center gap-2 text-primary-50 sm:text-xs">
                <MapPin size={20} className="sm:w-4" />
                <span>Worldwide</span>
              </div>

              <ChevronDown size={20} className="text-primary-50" />
            </div> */}
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-center font-medium text-white">
            No current openings available.
          </p>
          {/* DESIGN JOBS */}
          {/* <div className="pt-10 sm:border-t sm:border-[#FAFAFA26] md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h3 className="font-dm-sans text-lg font-medium text-white">
                Design
              </h3>
              <p className="font-light text-primary-100">
                Open positions in our design team.
              </p>
            </div>

      
            <div className="mt-6 rounded-2xl border border-[#FAFAFA26] p-5 md:mt-0">
              <div className="lg:flex lg:items-center lg:gap-2">
                <h4 className="mb-2 font-dm-sans text-lg font-medium text-white lg:mb-0">
                  Product Designer
                </h4>
                <div className="flex items-center gap-2 lg:grow lg:justify-between">
                  <Badge className="inline-flex items-center gap-2 rounded-[6px] bg-career px-2 py-0.5 font-inter text-sm font-normal text-primary-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E90FA]"></span>{" "}
                    Design
                  </Badge>
                  <Badge className="inline-flex items-center gap-2 rounded-[6px] bg-career px-2 py-0.5 font-inter text-sm font-normal text-primary-50">
                    <span className="inline-block h-4 w-4 rounded-full text-primary-50">
                      <ReactCountryFlag
                        svg
                        countryCode="AU"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        className="rounded-full object-cover"
                      />
                    </span>{" "}
                    Melbourne, Australia
                  </Badge>
                </div>
              </div>
              <p className="mb-8 mt-2 font-light text-primary-100">
                We&apos;re looking for a mid-level product designer to join our
                team.
              </p>
              <div className="inline-flex items-center gap-6">
                <div className="inline-flex items-center gap-2 text-primary-100">
                  <span>
                    <Clock size={20} />
                  </span>
                  Full time
                </div>
                <div className="inline-flex items-center gap-2 text-primary-100">
                  <span>
                    <CircleDollarSign size={20} />
                  </span>
                  80k - 100k
                </div>
              </div>
            </div>
          </div> */}

          {/* SOFTWARE JOBS */}
          {/* <div className="border-t border-[#FAFAFA26] pt-10 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h3 className="font-dm-sans text-lg font-medium text-white">
                Software Engineering
              </h3>
              <p className="font-light text-primary-100">
                Open positions in our development team.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[#FAFAFA26] p-5 md:mt-0">
              <div className="lg:flex lg:items-center lg:gap-2">
                <h4 className="mb-2 font-dm-sans text-lg font-medium text-white lg:mb-0">
                  Backend Engineer
                </h4>
                <div className="flex items-center gap-2 lg:grow lg:justify-between">
                  <Badge className="inline-flex items-center gap-2 rounded-[6px] bg-career px-2 py-0.5 font-inter text-sm font-normal text-primary-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E90FA]"></span>{" "}
                    Design
                  </Badge>
                  <Badge className="inline-flex items-center gap-2 rounded-[6px] bg-career px-2 py-0.5 font-inter text-sm font-normal text-primary-50">
                    <span className="inline-block h-4 w-4 rounded-full text-primary-50">
                      <ReactCountryFlag
                        svg
                        countryCode="AU"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        className="rounded-full object-cover"
                      />
                    </span>{" "}
                    Melbourne, Australia
                  </Badge>
                </div>
              </div>
              <p className="mb-8 mt-2 font-light text-primary-100">
                We&apos;re looking for a mid-level product designer to join our
                team.
              </p>
              <div className="inline-flex items-center gap-6">
                <div className="inline-flex items-center gap-2 text-primary-100">
                  <span>
                    <Clock size={20} />
                  </span>
                  Full time
                </div>
                <div className="inline-flex items-center gap-2 text-primary-100">
                  <span>
                    <CircleDollarSign size={20} />
                  </span>
                  80k - 100k
                </div>
              </div>
            </div>
          </div>
        </div> */}

          <Image
            src={CareerImg}
            alt="office-room"
            className="mt-6 h-[480px] w-full rounded-xl object-cover object-[right_center]"
          />
        </div>
      </div>
    </section>
  );
};

export default JobPositions;

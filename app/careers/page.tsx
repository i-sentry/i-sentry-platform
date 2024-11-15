"use client";
import SmartButton from "@/components/custom_button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  CircleDollarSign,
  Clock,
  MapPin,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import CareerImg from "@/public/images/career.jpeg";
import Stacks from "@/public/images/pictures-stack.png";
import { useRouter } from "next/navigation";

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

      {/* JOIN TEAM */}
      <section className="wrapper">
        <div className="md:w-3/4 lg:w-1/2">
          <h3 className="mb-2 font-dm-sans text-2xl text-white">
            Join a team of makers
          </h3>
          <p className="text-sm font-light leading-normal text-primary-100">
            Transform your career trajectory through our intensive year-long
            mentorship program. At I-Sentry Technologies, we don&apos;t just
            teach—we immerse you in real-world projects, surround you with
            industry experts, and guide your journey from aspiring developer to
            tech professional.
          </p>
          <SmartButton
            variant="dark"
            buttonText="Meet the Team"
            showAnimatedIcon
            className="mt-4 px-4 py-2 text-xs md:mt-10"
          />
        </div>

        {/* KPI */}
        <div className="my-14 grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {KPIs.map((kpi, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-[8px] border-solid border-secondary-800 bg-secondary-500 text-primary-50">
                  {kpi.icon}
                </span>
                <h3 className="mb-2 font-inter text-lg font-medium text-white">
                  {kpi.title}
                </h3>
                <p className="text-sm font-light leading-normal text-primary-100 md:text-base">
                  {kpi.content}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="positions" className="bg-footer2 py-16 md:pt-24">
        <div className="wrapper">
          <div className="mb-6 sm:grid sm:grid-cols-[1.5fr_1fr] sm:items-start sm:justify-between sm:gap-6">
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
              <div className="flex items-center justify-between rounded-[8px] bg-grad p-3 sm:gap-10 sm:p-1.5">
                <div className="inline-flex items-center gap-2 text-primary-50 sm:text-xs">
                  <MapPin size={20} className="sm:w-4" />
                  <span>Worldwide</span>
                </div>

                <ChevronDown size={20} className="text-primary-50" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* DESIGN JOBS */}
            <div className="pt-10 sm:border-t sm:border-[#FAFAFA26] md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <h3 className="font-dm-sans text-lg font-medium text-white">
                  Design
                </h3>
                <p className="font-light text-primary-100">
                  Open positions in our design team.
                </p>
              </div>

              {/* JOB INFO */}
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
                  We&apos;re looking for a mid-level product designer to join
                  our team.
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

            {/* SOFTWARE JOBS */}
            <div className="border-t border-[#FAFAFA26] pt-10 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_1.4fr]">
              {/* HEADING */}
              <div>
                <h3 className="font-dm-sans text-lg font-medium text-white">
                  Software Engineering
                </h3>
                <p className="font-light text-primary-100">
                  Open positions in our development team.
                </p>
              </div>

              {/* JOB INFO */}
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
                  We&apos;re looking for a mid-level product designer to join
                  our team.
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
          </div>

          <Image
            src={CareerImg}
            alt="office-room"
            className="mt-6 h-[480px] w-full rounded-xl object-cover object-[right_center]"
          />
        </div>
      </section>
    </>
  );
};

export default Career;

type KPIProps = {
  icon: React.JSX.Element;
  title: string;
  content: string;
};

const KPIs: KPIProps[] = [
  {
    icon: <Zap size={20} />,
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: <Zap size={20} />,
    title: "Deliver instant answers",
    content:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: <Zap size={20} />,
    title: "Manage your team with reports",
    content:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: <Zap size={20} />,
    title: "Connect with customers",
    content:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: <Zap size={20} />,
    title: "Connect the tools you already use",
    content:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: <Zap size={20} />,
    title: "Our people make the difference",
    content:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

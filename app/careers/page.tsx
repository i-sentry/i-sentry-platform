import SmartButton from "@/components/custom_button";
import { Zap } from "lucide-react";
import React from "react";

const Career = () => {
  return (
    <>
      <section className="pb-20 pt-28 lg:pt-40">
        <div className="wrapper md:mx-auto md:max-w-4xl xl:max-w-5xl">
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
            />
          </div>
        </div>
      </section>

      {/* JOIN TEAM */}
      <section className="wrapper">
        <div className="">
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

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-footer2 py-10">
        <div className="wrapper">
          <div>
            
          </div>
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

import StatCard from "@/components/home-comps/stat_card";
import EachElement from "@/components/widgets/list_rendering";
import { cn } from "@/lib/utils";
import { StatProps, stats } from "@/utils";
import React from "react";
import Placeholder from "@/public/images/placeholder.png";
import Image from "next/image";
import SmartButton from "@/components/custom_button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

const Services = () => {
  return (
    <>
      <section className="pb-20 pt-28 lg:pt-40">
        <div className="wrapper">
          <div className="text-center md:mx-auto md:max-w-xl">
            <h4 className="text-sm text-secondary-200">Services</h4>
            <h1 className="my-4 text-3xl font-medium leading-[1.3] text-white sm:text-5xl sm:leading-snug">
              We make your products
              <br className="hidden sm:block" /> stand out
            </h1>
          </div>
        </div>
      </section>

      <div className="wrapper py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-medium text-white md:text-3xl md:leading-tight">
            Powerful security deployed in minutes
          </h2>
          <p className="text-center font-inter font-extralight text-primary-100">
            Transform your career trajectory through our intensive year-long
            mentorship program. At I-Sentry Technologies, we don&apos;t just
            teach—we immerse you in real-world projects, surround you with
            industry experts, and guide your journey from aspiring developer to
            tech professional.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:mx-auto lg:max-w-4xl">
          {stats?.map((stat: StatProps, index: number) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* OUR APPROACHES */}
      <div className="wrapper py-10 lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-10">
        <div className="max-w-lg">
          <h2 className="mb-4 text-2xl font-medium text-white md:text-3xl md:leading-tight">
            Our approach
          </h2>
          <p className="font-inter font-extralight text-primary-100">
            Transform your career trajectory through our intensive year-long
            mentorship program. At I-Sentry Technologies, we don&apos;t just
            teach—we immerse you in real-world projects, surround you with
            industry experts, and guide your journey from aspiring developer to
            tech professional.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative flex flex-col justify-center gap-6 after:absolute after:top-0 after:inline-block after:h-full after:w-[0.5px] after:-translate-x-1/2 after:bg-primary-100/20 md:after:left-1/2">
            <EachElement
              of={ourApproaches}
              render={(item: IProps, index: number) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-16 pl-5 pt-5 last:pb-5 md:pl-0"
                  >
                    <div
                      className={cn(
                        "col-span-2 md:col-span-1",
                        (index + 1) % 2 && "md:col-[2]",
                      )}
                    >
                      <span className="text-white">0{index + 1}</span>
                      <h3 className="mb-2 mt-1 text-lg font-normal text-white">
                        {item?.title}
                      </h3>
                      <p className="font-inter font-extralight text-primary-100">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>

      {/*  */}
      <section className="bg-footer2 py-16">
        <div className="wrapper gap-5 md:grid md:grid-cols-[1.3fr_2fr] xl:gap-12">
          <h2 className="mb-4 text-2xl font-medium text-white md:text-3xl md:leading-tight lg:text-4xl lg:leading-snug">
            We&apos;re passionate <br className="hidden xl:block" />
            about building excellent product
          </h2>

          <div>
            <p className="font-inter font-extralight text-primary-100">
              Transform your career trajectory through our intensive year-long
              mentorship program. At I-Sentry Technologies, we don&apos;t just
              teach—we immerse you in real-world projects, surround you with
              industry experts, and guide your journey from aspiring developer
              to tech professional.
            </p>

            <EachElement
              of={faqLists}
              render={(faq: IProps, index: number) => {
                return (
                  <Accordion
                    asChild
                    key={index}
                    type="single"
                    collapsible
                    className="group rounded-[6px] border-b-0 p-3 px-0 sm:py-5"
                  >
                    <AccordionItem value="item-1" className="items-start">
                      <AccordionTrigger className="p-0 text-left font-inter font-normal text-primary-50 hover:no-underline [&>svg]:hidden">
                        <div className="flex items-center gap-5">
                          <span className="text-sm font-extralight">
                            0{index + 1}
                          </span>
                          <h3 className="text-xl">{faq.title}</h3>
                        </div>
                        <span>
                          <Plus
                            size={20}
                            className="group-data-[state=open]:hidden"
                          />
                          <Minus
                            size={20}
                            className="hidden group-data-[state=open]:inline-block"
                          />
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0 pt-4 font-light text-primary-200">
                        {faq.content}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }}
            />
          </div>
        </div>
      </section>

      <div className="wrapper py-10 md:grid md:grid-cols-[40%_50%] md:justify-between lg:grid-cols-[40%_40%]">
        <div className="mb-10 md:mb-0">
          <h2 className="text-2xl font-medium text-white md:text-3xl md:leading-tight">
            Wherever you are in <br className="hidden md:block" />
            your career
          </h2>
          <ul className="mt-6 space-y-3 font-inter text-primary-100">
            <li>Student</li>
            <li>Apprenticeships</li>
            <li>Early career professionals</li>
            <li>Experienced professionals</li>
          </ul>
          <SmartButton
            variant="bright"
            buttonText="Explore opportunities"
            className="mt-6"
          />
        </div>
        <div className="">
          <p className="font-inter font-extralight text-primary-100">
            Transform your career trajectory through our intensive year-long
            mentorship program. At I-Sentry Technologies, we don&apos;t just
            teach—we immerse you in real-world projects, surround you with
            industry experts, and guide your journey from aspiring developer to
            tech professional.
          </p>

          <Image
            src={Placeholder}
            alt="Placeholder"
            className="mt-6 h-[300px] w-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Services;

type IProps = {
  title: string;
  content: string;
};

const ourApproaches: IProps[] = [
  {
    title: "Research",
    content:
      "Learn about our workshop opportunities and application process for aspiring developers.",
  },
  {
    title: "Define",
    content:
      "Learn about our workshop opportunities and application process for aspiring developers.",
  },
  {
    title: "Execution",
    content:
      "Learn about our workshop opportunities and application process for aspiring developers.",
  },
  {
    title: "Evaluation",
    content:
      "Learn about our workshop opportunities and application process for aspiring developers.",
  },
];

const faqLists = [
  {
    title: "Research & Strategy",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum vitae sed nulla placerat massa blandit velit netus nulla. Ultrices amet urna interdum rutrum. Quam feugiat porttitor libero hac. At pellentesque blandit at posuere lacus eget non semper aliquam. Enim in pharetra libero cursus. Ornare turpis suspendisse id sed nec elementum fames in sit.",
  },
  {
    title: "Product Design",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum vitae sed nulla placerat massa blandit velit netus nulla. Ultrices amet urna interdum rutrum. Quam feugiat porttitor libero hac. At pellentesque blandit at posuere lacus eget non semper aliquam. Enim in pharetra libero cursus. Ornare turpis suspendisse id sed nec elementum fames in sit.",
  },
  {
    title: "Mentorship",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum vitae sed nulla placerat massa blandit velit netus nulla. Ultrices amet urna interdum rutrum. Quam feugiat porttitor libero hac. At pellentesque blandit at posuere lacus eget non semper aliquam. Enim in pharetra libero cursus. Ornare turpis suspendisse id sed nec elementum fames in sit.",
  },
];

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";
import EachElement from "@/components/widgets/list_rendering";
import { IProps } from "../../app/services/page";

const ServiceFaqs = () => {
  return (
    <section className="bg-footer2 py-16">
      <div className="wrapper gap-5 md:grid md:grid-cols-2 xl:gap-12">
        <div className="mb-5">
          <h2 className="mb-2 text-2xl font-medium text-white md:text-3xl md:leading-tight lg:text-balance lg:text-4xl lg:leading-snug">
            We&apos;re passionate <br className="hidden xl:block" />
            about building excellent product
          </h2>
          <p className="font-inter font-extralight text-primary-100">
            At I-Sentry Technologies, we blend innovation, strategy, and
            creativity to transform ideas into impactful solutions
          </p>
        </div>

        <div>
          <p className="font-inter font-extralight text-primary-100">
            Our holistic approach ensures that every step of the process, from
            initial research to final development, is executed with precision,
            passion, and purpose. Explore how we turn concepts into
            groundbreaking products.
          </p>
          <Accordion
            type="single"
            collapsible
            className="group rounded-[6px] sm:py-5"
          >
            <EachElement
              of={faqLists}
              render={(faq: IProps, index: number) => {
                return (
                  <AccordionItem
                    key={index}
                    value={"item-" + index}
                    className="border-b-0 p-3 px-0"
                  >
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
                );
              }}
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFaqs;

const faqLists = [
  {
    title: "Research & Strategy",
    content:
      "We start by understanding your goals, market trends, and user needs. With data-driven insights, we define a clear roadmap to success.",
  },
  {
    title: "Product Design",
    content:
      "Our design team crafts intuitive and engaging experiences, blending aesthetics with functionality to create user-centric products.",
  },
  {
    title: "Mentorship",
    content:
      "Leveraging cutting-edge technologies, we build scalable, reliable, and high-performing solutions tailored to your needs.",
  },
];

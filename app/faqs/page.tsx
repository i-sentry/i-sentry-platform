import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleMinus, CirclePlus } from "lucide-react";

const Faqs = () => {
  return (
    <>
      <section className="py-20 pt-28 lg:pt-[150px]">
        <div className="wrapper md:grid md:grid-cols-[1.5fr_2fr] md:gap-4 lg:grid-cols-2 lg:gap-10">
          <div className="">
            <h4 className="text-sm text-secondary-200">Support</h4>
            <h1 className="font- mb-5 mt-3 text-3xl font-medium text-white md:text-4xl lg:text-[42px]">
              FAQs
            </h1>
            <p className="font-light leading-normal text-primary-200">
              Everything you need to know about the product and billing.
              Can&apos;t find the answer you&apos;re looking for? Please{" "}
              <a href="#">chat to our friendly team</a>.
            </p>
          </div>

          <div className="mt-8 space-y-1 rounded-xl border border-[#F4F4F414] bg-footer2 p-3 md:mt-0 lg:p-5">
            {faqLists?.map((faq, index) => {
              return (
                <Accordion
                  asChild
                  key={index}
                  type="single"
                  collapsible
                  className="group rounded-[6px] border-b-0 p-3 data-[state=open]:border data-[state=open]:border-[#FAFAFA1F] data-[state=open]:bg-footer2 sm:p-5"
                >
                  <AccordionItem value="item-1" className="items-start">
                    <AccordionTrigger className="p-0 text-left font-inter font-normal text-primary-50 hover:no-underline [&>svg]:hidden">
                      {faq.title}
                      <span>
                        <CirclePlus
                          size={20}
                          className="group-data-[state=open]:hidden"
                        />
                        <CircleMinus
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
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;

const faqLists = [
  {
    title: "What services does I-sentry offer?",
    content:
      "We offer software development, product design, technical consulting, and professional mentorship programs. Our services include web and mobile development, UI/UX design, and cloud solutions.",
  },
  {
    title: "How does the mentorship program work?",
    content:
      "Our mentorship program combines hands-on projects, one-on-one guidance, and group workshops. Participants work with experienced developers on real projects over 3-6 months.",
  },
  {
    title: "Why do you work with both startups and enterprise clients?",
    content:
      "Yes, we work with businesses of all sizes. Our solutions are scalable and can be tailored to meet the needs of startups, SMEs, and enterprise organizations.",
  },
  {
    title: "What is your project development process?",
    content:
      "We follow an agile methodology with clear milestones and regular communication. Each project starts with discovery, followed by iterative development cycles and continuous deployment.",
  },
  {
    title: "How do you handle project pricing?",
    content:
      "We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based arrangements. Each quote is customized based on project requirements.",
  },
];

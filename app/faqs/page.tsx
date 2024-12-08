import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleMinus, CirclePlus } from "lucide-react";
import BannerIllustration from "@/components/BannerIllustration";

const Faqs = () => {
  return (
    <>
      <section className="relative py-20 pt-28 lg:pt-[150px]">
        {/* SVG BG */}
        <BannerIllustration />

        <div className="wrapper relative z-10 md:grid md:grid-cols-[1.5fr_2fr] md:gap-4 lg:grid-cols-2 lg:gap-10">
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
            <Accordion type="single" collapsible className="">
              {faqLists?.map((faq, index) => {
                return (
                  <AccordionItem
                    key={index}
                    value={"item-" + index}
                    className="group rounded-[6px] border-b-0 p-3 data-[state=open]:border data-[state=open]:border-[#FAFAFA1F] data-[state=open]:bg-footer2 sm:p-5"
                  >
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
                );
              })}
            </Accordion>
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-3xl text-balance text-center font-light leading-normal text-primary-200">
          Please let me know if you have any other questions! Our team is here
          to provide the guidance and support you need.
        </p>
      </section>
    </>
  );
};

export default Faqs;

const faqLists = [
  {
    title: "What services does I-sentry offer?",
    content:
      "I-Sentry provides a comprehensive suite of digital solutions and services to help businesses drive innovation and growth. This includes software development, cloud architecture, data analytics, and more. Our team collaborates closely with clients to deliver tailored solutions that solve their unique challenges.",
  },
  {
    title: "How does the mentorship program work?",
    content:
      "Our mentorship program is designed to empower aspiring developers and accelerate their careers in the tech industry. Participants gain hands-on experience working alongside our expert engineers and product specialists, while also receiving personalized guidance, training, and networking opportunities. The program includes structured learning modules, mentorship sessions, and the chance to contribute to real-world projects.",
  },
  {
    title: "Why do you work with both startups and enterprise clients?",
    content:
      "At I-Sentry, we believe in the power of diverse perspectives and experiences. By collaborating with clients ranging from agile startups to established enterprises, we're able to continuously expand our knowledge, refine our processes, and deliver innovative solutions that drive meaningful impact. This cross-pollination of ideas and approaches keeps us at the forefront of industry trends and emerging technologies.",
  },
  {
    title: "What is your project development process?",
    content:
      "Our project development approach is centered on iterative, user-centric design and agile methodologies. We start by deeply understanding your business requirements and objectives, then ideate and prototype potential solutions. From there, we work in sprints to develop, test, and refine the product, ensuring close collaboration with your team throughout the entire lifecycle. This allows us to be responsive to changing needs and deliver high-quality results efficiently.",
  },
  {
    title: "How do you handle project pricing?",
    content:
      "At I-Sentry, we believe in being fully transparent about our pricing structure. We offer a range of flexible engagement models, including fixed-price, time-and-materials, and dedicated development team arrangements. Our pricing is based on the complexity of the project, the expertise required, and the timeline. We're also happy to discuss custom pricing structures tailored to your specific needs and budget.",
  },
];

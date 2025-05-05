import React from "react";
import ServiceCard from "./service_card";
import SmartButton from "../custom_button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type ServiceProp = {
  title: string;
  listItems: string[];
};

const Services = () => {
  useGSAP(() => {
    gsap.from(".service-header", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      ease: "power2.inOut",
      scrollTrigger: ".service-header",
    });

    gsap.from(".service-card", {
      // y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.8,
        from: "start",
      },
      ease: "power2.inOut",
      scrollTrigger: ".service-card",
    });
  }, []);
  return (
    <>
      <section className="py-10">
        <div className="wrapper">
          <div className="space-y-6 text-center md:mx-auto md:max-w-xl">
            <h2 className="service-header text-2xl font-semibold text-white md:text-4xl md:leading-tight">
              Innovative Solutions for a<br className="hidden md:block" />{" "}
              Rapidly Evolving World
            </h2>
            <p className="service-header font-inter text-sm font-extralight leading-6 text-[#C2C2C2] md:text-base">
              At I-Sentry Technologies, we stand at the vanguard of
              technological advancement. Our cutting-edge solutions and global
              expertise empower businesses to navigate and thrive in the digital
              landscape of tomorrow.
            </p>
            <SmartButton
              variant="bright"
              buttonText="Join our Program"
              className="service-header mt-12 border-[#F4F4F40D]"
              url="/mentorships"
              isLink
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
            <div className="service-card space-y-4">
              <h3 className="text-base font-medium text-white md:text-lg">
                Our Mentorship Program
              </h3>
              <p className="text-sm font-extralight leading-6 text-[#C2C2C2] md:text-base md:leading-6">
                Transform your career trajectory through our intensive year-long
                mentorship program. At I-Sentry Technologies, we don&apos;t just
                teach—we immerse you in real-world projects, surround you with
                industry experts, and guide your journey from aspiring developer
                to tech professional.
              </p>

              <SmartButton
                ariaLabel="Learn more about our mentorship program"
                variant="dark"
                buttonText="Learn more"
                className="mt-12 border-[#F4F4F40D] bg-grad-alt backdrop-blur-0 hover:shadow-none"
                showAnimatedIcon
                url="/mentorships"
                isLink
              />
            </div>
            <div
              key={"service-list"}
              className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:mt-10"
            >
              {services.map((item: ServiceProp, index: number) => (
                <React.Fragment key={index}>
                  <ServiceCard key={"0" + index + 1} index={index} {...item} />
                  {index === 1 && (
                    <hr className="mt-3 border-0 border-t border-[#f9f9f92d] sm:col-span-2" />
                  )}
                  {index === 3 && (
                    <hr className="mt-3 border-0 border-t border-[#f9f9f92d] sm:col-span-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

const services: ServiceProp[] = [
  {
    title: "Program Foundation Building",
    listItems: [
      "Technical skill assessment and personalized learning path",
      "Core technology stack immersion",
      "Industry best practices and standards",
      "Weekly one-on-one mentoring sessions",
    ],
  },

  {
    title: "Practical Application",
    listItems: [
      "Real-world project assignments",
      "Collaborative development experience",
      "Code review and feedback sessions",
      "Technical documentation practice",
    ],
  },

  {
    title: "Professional Development",
    listItems: [
      "Career path planning and guidance",
      "Industry networking opportunities",
      "Mock technical interviews",
      "Portfolio development support",
    ],
  },

  {
    title: "Industry Integration",
    listItems: [
      "Client project participation",
      "Team collaboration experience",
      "Professional certification preparation",
      "Job placement assistance",
    ],
  },
];

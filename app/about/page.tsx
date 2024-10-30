import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.png";
import AboutImg from "@/public/images/about-us.png";
import EachElement from "@/components/widgets/list_rendering";
import SmartButton from "@/components/custom_button";

const About = () => {
  return (
    <>
      <section className="pb-16 pt-28">
        <div className="wrapper">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base text-secondary-200">About us</p>
            <h1 className="mb-4 mt-3 font-dm-sans text-[32px] font-normal text-white md:text-[3rem]">
              I-Sentry is building
              <br className="sm:hidden md:block" /> cutting-edge innovations
            </h1>
          </div>

          <div className="mt-10 gap-16 lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-[0.8fr_2fr]">
            <h2 className="mb-2 font-dm-sans text-2xl font-medium text-primary-50 lg:text-3xl">
              We&apos;re passionate about building excellent product
            </h2>
            <div className="space-y-3 xl:ml-32">
              <p className="text-base font-light text-primary-100">
                At I-Sentry, we are a team of passionate individuals dedicated
                to transforming complex challenges into seamless digital
                solutions. Founded with a vision to innovate, we specialize in
                creating custom software that propels businesses forward, and
                enhances user experiences, all while nurturing future tech
                leaders.
              </p>
              <p className="text-base font-light text-primary-100">
                With a client-first approach, we focus on understanding your
                unique needs and delivering tailored software that meets your
                goals. Whether you&apos;re a startup looking to scale or an
                established enterprise seeking efficiency, our solutions are
                designed to empower your business through technology.
              </p>
              <p className="text-base font-light text-primary-100">
                With a client-first approach, we prioritize understanding your
                unique needs and delivering tailored software that aligns your
                goals. Whether you&apos;re a startup aiming to scale or an
                established enterprise seeking efficiency, our solutions are
                designed to empower your business through technology.
              </p>
            </div>
          </div>

          <div className="mt-8 gap-5 space-y-8 md:grid md:grid-cols-[1.5fr_2fr] md:space-y-0">
            <Image
              src={AboutImg}
              alt="Placeholder"
              className="h-[400px] w-full rounded-xl object-cover object-center md:h-full"
            />

            <div className="divide-y-[1px] divide-primary-50/20 rounded-[8px] border border-primary-50/20 bg-box p-5">
              {/* OUR VISION */}
              <div className="space-y-3 pb-5">
                <h3 className="font-dm-sans text-[20px] font-medium text-white">
                  Our Vision
                </h3>
                <p className="text-base font-light text-primary-100">
                  At Isentry, we are passionate about using technology to
                  empower your business to thrive and innovate. business.
                </p>
                <p className="text-base font-light text-primary-100">
                  We envision a Future where every business regardless of
                  it&apos;s size and sectors can harness the full potential of
                  technology to achieve it&apos;s goals and make a positive
                  impact on the world.
                </p>
                <p className="text-base font-light text-primary-100">
                  Be at the forefront of your industry with a seamless
                  integration between innovative technology and business.
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
                          className="rounded-full bg-transparent px-6 py-3 text-sm font-light text-white"
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

      <section className="bg-secondary-900/25 py-20">
        <div className="wrapper lg:grid lg:grid-cols-2 lg:gap-x-32 xl:gap-x-64">
          <div>
            <h3 className="mb-2 font-dm-sans text-2xl font-medium text-primary-50 md:text-3xl lg:text-4xl lg:leading-[54px]">
              Learn, innovation and build with real-life projects
            </h3>
            <p className="text-base font-light text-primary-100">
              Enhance your career path with our intensive year-long mentorship
              program at I-Sentry Technologies. We don&apos;t just teach; we
              immerse you in real-world projects, connect you with industry
              experts, and guide you from an aspiring developer to a
              professional in the tech field
            </p>
          </div>
          <div className="mt-2 lg:mt-0">
            <ul className="list-disc pl-5 text-base font-light text-primary-100">
              <li>Web Development (HTML, CSS, JavaScript frameworks)</li>
              <li>Mobile App Development (React Native, Flutter, Swift)</li>
              <li>Cloud Computing (AWS, Azure, Google Cloud)</li>
              <li>DevOps & CI/CD (Docker, Kubernetes, Jenkins)</li>
              <li>Software Testing & QA (Selenium, Jest, Unit Testing)</li>
            </ul>

            <SmartButton
              variant="dark"
              showAnimatedIcon
              buttonText="Explore Oppotunities"
              className="mt-8 py-3"
            />
          </div>
          <Image
            src={AboutImg}
            alt="Placeholder"
            className="mt-6 h-[400px] w-full rounded-xl object-cover object-center lg:col-span-2"
          />
        </div>
      </section>

      <section className="wrapper">
        <h3 className="mb-2 font-dm-sans text-2xl font-medium text-primary-50">
          Learn, innovation and build with real-life projects
        </h3>
        <div>
          <div className="">
            <Image
              src={Placeholder}
              alt="Placeholder"
              className="h-[400px] w-full rounded-xl object-cover object-center"
            />
            <h3 className="font-inter text-white">Dianne Russell</h3>
            <p className="font-inter capitalize text-primary-100">ceo</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

const coreValues = [
  "Innovation",
  "Quality",
  "Collaboration",
  "Integrity",
  "Customer-Centricity",
  "Sustainability",
];

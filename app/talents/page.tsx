import Partners from "@/components/home-comps/partners_section";
import Testimonials from "@/components/home-comps/testimonials";
import React from "react";
import Placeholder from "@/public/images/placeholder.png";
import Image from "next/image";
import SmartButton from "@/components/custom_button";

const Talents = () => {
  return (
    <>
      <section className="pb-20 pt-28 lg:pt-40">
        <div className="wrapper">
          <div className="text-center md:mx-auto md:max-w-xl">
            <h4 className="text-sm text-secondary-200">Talents</h4>
            <h1 className="my-4 text-3xl font-medium leading-[1.3] text-white sm:text-5xl sm:leading-snug">
              Build your tech team
            </h1>
            <p className="font-light leading-normal text-primary-200">
              Our mentorship programs are 99% hands-on. You get to design and
              build outstanding projects that can give you an edge in a hiring
              process.
            </p>

            <div className="mx-auto mt-12 max-w-md">
              <form id="schedule_a_meeting">
                <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-full sm:w-max sm:flex-nowrap sm:border sm:border-[#FAFAFA1F] sm:bg-field sm:focus-within:border-secondary-400">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    className="form-input w-full rounded-full border-[#FAFAFA1F] bg-[rgb(250,250,250)]/10 py-3.5 pl-5 text-center font-inter text-sm text-primary-100 placeholder:text-[#667085] focus-within:border-secondary-400 focus:ring-0 sm:border-0 sm:bg-transparent sm:focus:border-0"
                    placeholder="Email address"
                  />
                  <SmartButton
                    showAnimatedIcon
                    variant="dark"
                    buttonText="Schedule a call"
                    className="px-6 py-3"
                    isLink
                    url="https://calendly.com/isentrytechnologies"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SPONSORS */}
      <section className="py-10">
        <div className="wrapper">
          <h2 className="mb-4 text-center font-dm-sans text-2xl font-medium text-white md:text-3xl">
            Our sponsors
          </h2>
        </div>

        <Partners className="border-none" />
      </section>

      {/* WHAT YOU GET */}
      <section className="wrapper py-10">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-2 text-center font-dm-sans text-2xl font-medium text-white md:text-3xl">
            What you get
          </h2>
          <p className="text-center font-light leading-normal text-primary-200">
            Our internships are 99% hands-on. Our interns get to design and
            build outstanding projects that gives them industry experience with
            tools
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 md:grid-cols-3">
          <div className="flex h-[200px] items-end rounded-[12px] bg-intern p-6 md:h-[250px] xl:text-2xl">
            <h3 className="text-lg text-white">Industry trained employee</h3>
          </div>
          <div className="flex h-[200px] items-end rounded-[12px] bg-intern p-6 md:h-[250px] xl:text-2xl">
            <h3 className="text-lg text-white">Problem-Solving Abilities</h3>
          </div>
          <div className="flex h-[200px] items-end rounded-[12px] bg-intern p-6 md:h-[250px] xl:text-2xl">
            <h3 className="text-lg text-white">
              Professionalism and Work Ethic
            </h3>
          </div>
        </div>
      </section>

      {/* PROJECTS BY INTERNS */}
      <section className="py-16">
        <div className="wrapper">
          <h2 className="mb-10 text-center font-dm-sans text-2xl font-medium text-white md:text-4xl">
            Projects built by our interns
          </h2>

          <div className="space-y-28">
            <div className="grid md:grid-cols-2 md:items-center md:gap-14">
              <Image
                src={Placeholder}
                alt="placeholder"
                className="w-full rounded-[8px]"
              />
              <div>
                <h3 className="font-dm-sans text-2xl font-medium text-white md:text-3xl">
                  Blinkos App
                </h3>
                <p className="mb-6 mt-4 font-light text-primary-100">
                  Transform your career trajectory through our intensive
                  year-long mentorship program. At I-Sentry Technologies, we
                  don&apos;t just teach—we immerse you in real-world projects,
                  surround you with industry experts, and guide your journey
                  from aspiring developer to tech professional.
                </p>

                <div>
                  <p className="mb-3 font-light text-primary-100">
                    Interns Team
                  </p>
                  <div className="flex items-center -space-x-3">
                    {Array.from({ length: 10 }, (_: never, idx: number) => {
                      return (
                        <Image
                          key={idx}
                          src={Placeholder}
                          alt="placeholdr"
                          className="h-10 w-10 rounded-full border-2 border-white object-cover object-center"
                        />
                      );
                    })}
                  </div>
                </div>

                <SmartButton
                  variant="bright"
                  buttonText="View application"
                  className="mt-6"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:items-center md:gap-14">
              <div>
                <h3 className="font-dm-sans text-2xl font-medium text-white md:text-3xl">
                  Blinkos App
                </h3>
                <p className="mb-6 mt-4 font-light text-primary-100">
                  Transform your career trajectory through our intensive
                  year-long mentorship program. At I-Sentry Technologies, we
                  don&apos;t just teach—we immerse you in real-world projects,
                  surround you with industry experts, and guide your journey
                  from aspiring developer to tech professional.
                </p>

                <div>
                  <p className="mb-3 font-light text-primary-100">
                    Interns Team
                  </p>
                  <div className="flex items-center -space-x-3">
                    {Array.from({ length: 10 }, (_: never, idx: number) => {
                      return (
                        <Image
                          key={idx}
                          src={Placeholder}
                          alt="placeholdr"
                          className="h-10 w-10 rounded-full border-2 border-white object-cover object-center"
                        />
                      );
                    })}
                  </div>
                </div>

                <SmartButton
                  variant="bright"
                  buttonText="View application"
                  className="mt-6"
                />
              </div>
              <Image
                src={Placeholder}
                alt="placeholder"
                className="w-full rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Talents;

import Image from "next/image";
import React from "react";
import Placeholder from "@/public/images/image.webp";
import SmartButton from "@/components/custom_button";
import EachElement from "../widgets/list_rendering";
import { IProps } from "@/app/services/page";

const MoreServices = () => {
  return (
    <div className="wrapper py-10 md:grid md:grid-cols-[40%_50%] md:justify-between lg:grid-cols-[45%_45%]">
      <div className="mb-10 md:mb-0">
        <h2 className="text-2xl font-medium text-white md:text-3xl md:leading-tight">
          Wherever You Are in Your Career, iSentry is Here to Support You
        </h2>
        <div className="mt-6 space-y-3 font-inter text-primary-100">
          <EachElement
            of={lists}
            render={(item: IProps, index: number) => (
              <div
                key={index}
                className="inline-grid grid-cols-[8px_1fr] items-start gap-3"
              >
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-grad"></span>
                <div>
                  <h3 className="text-base text-white">{item?.title}</h3>
                  <p className="text-base font-light text-primary-200">
                    {item?.content}
                  </p>
                </div>
              </div>
            )}
          />
        </div>
        <SmartButton
          variant="bright"
          buttonText="Explore opportunities"
          className="mt-6"
          url="/careers"
          isLink
        />
      </div>
      <div className="">
        <h2 className="mb-2 text-2xl font-medium text-white md:leading-tight">
          Empowering Your Growth at Every Step
        </h2>
        <p className="font-inter font-extralight text-primary-100">
          At iSentry, we are dedicated to transforming your potential into
          excellence. Through our year-long mentorship and career development
          programs, we offer more than just learning—we provide you with:
        </p>

        <ul className="my-3">
          <li className="inline-flex items-center gap-3 text-sm font-light text-white hover:text-secondary-200 md:text-base">
            <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
            Real-world projects to refine your skills.
          </li>
          <li className="inline-flex items-center gap-3 text-sm font-light text-white hover:text-secondary-200 md:text-base">
            <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
            Access to industry experts and thought leaders.
          </li>
          <li className="inline-flex items-center gap-3 text-sm font-light text-white hover:text-secondary-200 md:text-base">
            <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
            Personalized guidance to achieve your career goals.
          </li>
        </ul>

        <p className="font-inter font-extralight text-primary-100">
          Start your journey from an aspiring tech enthusiast to an accomplished
          professional.
        </p>

        <Image
          src={Placeholder}
          alt="Placeholder"
          className="mt-6 h-[250px] w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default MoreServices;

const lists = [
  {
    title: "Student Programs",
    content:
      "Discover hands-on learning opportunities designed to prepare you for the tech industry.",
  },
  {
    title: "Apprenticeships",
    content:
      "Gain real-world experience while working alongside industry leaders and mentors.",
  },
  {
    title: "Early Career Professionals",
    content:
      "Accelerate your growth with tailored mentorship and cutting-edge projects.",
  },
  {
    title: "Experienced Professionals",
    content:
      "Leverage your expertise to lead impactful innovations and advance your career.",
  },
];

import SmartButton from "@/components/custom_button";
import PriceCard from "@/components/mentorship-comps/price_card";
import { Zap } from "lucide-react";
import React from "react";
import InternImage from "@/public/images/internship.jpeg";
import Image from "next/image";

export type PriceListProp = {
  package: string;
  duration: string;
  description: string;
  features: string[];
  badge: string;
  
};

const priceList: PriceListProp[] = [
  {
    package: "Starter Mentorship",
    duration: "3 Months",
    description: "Lorem Ipsum",
    features: [
      "1-on-1 monthly sessions",
      "Career guidance",
      "Resume review",
      "Basic project feedback",
      "Email support",
      "Email support",
      "Email support",
    ],
    badge: "",
  },
  {
    package: "Professional Growth",
    duration: "6 Months",
    description: "Lorem Ipsum",
    features: [
      "Bi-weekly 1-on-1 sessions",
      "Personalized learning path",
      "Portfolio development",
      "Interview preparation",
      "Priority email support",
      "Industry networking",
      "Industry networking",
    ],
    badge: "Most popular",
  },
  {
    package: "Expert Track",
    duration: "12 Months",
    description: "Lorem Ipsum",
    features: [
      "Weekly 1-on-1 sessions",
      "Custom project mentoring",
      "Job placement assistance",
      "Technical interview prep",
      "24/7 chat support",
      "Industry connections",
      "Certification guidance",
    ],
    badge: "coming soon",
  },
];

const Mentorships = () => {
  return (
    <>
      {/* BANNER */}
      <section className="py-24">
        <div className="wrapper md:mx-auto md:max-w-4xl xl:max-w-5xl">
          <div className="text-center md:mx-auto md:max-w-xl">
            <h4 className="text-sm text-secondary-200">Mentorships</h4>
            <h1 className="my-4 text-3xl font-medium leading-[1.3] text-white sm:text-5xl sm:leading-snug">
              Join our Program
            </h1>
            <p className="font-light leading-normal text-primary-200">
              Our mentorship programs are 99% hands-on. You get to design and
              build outstanding projects that can give you an edge in a hiring
              process.
            </p>

            <div className="mt-12 flex items-center justify-center gap-2">
              <SmartButton variant="bright" buttonText="Mentorship" />
              <SmartButton
                variant="dark"
                buttonText="Tech Internship"
                showAnimatedIcon
                isLink
                url="/intership"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="wrapper space-y-6 py-8 md:grid md:grid-cols-2 md:gap-5 md:space-y-0 md:py-12 lg:gap-6 xl:grid-cols-3">
        {priceList.map((item, index) => {
          return <PriceCard list={item} key={index} />;
        })}
      </section>

      {/* CERTIFICATION */}
      <section className="wrapper py-16 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-8">
        <div className="">
          <h3 className="mb-2 text-2xl text-white">Our Certifications</h3>
          <p className="text-base font-light leading-normal text-primary-200">
            Our mentorship programs are 99% hands-on. You get to design and
            build outstanding projects that can give you an edge in a hiring
            process.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-[#F4F4F414] p-6 lg:mt-0">
          <h3 className="mb-8 text-lg text-white">
            Professional Certifications
          </h3>
          <div className="">
            <h4 className="mb-3 text-base font-light text-white">
              Technical Certifications
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-base font-light leading-normal text-white">
              <li>Full-Stack Development (MERN Stack)</li>
              <li>Cloud Computing (AWS/Azure)</li>
              <li>Data Science & Machine Learning</li>
              <li> DevOps & CI/CD</li>
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="mb-3 text-base font-light text-white">
              Industry-Recognized Credentials
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-base font-light leading-normal text-white">
              <li>Industry-Recognized Credentials</li>
              <li>Project Management Professional (PMP)</li>
              <li>Agile & Scrum Certification</li>
              <li>Cybersecurity Fundamentals</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="wrapper py-16">
        <div className="md:w-1/2">
          <h4 className="text-sm text-secondary-200">Solutions</h4>
          <h3 className="my-4 text-2xl font-medium leading-[1.3] text-white">
            Transform Your Business with Tailored Tech Solutions
          </h3>
          <p className="font-light leading-normal text-primary-200">
            At I-Sentry Technologies, we offer a comprehensive range of
            technology services designed to help your business thrive in the
            digital age.
          </p>
        </div>

        <div className="grid gap-16 md:mt-12 md:grid-cols-2">
          <div className="mt-16 space-y-7 md:mt-0">
            {solutions.map((item: SolutionProp, index: number) => {
              return <SolutionCard item={item} key={index} />;
            })}
          </div>
          <Image
            src={InternImage}
            alt="A cursor "
            className="self-stretch rounded-xl"
          />
        </div>
      </section>
    </>
  );
};

export default Mentorships;

type SolutionProp = {
  icon: React.JSX.Element;
  title: string;
  description: string;
};

const solutions: SolutionProp[] = [
  {
    icon: <Zap />,
    title: "Custom Software Development",
    description:
      "From concept and design to development and deployment, we ensure your custom solution integrates seamlessly into your existing systems while offering scalability and flexibility for future growth.",
  },
  {
    icon: <Zap />,
    title: "Cloud Solutions",
    description:
      "Whether you need cloud storage, computing power, or software as a service (SaaS), we tailor our cloud services to fit your business model, enabling you to operate more efficiently while reducing overhead costs.",
  },
  {
    icon: <Zap />,
    title: "Tech Consultancy",
    description:
      "From initial planning and roadmapping to implementation and scaling, we work with you to ensure your technology aligns with your business goals, giving you a competitive edge in today’s digital world.",
  },
];

const SolutionCard = ({ item }: { item: SolutionProp }) => {
  return (
    <div className="grid grid-cols-[48px_1fr] items-start gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border-[8px] border-solid border-[#F9F5FF] bg-[#F4EBFF] text-[#7F56D9]">
        {item?.icon}
      </span>
      <div>
        <h3 className="mb-2 font-dm-sans text-lg text-white">{item?.title}</h3>
        <p className="font-inter text-sm font-light text-primary-100 md:text-base">
          {item?.description}
        </p>
        <SmartButton
          showAnimatedIcon
          variant="dark"
          buttonText="Schedule a call"
          className="px-6 py-3"
          isLink
          url="https://calendly.com/isentrytechnologies"
        />
      </div>
    </div>
  );
};

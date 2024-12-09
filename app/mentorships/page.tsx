import SmartButton from "@/components/custom_button";
import PriceCard from "@/components/mentorship-comps/price_card";
import { Zap } from "lucide-react";
import React from "react";
import InternImage from "@/public/images/internship.jpeg";
import Image from "next/image";
import BannerIllustration from "@/components/BannerIllustration";

export type PriceListProp = {
  package: string;
  duration: string;
  description: string;
  features: string[];
  badge: string;
  comingSoon: boolean;
};

/* 


*/

const priceList: PriceListProp[] = [
  {
    package: "Starter Mentorship",
    duration: "3 Months",
    description:
      "Perfect for beginners and students starting their professional journey.",
    features: [
      "Weekly 1-on-1 mentorship sessions.",
      "Career guidance and resume review.",
      "Access to our WhatsApp Group for peer support and mentor advice.",
      "Basic project feedback.",
      "Hands-on project management using Jira for task organization.",
      "Basic certification upon completion.",
      "Access to exclusive career resources, including templates, guides, and recorded workshops.",
    ],
    badge: "",
    comingSoon: false,
  },
  {
    package: "Professional Growth",
    duration: "6 Months",
    description:
      "Ideal for professionals eager to advance and build a strong network.",
    features: [
      "Personalized mentorship plans tailored to your career goals.",
      "Interview preparation, mock sessions, and career coaching.",
      "Access to our vibrant Slack Channels, connecting you to mentors, industry experts, and alumni.",
      "Collaborative project management using Jira for real-world experience.",
      "Mid-tier project portfolio development for showcasing your skills.",
      "Free access to select professional webinars and events.",
      "Networking opportunities through exclusive mentor-hosted Q&A sessions.",
    ],
    badge: "Most popular",
    comingSoon: false,
  },
  {
    package: "Expert Track",
    duration: "12 Months",
    description:
      "Designed for experts and leaders aiming for industry mastery.",
    features: [
      "Advanced mentorship with real-world project experience.",
      "Job placement assistance with industry connections.",
      "Access to Discord Channels, Slack, and other exclusive communities for 24/7 collaboration and networking.",
      "Priority mentorship and resources, with robust project portfolios tailored to top-tier roles.",
      "Advanced certifications in technical fields, leadership, and more.",
      "Exclusive project showcases to industry leaders and hiring partners.",
      "Unlimited access to premium tools and learning materials like online courses, software discounts, and research articles.",
    ],
    badge: "",
    comingSoon: true,
  },
];

const Mentorships = () => {
  return (
    <>
      {/* BANNER */}
      <section className="relative py-24 lg:py-28">
        <BannerIllustration />
        <div className="wrapper relative z-10 md:mx-auto md:max-w-4xl xl:max-w-5xl">
          <div className="text-center md:mx-auto md:max-w-3xl">
            <h4 className="text-sm text-secondary-200">Mentorships</h4>
            <h1 className="my-4 text-3xl font-medium leading-[1.3] text-white sm:text-5xl sm:leading-snug">
              Join our Program
            </h1>
            <p className="font-light leading-normal text-primary-200">
              Our mentorship programs are 99% hands-on, designed to immerse you
              in real-world projects and provide you with the skills to stand
              out in the tech industry. Whether you&apos;re a student, early
              professional, or seasoned expert, we&apos;ve got a tailored track
              for your growth.
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
            ISentry issues Professional Certifications upon successful program
            completion. These certifications are designed to boost your
            credibility and demonstrate your expertise to potential employers.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-[#F4F4F414] p-6 lg:mt-0">
          <h3 className="mb-8 text-lg text-white">
            Professional Certifications
          </h3>
          <div className="">
            <h4 className="mb-3 text-lg font-light text-white">
              Certification Includes:
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-base font-light leading-normal text-primary-100">
              <li>
                Technical Certifications in Web Development, AI/ML, and Data
                Science.
              </li>
              <li>Product Management Certifications.</li>
              <li>UX/UI Design Credentials.</li>
              <li>
                Recognized Training in Leadership and Agile Methodologies.
              </li>
            </ul>

            <p className="mt-4 font-medium text-white">
              Join us to earn credentials that employers trust.
            </p>
          </div>

          {/* <div className="mt-8">
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
          </div> */}
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
            We deliver innovative, scalable, and results-driven technology
            solutions to propel your business forward in today&apos;s digital
            landscape. Partner with us to unlock new opportunities and optimize
            your operations with cutting-edge expertise.
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
      "From ideation to deployment, we craft bespoke software solutions that seamlessly integrate with your existing systems. With a focus on scalability, security, and flexibility, we help your business grow and adapt to ever-changing needs.",
  },
  {
    icon: <Zap />,
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud to enhance efficiency and reduce operational costs. Whether it's storage, computing power, or SaaS applications, our solutions are designed to align with your business objectives and maximize performance.",
  },
  {
    icon: <Zap />,
    title: "Tech Consultancy",
    description:
      "Empower your business with strategic technology planning and execution. From initial consultation to implementation, we ensure that your digital transformation aligns perfectly with your business goals, giving you a competitive edge.",
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

        <div className="mt-2">
          <h4 className="font-medium text-white">Key Features</h4>
          <ul className="list-disc pl-3.5 text-sm font-light leading-normal text-white">
            <li className="text-primary-100">
              Comprehensive digital roadmaps for growth.
            </li>
          </ul>
        </div>
        <SmartButton
          showAnimatedIcon
          variant="dark"
          buttonText="Schedule a call"
          className="mt-4 object-cover object-center px-6 py-3"
          isLink
          url="https://calendly.com/isentrytechnologies"
        />
      </div>
    </div>
  );
};

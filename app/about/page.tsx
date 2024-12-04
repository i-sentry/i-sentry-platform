"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
// import Placeholder from "@/public/images/placeholder.png";
import AboutImg from "@/public/images/about-us.png";
import AboutLearn from "@/public/images/learn-about.webp";
import EachElement from "@/components/widgets/list_rendering";
import SmartButton from "@/components/custom_button";
import Team from "@/public/assets/mentees/Photo - Timilehin Abegunde.png";
import KingIBK from "@/public/images/team/3.png";
import Williams from "@/public/images/team/williams.webp";
import Akanimo from "@/public/images/team/Akanimo.webp";
import Bamgbade from "@/public/images/team/bamgbade.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import BannerAbout from "@/components/about-comps/BannerAbout";
const About = () => {
  return (
    <>
      <BannerAbout />

      <section className="wrapper">
        <div className="mt-10 gap-16 lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-[0.8fr_2fr]">
          <h2 className="mb-2 font-dm-sans text-2xl font-medium text-primary-50 lg:text-3xl">
            We&apos;re passionate about building transformative solutions
          </h2>
          <div className="space-y-3 xl:ml-32">
            <p className="text-base font-light text-primary-100">
              At I-Sentry, we are a team of passionate innovators dedicated to
              transforming complex challenges into seamless digital solutions.
              Founded with a vision to innovate, we specialize in creating
              custom software that propels businesses forward, while nurturing
              the next generation of tech leaders through our comprehensive
              training programs.
            </p>
            <p className="text-base font-light text-primary-100">
              With our client-first approach, we deliver tailored solutions that
              drive real business impact. Our expertise spans: Custom Enterprise
              Software Development, Cloud-Based Solutions, Digital
              Transformation Consulting, Technical Training & Mentorship
            </p>
            <p className="text-base font-light text-primary-100">
              Whether you&apos;re a startup aiming to scale or an established
              enterprise seeking efficiency, we provide the technological
              foundation for your success. Our dual focus on software excellence
              and talent development creates a unique ecosystem that benefits
              both businesses and aspiring tech professionals.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="wrapper">
          <div className="mt-8 gap-5 space-y-8 md:grid md:grid-cols-[1.5fr_2fr] md:space-y-0">
            <Image
              src={AboutImg}
              alt="Placeholder"
              className="hidden w-full self-stretch rounded-xl object-cover object-center md:block md:h-auto md:max-h-[750px]"
            />

            <div className="divide-y-[1px] divide-primary-50/20 rounded-[8px] border border-primary-50/20 bg-box p-5">
              {/* OUR VISION */}
              <div className="space-y-3 pb-5">
                <h3 className="font-dm-sans text-[20px] font-medium text-white">
                  Our Vision
                </h3>
                <p className="text-base font-light text-primary-100">
                  At Isentry, our mission is to drive technological advancement
                  through two key pillars: delivering innovative software
                  solutions and nurturing tech talent.
                </p>
                <p className="text-base font-light text-primary-100">
                  We aim to foster growth and efficiency by providing
                  state-of-the-art digital solutions while maintaining our
                  commitment to excellence, integrity, and client success.
                </p>
                <p className="text-base font-light text-primary-100">
                  We strive to be the bridge between current business needs and
                  future tech capabilities, transforming both organizations and
                  individuals through technology.
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
        <div className="wrapper lg:grid lg:grid-cols-2 lg:gap-x-32">
          <div>
            <h3 className="mb-2 font-dm-sans text-2xl font-medium text-primary-50 md:text-3xl lg:text-4xl lg:leading-[54px]">
              Learn, Innovate, and <br className="hidden md:block" />
              Build Your Tech Career
            </h3>
            <p className="text-base font-light text-primary-100">
              Enhance your career path with our intensive six month mentorship
              program at I-Sentry Technologies. We combine hands-on learning
              with real-world projects, connecting you directly with industry
              experts. Our comprehensive program transforms aspiring developers
              into sought-after tech professionals through:
            </p>
            <ul className="mt-1 list-disc pl-4 text-base font-light text-primary-100">
              <li>Personalized mentorship from industry veterans</li>
              <li>Real client project experience</li>
              <li>Professional networking opportunities</li>
              <li>Career guidance and placement support</li>
            </ul>
          </div>
          <div className="mt-2 lg:mt-0">
            <ul className="list-disc pl-5 text-base font-light text-primary-100">
              <li>
                Web Development
                <ul className="list-disc pl-5">
                  <li>Frontend: HTML5, CSS3, JavaScript (React, Vue.js)</li>
                  <li>Backend: Node.js, Python, Java</li>
                  <li>Frameworks: Angular, Express.js</li>
                </ul>
              </li>
              <li>
                Mobile App Development
                <ul className="list-disc pl-5">
                  <li> React Native</li>
                  <li>Flutter</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                </ul>
              </li>
              <li>
                Cloud Computing
                <ul className="list-disc pl-5">
                  <li>Cloud Platforms: AWS, Azure, Google Cloud</li>
                  <li>DevOps Tools: Docker, Kubernetes, Jenkins</li>
                  <li>CI/CD Pipeline Implementation</li>
                </ul>
              </li>
              <li>
                Quality Assurance
                <ul className="list-disc pl-5">
                  <li>Automated Testing: Selenium, Jest</li>
                  <li>Unit Testing & Integration Testing</li>
                  <li>Performance Testing</li>
                </ul>
              </li>
            </ul>

            <SmartButton
              variant="dark"
              showAnimatedIcon
              buttonText="Explore Oppotunities"
              className="mt-8 py-3"
              url="/careers"
              isLink
            />
          </div>
          <Image
            src={AboutLearn}
            alt="A team discussing"
            className="mt-6 h-[400px] w-full rounded-xl object-cover object-center lg:col-span-2"
          />
        </div>
      </section>

      <section className="wrapper py-16 md:mt-24" id="team">
        <h3 className="mb-16 font-dm-sans text-2xl font-medium text-primary-50 md:text-3xl lg:text-center lg:text-4xl">
          Meet the core innovators behind
          <br className="hidden md:block" /> our success
        </h3>
        <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          <EachElement
            of={coreTeam}
            render={(member: MemberProps) => {
              return (
                <>
                  <div className="">
                    <Image
                      src={member.photo}
                      alt="Placeholder"
                      className="mb-4 h-[300px] w-full rounded-xl object-cover object-center xl:h-[400px]"
                    />
                    <h3 className="font-inter text-primary-50">
                      {member.name}
                    </h3>
                    <p className="font-inter capitalize text-primary-200">
                      {member.title}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-3">
                      <Link
                        href=""
                        className="text-secondary-50 duration-300 hover:text-secondary-400"
                      >
                        <BsLinkedin size={18} />
                      </Link>
                      <Link
                        href=""
                        className="text-secondary-50 duration-300 hover:text-secondary-400"
                      >
                        <BsTwitterX size={18} />
                      </Link>
                    </div>
                  </div>
                </>
              );
            }}
          />
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

type MemberProps = {
  photo: string | StaticImport;
  name: string;
  title: string;
};

const coreTeam: MemberProps[] = [
  {
    name: "Idorenyin Williams",
    title: "Co-Founder & Lead Frontend",
    photo: Williams,
  },
  {
    name: "Bamgbade Oluwaseun",
    title: "Co-Founder",
    photo: Bamgbade,
  },
  {
    name: "Ibukun Ayomide-Baafog",
    title: "Co-Founder",
    photo: KingIBK,
  },
  {
    name: "Akanimo Ekong",
    title: "Co-Founder",
    photo: Akanimo,
  },
  {
    name: "Abegunde Timilehin",
    title: "Frontend Co-Lead ",
    photo: Team,
  },
];

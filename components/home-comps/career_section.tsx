import Image from "next/image";
import Link from "next/link";
import React from "react";
// import CareerImg from "@/public/images/career-home.webp";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  useGSAP(() => {
    gsap.from(".career", {
      x: -100,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      ease: "power2.inOut",
      scrollTrigger: ".career",
    });

    gsap.from(".career-img", {
      x: 100,
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      ease: "power2.inOut",
      scrollTrigger: ".career-img",
    });

    gsap.from(".link", {
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.8,
        from: "start",
      },
      ease: "power2.inOut",
      scrollTrigger: ".link",
    });
  }, []);

  return (
    <section className="bg-[#01234540] py-[100px]">
      <div className="wrapper">
        <div className="career mb-16 inline-flex items-center gap-4">
          <h2 className="font-dm-sans font-medium text-white md:text-2xl">
            Careers
          </h2>
          <span className="flex h-6 w-6 items-center justify-center bg-[linear-gradient(90deg,_#DBE5F0_0%,_#A0BBD6_100%)] text-[#0C111D]">
            <ChevronRight />
          </span>
        </div>

        <div className="grid gap-y-8 sm:grid-cols-[0.7fr_1fr] sm:gap-8 md:grid-cols-2 lg:gap-10">
          <div className="space-y-8 divide-y divide-[#F9F9F94D] *:pt-6">
            <div className="space-y-2">
              <h4 className="font-dm-sans text-sm font-light text-[#EAECF0] md:text-base">
                Find a job
              </h4>
              <Link
                href="/careers"
                className="link font-dm-sans text-base font-normal text-white md:text-lg"
              >
                Search for jobs
              </Link>
            </div>

            <div className="space-y-2">
              <h4 className="font-dm-sans text-sm font-light text-[#EAECF0] md:text-base">
                Life at I-Sentry
              </h4>
              <ul className="space-y-2">
                {lifeIsentry.map((item: string, index: number) => (
                  <li key={index + 1}>
                    <Link
                      href="/"
                      className="link font-dm-sans text-base font-normal text-white md:text-lg"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-dm-sans text-sm font-light text-[#EAECF0] md:text-base">
                Find a job
              </h4>
              <ul className="space-y-2">
                {howHire.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="link font-dm-sans text-base font-normal text-white md:text-lg"
                  >
                    <Link href="/">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="">
            <Image
              className="career-img h-full w-full rounded-[12px] object-cover object-center"
              src="/images/career-home.webp"
              alt="placeholder"
              width={1000}
              height={3000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;

const lifeIsentry: string[] = [
  "Working here",
  "Benefits",
  "Our communities",
  "Work environment",
  "Careers blog",
];

const howHire: string[] = ["Hiring journey", "Pro tips"];

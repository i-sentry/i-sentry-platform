"use client";
import Link from "next/link";
import { aboutUs, legal, programs, solutions } from "@/utils";
import FooterLink from "./footer_links";
import SmartButton from "./custom_button";
import { FaGithub, FaLinkedin, FaMedium, FaXTwitter } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Marquee from "./ui/marquee";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <>
      <footer className="bg-footer1">
        <section className="border-t border-[#C2C2C21A] px-4 pt-10 backdrop-blur-md">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 lg:grid lg:grid-cols-2 lg:items-start">
              <div className="">
                <h3 className="mb-3 font-dm-sans text-[2rem] font-semibold leading-10 text-[#FAFAFA] sm:text-4xl md:text-5xl md:font-bold md:leading-tight lg:text-6xl lg:leading-tight">
                  Let&apos;s work <br className="hidden lg:block" /> together
                </h3>
                <p className="font-extralight leading-8 text-[#97A4B7]">
                  At I-Sentry Technologies, we combine cutting-edge software
                  solutions with expert training to empower businesses and
                  individuals in the digital age. Our dual focus on enterprise
                  solutions and technology education creates a unique ecosystem
                  for growth and innovation.
                </p>
              </div>

              <div className="mt-6 inline-flex flex-wrap items-center gap-4 justify-self-end lg:mt-0">
                <SmartButton
                  variant="dark"
                  buttonText="Talk to our team"
                  className="border-[#F4F4F40D] backdrop-blur-none"
                  url="/contact"
                  isLink
                />
                <SmartButton
                  variant="bright"
                  buttonText="Join our Program"
                  url="/mentorships"
                  isLink
                />
              </div>
            </div>

            <div className="grid gap-8 border-y border-[#EAECF033] py-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* SOLUTIONS FOOTER LINK */}
              <FooterLink title="Solutions" links={solutions} />
              <FooterLink title="Programs" links={programs} />
              <FooterLink title="About us" links={aboutUs} />
              <FooterLink title="Legals" links={legal} />
            </div>

            {/* COPYRIGHT */}
            <div className="mt-8 flex flex-col gap-5 sm:items-center sm:justify-between md:flex-row">
              <p className="font-light text-[#97A4B7]">
                &copy; {new Date().getFullYear()} I-Sentry Technologies. All
                rights reserved.
              </p>

              <div className="inline-flex items-center gap-5">
                <Link
                  href="https://x.com/ISentryTech/"
                  className="cursor-pointer text-[#98A2B3]"
                >
                  <FaXTwitter size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/isentry-technologies/"
                  className="cursor-pointer text-[#98A2B3]"
                >
                  <FaLinkedin size={20} />
                </Link>
                {/* <Link
                  href="https://facebook.com/"
                  className="cursor-pointer text-[#98A2B3]"
                >
                  <FaFacebook size={20} />
                </Link> */}
                <Link
                  href="https://github.com/i-sentry"
                  className="cursor-pointer text-[#98A2B3]"
                >
                  <FaGithub size={20} />
                </Link>
                <Link
                  href="https://medium.com/@isentrytechnologies"
                  className="cursor-pointer text-[#98A2B3]"
                >
                  <FaMedium size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-10">
          <Marquee pauseOnHover className="items-center [--duration:20s]">
            <div className="flex items-center gap-4">
              <h1 className="font-dm-sans text-[3rem] font-medium uppercase leading-[1] tracking-widest text-[#6FA1D2]">
               Isentry Technologies
              </h1>
              <span className="inline-block h-3 w-3 rounded-full bg-[#6FA1D2]"></span>
            </div>
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            <div className="flex items-center gap-4">
              <h1 className="font-dm-sans text-[3rem] font-medium uppercase leading-[1] tracking-widest text-[#6FA1D2]">
                Tomorrow&apos;s Tech, Today
              </h1>
              <span className="inline-block h-3 w-3 rounded-full bg-[#6FA1D2]"></span>
            </div>
          </Marquee>
        </div>
      </footer>
    </>
  );
};

export default Footer;

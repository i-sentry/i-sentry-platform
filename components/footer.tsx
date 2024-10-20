import { aboutUs, legal, programs, solutions } from "@/utils";
import Link from "next/link";
import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaXTwitter,
} from "react-icons/fa6";
import { Button } from "./ui/button";
import FooterLink from "./footer_links";

const Footer = () => {
  return (
    <footer>
      <section className="bg-footer1 border-t border-[#C2C2C21A] px-4 py-10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 lg:grid lg:grid-cols-2 lg:items-start">
            <div className="">
              <h3 className="mb-3 font-dm-sans text-[2rem] font-semibold leading-10 text-[#FAFAFA] sm:text-4xl md:text-5xl">
                Let&apos;s work together
              </h3>
              <p className="font-extralight leading-8 text-[#97A4B7]">
                At I-Sentry Technologies, we stand at the vanguard of
                technological advancement. Our cutting-edge solutions and global
                expertise empower businesses to navigate and thrive in the
                digital landscape of tomorrow.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-4 justify-self-end lg:mt-0">
              <Button className="h-auto rounded-full border border-[#023B74]/20 bg-grad-alt p-3 px-5 font-dm-sans text-sm font-light text-white backdrop-blur-[50px] duration-300 hover:bg-grad-alt sm:px-8 sm:py-3.5">
                Talk to our team
              </Button>
              <Button className="h-auto rounded-full bg-gradient-to-r from-base-700 to-base-300 p-3 px-5 font-dm-sans text-sm font-light text-white duration-300 sm:px-8 sm:py-3.5">
                Join our Program
              </Button>
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
                href="https://x.com/"
                className="cursor-pointer text-[#98A2B3]"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in"
                className="cursor-pointer text-[#98A2B3]"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://facebook.com/"
                className="cursor-pointer text-[#98A2B3]"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://github.com/"
                className="cursor-pointer text-[#98A2B3]"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://dribble.com/"
                className="cursor-pointer text-[#98A2B3]"
              >
                <FaTwitch size={20} />
              </Link>
              <Link
                href="https://dribble.com/"
                className="cursor-pointer text-[#98A2B3]"
              >
                <FaDribbble size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-footer2 overflow-hidden py-3">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center">
          <svg
            className="h-auto w-full"
            viewBox="0 0 400 120"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#6FA1D2", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#C2D9F0", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".30em"
              className="font-inter text-[5.9rem] font-bold"
              fill="url(#gradient)"
              fontSize="20vw"
            >
              I-Sentry
            </text>
          </svg>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

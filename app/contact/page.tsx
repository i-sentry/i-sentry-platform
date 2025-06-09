"use client";
import ContactForm from "@/components/contact-comps/page";
import Image from "next/image";
import React from "react";
// import Cone from "@/public/assets/svg/cone-pattern.svg";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
const ContactUs = () => {
  return (
    <>
      <section className="overflow-x-hidden pb-16 pt-[11rem]">
        <Image
          src="/assets/svg/cone-pattern.svg"
          width={1000}
          height={1000}
          alt="svg"
          className="absolute -right-[10rem] top-0 z-0 opacity-30"
        />

        <div className="wrapper relative z-10 gap-8 md:grid lg:grid-cols-2">
          <div className="mb-10 lg:mb-0">
            <div className="space-y-4">
              <h1 className="font-dm-sans text-2xl font-medium text-white md:text-[2rem] lg:text-balance lg:leading-snug">
                Connect with the I-Sentry Team
              </h1>
              <p className="text-sm font-light leading-normal text-primary-100 md:text-base">
                At I-Sentry, we&apos;re dedicated to building strong
                relationships and providing exceptional support. Whether you
                have a business inquiry, need technical assistance, or just want
                to learn more about our offerings, our team is here to help.
              </p>
              <p className="pt-3 text-sm font-light leading-normal text-primary-100 md:text-base">
                Reach out to your dedicated{" "}
                <Link
                  href="https://calendly.com/isentrytechnologies"
                  className="text-secondary-200 underline"
                  target="_blank"
                >
                  account manager
                </Link>
                &nbsp;for personalized support.
              </p>
            </div>
            <hr className="my-6 w-full border-white/20" />

            <div className="">
              <h3 className="text-xl font-normal text-white">
                Explore Our Resources
              </h3>
              <p className="text-sm font-light leading-normal text-primary-100 md:text-base">
                In the meantime, feel free to check out our extensive
                documentation, API references, and other developer tools to get
                a head start.
              </p>
              <ul className="mt-4">
                <li>
                  <div className="inline-flex items-center gap-3 text-sm font-light text-white md:text-base">
                    <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
                    Documentation
                    <Badge className="h-auto rounded-full border border-primary-300/40 bg-primary-900 p-0 px-1 text-xs font-light text-primary-200">
                      Coming Soon
                    </Badge>
                  </div>
                </li>
                <li>
                  <div className="inline-flex items-center gap-3 text-sm font-light text-white md:text-base">
                    <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
                    Developer Resources{" "}
                    <Badge className="h-auto rounded-full border border-primary-300/40 bg-primary-900 p-0 px-1 text-xs font-light text-primary-200">
                      Coming Soon
                    </Badge>
                  </div>
                </li>
                <li>
                  <Link
                    href="/community-forum"
                    className="inline-flex items-center gap-3 text-sm font-light text-white hover:text-secondary-200 md:text-base"
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
                    Community Forum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FORM */}
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactUs;

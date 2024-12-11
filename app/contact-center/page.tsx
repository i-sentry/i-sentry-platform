"use client";
import SmartButton from "@/components/custom_button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BiEnvelope } from "react-icons/bi";

const ContactCenter = () => {
  return (
    <section className="pb-20 pt-28 lg:pt-40">
      <div className="wrapper md:mx-auto md:max-w-4xl xl:max-w-5xl">
        <div className="text-center md:mx-auto md:max-w-xl">
          <h4 className="text-sm text-secondary-200">Contact Center</h4>
          <h1 className="my-4 text-3xl font-medium leading-[1.3] text-white sm:text-5xl sm:leading-snug">
            Let&apos;s Build Something
            <br className="hidden sm:block" /> Amazing Together
          </h1>
          <p className="font-light leading-normal text-primary-200">
            Ready to transform your ideas into reality? Whether you&apos;re
            looking for digital solutions or interested in our mentorship
            program, we&apos;re here to help.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-8">
          <div className="rounded-xl bg-footer2 p-5">
            <div className="flex items-center gap-2">
              <span>
                <BiEnvelope size={24} color="#fff" />
              </span>
              <h3 className="text-lg font-medium text-white">
                Business Inquiries
              </h3>
            </div>
            <p className="mb-8 mt-4 font-light text-white">
              Share your product requirements, report any issues, or provide
              valuable feedback. We&apos;re here to listen and turn your vision
              into tangible results.
            </p>
            <SmartButton
              showAnimatedIcon
              variant="dark"
              buttonText="Schedule a call"
              className="px-6 py-3"
              isLink
              url="https://calendly.com/isentrytechnologies"
              target="_blank"
            />
          </div>

          <div className="rounded-xl bg-footer2 p-5">
            <div className="flex items-center gap-2">
              <span>
                <MessageCircle size={24} color="#fff" />
              </span>
              <h3 className="text-lg font-medium text-white">
                Customer support
              </h3>
            </div>
            <p className="mb-8 mt-4 font-light text-white">
              Need assistance with our products or services? Our friendly team
              is available 24/7 to address your questions and ensure your
              complete satisfaction.
            </p>

            <SmartButton
              showAnimatedIcon
              variant="dark"
              buttonText="Contact Support"
              className="px-6 py-3"
              url="/faqs"
              isLink
            />
          </div>
        </div>

        <div className="mt-16 space-y-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:gap-8">
          <div className="p-5">
            <h3 className="text-lg font-medium text-white">
              Mentorship Program
            </h3>
            <p className="mb-8 mt-4 font-light text-white">
              Aspiring developers, this is your chance to learn from the best.
              Our structured internship program offers hands-on experience,
              mentorship, and a pathway to grow your skills and elevate your
              career in tech.
            </p>
            <Link
              href="/mentorships"
              className="inline-flex items-center gap-2 text-base text-primary-200"
            >
              Explore programs{" "}
              <span>
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-medium text-white">
              Technical Consultation
            </h3>
            <p className="mb-8 mt-4 font-light text-white">
              Leverage our team of experienced architects, engineers and product
              specialists to overcome your toughest challenges. Get personalized
              guidance on software development, cloud architecture, and more.
            </p>
            <Link
              href="mailto:programs@isentrytechnologies.com"
              className="inline-flex items-center gap-2 text-base text-primary-200"
            >
              <span>
                <BiEnvelope size={20} />
              </span>{" "}
              programs@isentrytechnologies.com
            </Link>
          </div>

          <hr className="border-0 border-t border-[#F9F9F9]/10 sm:col-span-2" />

          <div className="p-5">
            <h3 className="flex items-center gap-2 text-lg font-medium text-white">
              Community Resources
              <Badge className="rounded-full border-grey-50 p-1 px-3 py-1 text-xs font-light text-grey-50">
                Coming soon
              </Badge>
            </h3>
            <p className="mb-8 mt-4 font-light text-white">
              Stay up-to-date with the latest I-Sentry news, product updates,
              and best practices by tapping into our growing community.
              Collaborate with fellow developers, share insights, and learn from
              the experiences of others.
            </p>
            <Link
              href="/"
              className="pointer-events-none inline-flex items-center gap-2 text-base text-primary-200 opacity-30"
            >
              I-Sentry Docs{" "}
              <span>
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>

          <div className="p-5">
            <h3 className="flex items-center gap-2 text-lg font-medium text-white">
              Developer Resources
              <Badge className="rounded-full border-grey-50 p-1 px-3 py-1 text-xs font-light text-grey-50">
                Coming soon
              </Badge>
            </h3>
            <p className="mb-8 mt-4 font-light text-white">
              Dive into our extensive documentation, APIs, and SDK to unlock the
              full potential of I-Sentry&apos;s platform. Build seamless
              integrations, create custom applications, and extend our solutions
              to fit your unique needs.
            </p>
            <Link
              href="/"
              className="pointer-events-none inline-flex items-center gap-2 text-base text-primary-200 opacity-30"
            >
              I-Sentry API{" "}
              <span>
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCenter;

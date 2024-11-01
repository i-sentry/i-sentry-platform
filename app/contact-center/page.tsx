import SmartButton from "@/components/custom_button";
import Link from "next/link";
import React from "react";
import { BiEnvelope } from "react-icons/bi";

const ContactCenter = () => {
  return (
    <section className="">
      <div className="wrapper">
        <div>
          <h4 className="text-sm text-secondary-200">Contact Center</h4>
          <h1 className="text-primary-50">
            Let&apos;s Build Something Amazing Together
          </h1>
          <p className="font-light leading-normal text-primary-200">
            Ready to transform your ideas into reality? Whether you&apos;re
            looking for digital solutions or interested in our mentorship
            program, we&apos;re here to help.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span>
                <BiEnvelope color="#fff" />
              </span>
              <h3 className="text-white">Business Inquiries</h3>
            </div>
            <p className="mb-8 mt-4 font-light text-white">
              Share your product inquiries, report any issues you encounter, or
              leave your valuable feedback. Your input matters!
            </p>
            <SmartButton
              showAnimatedIcon
              variant="dark"
              buttonText="Schedule a call"
              className="px-6 py-3"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span>
                <BiEnvelope color="#fff" />
              </span>
              <h3 className="text-white">Help & support</h3>
            </div>
            <p className="mb-8 mt-4 font-light text-white">
              Share your product inquiries, report any issues you encounter, or
              leave your valuable feedback. Your input matters!
            </p>
            <SmartButton
              showAnimatedIcon
              variant="dark"
              buttonText="Contact Support"
              className="px-6 py-3"
            />
          </div>
        </div>

        <div>
          <div>
            <h3 className="text-white">Mentorship Program</h3>
            <p className="mb-8 mt-4 font-light text-white">
              Learn about our workshop opportunities and application process for
              aspiring developers.
            </p>
            <Link href="/">
              Explore programs <span></span>
            </Link>
          </div>

          <div>
            <h3 className="text-white">Technical Consultation</h3>
            <p className="mb-8 mt-4 font-light text-white">
              Get expert advice on software development, product design, and
              technical architecture.
            </p>
            <Link href="/">
              <span></span> info@isentrytechnologies.com
            </Link>
          </div>

          <div>
            <h3 className="text-white">Documentation</h3>
            <p className="mb-8 mt-4 font-light text-white">
              Get an overview of I-Sentry&apos;s features, integrations, and how
              to use them.
            </p>
            <Link href="/">
              I-Sentry Docs <span></span>
            </Link>
          </div>

          <div>
            <h3 className="text-white">Developers</h3>
            <p className="mb-8 mt-4 font-light text-white">
              Learn how to use the GraphQL API and TypeScript SDK to extend
              Linear.
            </p>
            <Link href="/">
              I-Sentry API <span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCenter;

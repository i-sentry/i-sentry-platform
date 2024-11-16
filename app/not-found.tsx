"use client";
import SmartButton from "@/components/custom_button";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiEnvelope } from "react-icons/bi";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="pb-20 pt-28 lg:pt-40">
      <div className="wrapper md:mx-auto md:max-w-4xl xl:max-w-5xl">
        <div className="text-center md:mx-auto md:max-w-xl">
          <h4 className="text-sm text-secondary-200">404 error</h4>
          <h1 className="my-4 text-3xl font-medium leading-[1.3] text-white sm:text-5xl sm:leading-snug">
            Oops! Page Not Found
          </h1>
          <p className="font-light leading-normal text-primary-200">
            We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t
            seem to exist. It might have been moved, renamed, or deleted.
            Let&apos;s get you back on track!
          </p>

          {/* <Link href="/"> */}
          <SmartButton
            showAnimatedIcon
            variant="bright"
            buttonText="Go back Home"
            className="mt-6 px-6 py-3"
            onClick={() => router.push("/")}
          />
          {/* </Link> */}
        </div>

        <div className="mt-28 grid gap-5 sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-8">
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

          <div className="rounded-xl bg-footer2 p-5">
            <div className="flex items-center gap-2">
              <span>
                <MessageCircle size={24} color="#fff" />
              </span>
              <h3 className="text-lg font-medium text-white">Help & support</h3>
            </div>
            <p className="mb-8 mt-4 font-light text-white">
              Share your product inquiries, report any issues you encounter, or
              leave your valuable feedback. Your input matters!
            </p>
            <Link href="/faqs">
              <SmartButton
                showAnimatedIcon
                variant="dark"
                buttonText="Contact Support"
                className="px-6 py-3"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 space-y-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:gap-8">
          <div className="p-5">
            <h3 className="text-lg font-medium text-white">
              Mentorship Program
            </h3>
            <p className="mb-8 mt-4 font-light text-white">
              Learn about our workshop opportunities and application process for
              aspiring developers.
            </p>
            <Link
              href="/"
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
              Get expert advice on software development, product design, and
              technical architecture.
            </p>
            <Link
              href="mailto:info@isentrytechnologies.com"
              className="inline-flex items-center gap-2 text-base text-primary-200"
            >
              <span>
                <BiEnvelope size={20} />
              </span>{" "}
              info@isentrytechnologies.com
            </Link>
          </div>

          <hr className="border-0 border-t border-[#F9F9F9]/10 sm:col-span-2" />

          <div className="p-5">
            <h3 className="text-lg font-medium text-white">Documentation</h3>
            <p className="mb-8 mt-4 font-light text-white">
              Get an overview of I-Sentry&apos;s features, integrations, and how
              to use them.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base text-primary-200"
            >
              I-Sentry Docs{" "}
              <span>
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-medium text-white">Developers</h3>
            <p className="mb-8 mt-4 font-light text-white">
              Learn how to use the GraphQL API and TypeScript SDK to extend
              Linear.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base text-primary-200"
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
}

import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section>
        <div className="wrapper">
          <div>
            <p className="text-sm text-secondary-200 lg:text-base">About us</p>
            <h1 className="mb-4 mt-3 font-dm-sans text-[32px] font-normal text-white md:text-[3rem]">
              I-Sentry is building
              <br className="sm:hidden md:block" /> cutting-edge innovations
            </h1>
            <p className="text-sm font-light text-primary-100 md:hidden">
              Ready to transform your ideas into reality? Whether you&apos;re
              looking for digital solutions or interested in our mentorship
              program, we&apos;re here to help.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2">
            <h2 className="font-medium text-white">
              We&apos;re passionate about building excellent product
            </h2>
            <div className="space-y-3">
              <p className="text-sm font-light text-primary-100">
                At I-Sentry, we are a team of passionate individuals dedicated
                to transforming complex challenges into seamless digital
                solutions. Founded with a vision to innovate, we specialize in
                creating custom software that propels businesses forward, and
                enhances user experiences, all while nurturing future tech
                leaders.
              </p>
              <p className="text-sm font-light text-primary-100">
                With a client-first approach, we focus on understanding your
                unique needs and delivering tailored software that meets your
                goals. Whether you&apos;re a startup looking to scale or an
                established enterprise seeking efficiency, our solutions are
                designed to empower your business through technology.
              </p>
              <p className="text-sm font-light text-primary-100">
                With a client-first approach, we prioritize understanding your
                unique needs and delivering tailored software that aligns your
                goals. Whether you&apos;re a startup aiming to scale or an
                established enterprise seeking efficiency, our solutions are
                designed to empower your business through technology.
              </p>
            </div>
          </div>

          <div className="grid">
            <div className="">{/* <Image src={} alt=""/> */}</div>
            <div className="divide-y-2 bg-box p-5">
              {/* OUR VISION */}
              <div className="">
                <h3>Our Vision</h3>
                <p className="text-sm font-light text-primary-100">
                  At Isentry, we are passionate about using technology to
                  empower your business to thrive and innovate. business.
                </p>
                <p className="text-sm font-light text-primary-100">
                  We envision a Future where every business regardless of
                  it&apos;s size and sectors can harness the full potential of
                  technology to achieve it&apos;s goals and make a positive
                  impact on the world.
                </p>
                <p className="text-sm font-light text-primary-100">
                  Be at the forefront of your industry with a seamless
                  integration between innovative technology and business.
                </p>
              </div>

              {/* OUR MISSION */}
              <div className="">
                <h3>Our Mission</h3>
                <p className="text-sm font-light text-primary-100">
                  At Isentry, our mission is to lead technological advancement,
                  creating a world where businesses and individuals can thrive
                  through innovation.
                </p>
                <p className="text-sm font-light text-primary-100">
                  We aim to foster growth, enhance efficiency and generate
                  global impact while upholding our standard of professionalism,
                  integrity and customer focus.
                </p>
                <p className="text-sm font-light text-primary-100">
                  We aspire to be the catalyst that transforms technological
                  potential into tangible success for our clients and partners
                </p>
              </div>

              <div>
                <h3>Our Mission</h3>
                <Badge
                  variant="outline"
                  className="rounded-full bg-transparent px-6 py-3 text-sm font-light text-white"
                >
                  Innovation
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <div>
            <h3>Learn, innovation and build with real-life projects</h3>
            <p className="text-sm font-light text-primary-100">
              Enhance your career path with our intensive year-long mentorship
              program at I-Sentry Technologies. We don&apos;t just teach; we
              immerse you in real-world projects, connect you with industry
              experts, and guide you from an aspiring developer to a
              professional in the tech field
            </p>
          </div>
          <div>
            <ul className="list-item list-disc text-sm font-light text-primary-100">
              <li>Web Development (HTML, CSS, JavaScript frameworks)</li>
              <li>Mobile App Development (React Native, Flutter, Swift)</li>
              <li>Cloud Computing (AWS, Azure, Google Cloud)</li>
              <li>DevOps & CI/CD (Docker, Kubernetes, Jenkins)</li>
              <li>Software Testing & QA (Selenium, Jest, Unit Testing)</li>
            </ul>
          </div>
          <figure>{/* IMage */}</figure>
        </div>
      </section>

      <section className="wrapper">
        <h3>Learn, innovation and build with real-life projects</h3>
        <div>
          <div className="">
            {/* Imgae */}
            <h3 className="font-inter text-white">Dianne Russell</h3>
            <p className="font-inter capitalize text-primary-100">ceo</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

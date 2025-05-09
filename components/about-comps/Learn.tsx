import React from "react";
import SmartLinkButton from "../custom_button";
import Image from "next/image";
import AboutLearn from "@/public/images/learn-about.webp";

const Learn = () => {
  return (
    <>
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
            <div className="space-y-2 pl-5 text-base font-light text-primary-100">
              <div>
                <h3 className="font-normal text-white">Web Development</h3>
                <ul className="list-disc pl-5">
                  <li>Frontend: HTML5, CSS3, JavaScript (React, Vue.js)</li>
                  <li>Backend: Node.js, Python, Java</li>
                  <li>Frameworks: Angular, Express.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-normal text-white">
                  Mobile App Development
                </h3>

                <ul className="list-disc pl-5">
                  <li> React Native</li>
                  <li>Flutter</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                </ul>
              </div>
              <div>
                <h3 className="font-normal text-white">Cloud Computing</h3>

                <ul className="list-disc pl-5">
                  <li>Cloud Platforms: AWS, Azure, Google Cloud</li>
                  <li>DevOps Tools: Docker, Kubernetes, Jenkins</li>
                  <li>CI/CD Pipeline Implementation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-normal text-white">Quality Assurance</h3>

                <ul className="list-disc pl-5">
                  <li>Automated Testing: Selenium, Jest</li>
                  <li>Unit Testing & Integration Testing</li>
                  <li>Performance Testing</li>
                </ul>
              </div>
            </div>

            <SmartLinkButton
              variant="dark"
              showAnimatedIcon
              buttonText="Explore Opportunities"
              className="mt-8 py-3"
              url="/careers"
              isLink
            />
          </div>
          <Image
            src={AboutLearn}
            alt="A team discussing"
            className="mt-6 h-[400px] w-full rounded-xl object-cover object-center md:h-[500px] lg:col-span-2 lg:object-top"
          />
        </div>
      </section>
    </>
  );
};

export default Learn;

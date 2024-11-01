import SmartButton from "@/components/custom_button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InternImage from "@/public/images/internship.jpeg";

const Internship = () => {
  return (
    <>
      <section className="pb-20 pt-28 lg:pt-40">
        <div className="wrapper">
          <div className="text-center md:mx-auto md:max-w-xl">
            <h4 className="text-sm text-secondary-200">Internship</h4>
            <h1 className="my-4 text-3xl font-medium leading-[1.35] text-white sm:text-5xl sm:leading-tight">
              Launch your career with
              <br className="hidden sm:block" /> innovation at I-Sentry
            </h1>
            <p className="font-light leading-normal text-primary-200">
              Our internship programs are 99% hands-on. You get to design and
              build outstanding projects that can give you an edge in a hiring
              process.
            </p>
            <Link href="/internship/enroll">
              <SmartButton
                variant="bright"
                buttonText="Enroll for free"
                className="mt-10"
              />
            </Link>
          </div>
        </div>
      </section>

      <div className="wrapper md:flex md:justify-between md:gap-3">
        <figure>
          <Image
            src={InternImage}
            alt="A woman resting on the wall while operating her laptop"
            className="rounded-xl"
          />

          <div className="flex">
            <div
              style={{
                background: `linear-gradient(90deg, rgba(2, 59, 116, 0.1) 0%, rgba(86, 140, 194, 0.1) 100%,  rgba(255, 255, 255, 0.1),)`,
              }}
              className="bg-box"
            >
              <h3 className="text-4xl font-semibold">10+</h3>
              <p className="text-primary-50">Top tech Tracks</p>
            </div>

            <div
              style={{
                background: `linear-gradient(90deg, rgba(2, 59, 116, 0.1) 0%, rgba(86, 140, 194, 0.1) 100%,  rgba(255, 255, 255, 0.1),)`,
              }}
              className="bg-box"
            >
              <h3 className="text-4xl font-semibold">10+</h3>
              <p className="text-primary-50">Top tech Tracks</p>
            </div>
          </div>
        </figure>
        <div>
          <h3 className="">
            We accept people who are ready to develop their skill.
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Dignissim mus in risus ut
            bibendum pretium enim. Est feugiat pretium tempus sit ac lacus.
            Ultrices malesuada placerat vitae gravida velit. Nulla sit penatibus
            faucibus pulvinar egestas amet scelerisque cras donec. Enim vitae
            quisque nulla risus. Iaculis at sit ultricies velit in mauris quis
            etiam at.
          </p>
        </div>
      </div>

      <div className="wrapper md:flex md:justify-between md:gap-3">
        <div className="">
          <h3 className="">How we run our program</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Dignissim mus in risus ut
            bibendum pretium enim. Est feugiat pretium tempus sit ac lacus.
            Ultrices malesuada placerat vitae gravida velit. Nulla sit penatibus
            faucibus pulvinar egestas amet scelerisque cras donec. Enim vitae
            quisque nulla risus. Iaculis at sit ultricies velit in mauris quis
            etiam at.
          </p>
        </div>
        <div className="">
          <Image
            src={InternImage}
            alt="A woman resting on the wall while operating her laptop"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="wrapper md:flex md:justify-between md:gap-3">
        <div className="">
          <h3 className="">Our Certifications</h3>
          <p className="">
            Our mentorship programs are 99% hands-on. You get to design and
            build outstanding projects that can give you an edge in a hiring
            process.
          </p>
        </div>
        <div className="">
          <h3>Professional Certifications</h3>
          <div className="">
            <h4>Technical Certifications</h4>
            <ul>
              <li>Full-Stack Development (MERN Stack)</li>
              <li>Cloud Computing (AWS/Azure)</li>
              <li>Data Science & Machine Learning</li>
              <li> DevOps & CI/CD</li>
              <li></li>
            </ul>
          </div>

          <div className="">
            <h4>Industry-Recognized Credentials</h4>
            <ul>
              <li>Industry-Recognized Credentials</li>
              <li>Project Management Professional (PMP)</li>
              <li>Agile & Scrum Certification</li>
              <li>Cybersecurity Fundamentals</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="wrapper">
        <p>
          At Isentry, our mission is not just about providing training;
          it&apos;s about transforming lives and shaping the future of tech.
          Here&apos;s a glimpse into the impact we&apos;ve made
        </p>

        <div className="bg-secondary-500 p-8">
          <div>
            <h3>
              Love the simplicity of the service and the prompt customer
              support. We can’t imagine working without it.
            </h3>

            <div>
              <Image
                src={InternImage}
                alt="A woman resting on the wall while operating her laptop"
                className="h-10 w-10 rounded-full object-cover object-center"
              />
              <h4>Caitlyn King</h4>
              <p>Head of Design, Layers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAT */}
      <section className="wrapper">
        <h3>Ready to take the next step in your career?</h3>

        <Link href="/internship/enroll">
          <SmartButton
            variant="bright"
            buttonText="Enroll for free"
            className="mt-10"
          />
        </Link>
      </section>
    </>
  );
};

export default Internship;

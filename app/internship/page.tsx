"use client";
import SmartButton from "@/components/custom_button";
import Image from "next/image";
import Link from "next/link";
import InternImage from "@/public/images/internship.jpeg";
import Roles from "@/public/images/roles.png";
import Carousel from "@/components/internship-comps/carousel";

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

      {/*  */}
      <div className="wrapper py-16 lg:grid lg:grid-cols-2 lg:items-center lg:justify-between lg:gap-8">
        <figure className="relative">
          <Image
            src={InternImage}
            alt="A woman resting  on the wall while operating her laptop"
            className="rounded-xl object-cover object-center md:h-[300px]"
          />

          <div className="absolute bottom-2 left-2 flex gap-6 lg:-bottom-10 lg:left-6">
            <div className="rounded-[8px] bg-intern p-5">
              <h3 className="text-4xl font-semibold text-white">10+</h3>
              <p className="mt-2 text-sm text-primary-100">Top tech Tracks</p>
            </div>

            <div className="rounded-[8px] bg-intern p-5">
              <h3 className="text-4xl font-semibold text-white">90%</h3>
              <p className="mt-2 text-sm text-primary-100">Top tech Tracks</p>
            </div>
          </div>
        </figure>
        <div className="mt-8 lg:mt-0">
          <h3 className="mb-2 text-2xl text-white">
            We accept people who are ready to develop their skill.
          </h3>
          <p className="text-base font-light leading-normal text-primary-200">
            Lorem ipsum dolor sit amet consectetur. Dignissim mus in risus ut
            bibendum pretium enim. Est feugiat pretium tempus sit ac lacus.
            Ultrices malesuada placerat vitae gravida velit. Nulla sit penatibus
            faucibus pulvinar egestas amet scelerisque cras donec. Enim vitae
            quisque nulla risus. Iaculis at sit ultricies velit in mauris quis
            etiam at.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="wrapper mt-8 md:my-16 md:grid md:grid-cols-2 md:items-center md:justify-between md:gap-3 lg:gap-8">
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-2xl text-white">How we run our program</h3>
          <p className="text-base font-light leading-normal text-primary-200">
            Lorem ipsum dolor sit amet consectetur. Dignissim mus in risus ut
            bibendum pretium enim. Est feugiat pretium tempus sit ac lacus.
            Ultrices malesuada placerat vitae gravida velit. Nulla sit penatibus
            faucibus pulvinar egestas amet scelerisque cras donec. Enim vitae
            quisque nulla risus. Iaculis at sit ultricies velit in mauris quis
            etiam at.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Image src={Roles} alt="A cursor " className="rounded-xl" />
        </div>
      </div>

      {/*  */}
      <div className="wrapper py-16 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-8">
        <div className="">
          <h3 className="mb-2 text-2xl text-white">Our Certifications</h3>
          <p className="text-base font-light leading-normal text-primary-200">
            Our mentorship programs are 99% hands-on. You get to design and
            build outstanding projects that can give you an edge in a hiring
            process.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-[#F4F4F414] p-6 lg:mt-0">
          <h3 className="mb-8 text-lg text-white">
            Professional Certifications
          </h3>
          <div className="">
            <h4 className="mb-3 text-base font-light text-white">
              Technical Certifications
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-base font-light leading-normal text-white">
              <li>Full-Stack Development (MERN Stack)</li>
              <li>Cloud Computing (AWS/Azure)</li>
              <li>Data Science & Machine Learning</li>
              <li> DevOps & CI/CD</li>
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="mb-3 text-base font-light text-white">
              Industry-Recognized Credentials
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-base font-light leading-normal text-white">
              <li>Industry-Recognized Credentials</li>
              <li>Project Management Professional (PMP)</li>
              <li>Agile & Scrum Certification</li>
              <li>Cybersecurity Fundamentals</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </div>

      {/*  */}
      <section className="wrapper mt-8">
        <p className="font-dm-sans text-2xl font-normal leading-normal text-white lg:mx-auto lg:max-w-4xl lg:text-center lg:text-xl lg:text-primary-100">
          At Isentry, our mission is not just about providing training;
          it&apos;s about transforming lives and shaping the future of tech.
          Here&apos;s a glimpse into the impact we&apos;ve made
        </p>

        <Carousel reviews={reviews} />

        {/* <div className="mt-10 bg-secondary-500 p-8">
          <div className="no-scrollbar mx-auto w-[70%] overflow-hidden">
            <div className="flex w-max space-x-5">
              {reviews.map((item, index) => {
                return (
                  <div key={index} className="max-w-xl">
                    <h3 className="text-center text-lg font-light leading-normal text-white">
                      {item?.content}
                    </h3>

                    <div className="mt-6 flex flex-col items-center">
                      <Image
                        src={InternImage}
                        alt="A woman resting on the wall while operating her laptop"
                        className="h-10 w-10 rounded-full object-cover object-center"
                      />
                      <h4 className="text-sm text-white"> {item?.reviewer}</h4>
                      <p className="text-xs text-primary-200">{item?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
      </section>

      {/* CTAT */}
      <section className="wrapper flex flex-col items-center py-20">
        <h3 className="text-balance text-center text-2xl font-medium leading-normal text-white md:text-wrap md:text-4xl md:leading-tight">
          Ready to take the next step in <br className="hidden md:block" /> your
          career?
        </h3>

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

const reviews = [
  {
    content:
      " Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    reviewer: "Caitlyn King",
    title: "Head of Design, Layers",
  },
  {
    content:
      " Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    reviewer: "King Caitlyn",
    title: "Head of Design, Layers",
  },
  {
    content:
      " Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    reviewer: "Jason Bright",
    title: "Head of Design, Layers",
  },
];

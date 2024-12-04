import React from "react";

const AboutInfo = () => {
  return (
    <>
      <section className="wrapper">
        <div className="mt-10 gap-16 lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-[0.8fr_2fr]">
          <h2 className="mb-2 font-dm-sans text-2xl font-medium text-primary-50 lg:text-3xl">
            We&apos;re passionate about building transformative solutions
          </h2>
          <div className="space-y-3 xl:ml-32">
            <p className="text-base font-light text-primary-100">
              At I-Sentry, we are a team of passionate innovators dedicated to
              transforming complex challenges into seamless digital solutions.
              Founded with a vision to innovate, we specialize in creating
              custom software that propels businesses forward, while nurturing
              the next generation of tech leaders through our comprehensive
              training programs.
            </p>
            <p className="text-base font-light text-primary-100">
              With our client-first approach, we deliver tailored solutions that
              drive real business impact. Our expertise spans: Custom Enterprise
              Software Development, Cloud-Based Solutions, Digital
              Transformation Consulting, Technical Training & Mentorship
            </p>
            <p className="text-base font-light text-primary-100">
              Whether you&apos;re a startup aiming to scale or an established
              enterprise seeking efficiency, we provide the technological
              foundation for your success. Our dual focus on software excellence
              and talent development creates a unique ecosystem that benefits
              both businesses and aspiring tech professionals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;

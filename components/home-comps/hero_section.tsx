import React, { useEffect, useState } from "react";
import SmartButton from "../custom_button";
import AnimatedCircle from "../animate_circles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { sanityClient } from "@/sanity";

const fetchHero = async () => {
  const query = `*[_type == "hero"][0]{
  title,
  description
  }`;

  const section = await sanityClient.fetch(query);
  return section;
};
const Hero = () => {
  // useGSAP(() => {
  //   gsap.from("#hero-title", {
  //     y: -100,
  //     duration: 2.5,
  //     opacity: 0,
  //     ease: "power2.inOut",
  //   });
  // }, []);

  useGSAP(() => {
    gsap.from(["#hero-title", "#sub-text", ".btn-1", ".btn-2"], {
      y: 300,
      opacity: 0,
      duration: 1.5,
      // touchAction: "play reverse play reverse",
      stagger: {
        // implemeting the stagger effect
        amount: 1,
        from: "start",
      },
      ease: "power2.inOut",
    });
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();

  console.log(data, "Hero list box");

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedAbout = await fetchHero();
        setData(fetchedAbout);
      } catch (err) {
        // setError("Error loading data");
        console.error(err);
      } finally {
        // setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      <section className="relative min-h-[30vh] w-full overflow-hidden py-36 lg:flex lg:h-screen lg:items-center lg:justify-center lg:py-20">
        <div className="wrapper">
          <>
            <AnimatedCircle />
          </>
          <div className="relative z-10 mx-auto flex flex-col items-center md:max-w-2xl lg:max-w-4xl">
            <h1
              id="hero-title"
              className="text-center text-[28px] font-semibold text-white sm:text-3xl md:text-5xl lg:text-6xl"
            >
              Pioneering the Digital Frontier
            </h1>
            <p
              id="sub-text"
              className="mb-8 mt-4 text-center text-sm font-extralight leading-6 text-[#C2C2C2CC] sm:mx-auto sm:w-[80%] lg:max-w-xl lg:text-lg"
            >
              Our cutting-edge solutions and global expertise empower businesses
              to navigate and thrive in the digital landscape of tomorrow.
            </p>

            <div className="flex items-center gap-2">
              <SmartButton
                isLink
                url="/services"
                variant="dark"
                buttonText="Our Services"
                className="btn-1"
              />
              <SmartButton
                isLink
                url="/mentorships"
                variant="bright"
                buttonText="Join our Program"
                className="btn-2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import StatCard from "./stat_card";
import { StatProps, stats } from "@/utils";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Statistics = () => {
  // useGSAP(() => {
  //   gsap.from(".stat-header", {
  //     // y: 100,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: {
  //       amount: 0.5,
  //       from: "start",
  //     },
  //     ease: "power2.inOut",
  //     scrollTrigger: ".service-header",
  //   });

  //   gsap.from(".stat", {
  //     y: 90,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: {
  //       amount: 0.5,
  //       from: "start",
  //     },
  //     ease: "power2.inOut",
  //     scrollTrigger: ".stat",
  //   });
  // }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const target = entry.target;

        // when 30% enter the viewport

        if (entry.intersectionRatio >= 0.3) {
          target.classList.add("light");
          target.setAttribute("data-theme", "light");
        }

        // when 50% leave the viewport
        if (!entry.isIntersecting && entry.intersectionRatio <= 0.5) {
          target.classList.remove("light");
          target.setAttribute("data-theme", "dark");
        }
      },
      {
        threshold: [0.3, 0.5], // Trigger at 50% entry and 80% exit
      },
    );

    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section
      data-theme="dark"
      ref={sectionRef}
      className="group bg-[#01234540] py-[100px] duration-300 ease-linear data-[theme=light]:bg-[#f7f7f7]"
    >
      <div className="wrapper">
        <h2 className="stat-header text-center text-2xl font-semibold text-white duration-300 ease-linear group-data-[theme=light]:text-primary-900 md:text-4xl md:leading-tight">
          Empowering Digital Excellence <br className="hidden md:block" />{" "}
          Through Software & Skills
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:mx-auto lg:max-w-4xl">
          {stats?.map((stat: StatProps, index: number) => (
            <StatCard
              key={index}
              {...stat}
              duration={[1500, 3000, 8000][index]}
              steps={[10, 1, 1][index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

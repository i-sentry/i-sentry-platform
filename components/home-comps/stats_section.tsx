import StatCard from "./stat_card";
import { StatProps, stats } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Statistics = () => {
  const time = [1500, 3000, 3000];

  useGSAP(() => {
    gsap.from(".stat", {
      y: 200,
      opacity: 0,
      duration: 2,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      ease: "power2.inOut",

      scrollTrigger: ".stat",
    });
  }, []);

  return (
    <section className="bg-[#01234540] py-[100px]">
      <div className="wrapper">
        <h2 className="text-center text-2xl font-semibold text-white md:text-4xl md:leading-tight">
          Empowering Digital Excellence <br className="hidden md:block" />{" "}
          Through Software & Skills
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:mx-auto lg:max-w-4xl">
          {stats?.map((stat: StatProps, index: number) => (
            <StatCard
              key={index}
              {...stat}
              duration={time[index]}
              steps={[10, 1, 1][index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

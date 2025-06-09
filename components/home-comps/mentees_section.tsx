import MenteeCard from "./mentee_card";

import Marquee from "../ui/marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { professionals } from "@/utils";
gsap.registerPlugin(ScrollTrigger);

const MenteeSection = () => {
  useGSAP(() => {
    gsap.from(".mentee", {
      x: 190,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.8,
        from: "start",
      },
      ease: "power2.inOut",
      scrollTrigger: ".mentee",
    });
  }, []);

  return (
    <section className="py-10">
      <div className="px-4">
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-center text-2xl font-semibold text-white md:text-4xl md:leading-tight">
            Past Mentees
          </h2>
          {/* <p className="text-sm font-extralight text-[#C2C2C2] md:text-base">
            Featured Interns
          </p> */}
        </div>

        <div>
          <Marquee pauseOnHover className="[--duration:20s] [--gap:2rem]">
            {professionals.map((mentee, index) => (
              <MenteeCard
                key={mentee?.name + index}
                image={mentee?.photo}
                title={mentee?.name}
                description={mentee?.skill}
                links={mentee?.links}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MenteeSection;

"use client";
import React from "react";
import Marquee from "../ui/marquee";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { clients } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Partners = ({ className }: { className?: string }) => {
  useGSAP(() => {
    gsap.from(".partner", {
      y: 50,
      x: 50,
      opacity: 0,
      duration: 1.2,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      ease: "power2.inOut",
      scrollTrigger: ".partner",
    });
  }, []);
  return (
    <section
      className={cn(
        "relative border-y-[0.2px] border-[#f9f9f924] py-4",
        className,
      )}
    >
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-partners"></div>
      <div className="wrapper">
        <Marquee
          pauseOnHover
          className="[--duration:20s] [--gap:2rem] md:[--gap:5rem]"
        >
          {clients.map((client, index) => (
            <Image
              key={client?.name + index}
              width={100}
              height={100}
              src={client?.brand}
              alt={client?.name}
              className={cn(
                "partner aspect-[9/4] w-[100px]",
                client?.name === "Porker Hut" && "scale-[1.3]",
              )}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;

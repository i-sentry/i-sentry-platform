import React from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";
import { clients } from "@/utils";
import { cn } from "@/lib/utils";

const Partners = () => {
  return (
    <section>
      <div className="wrapper">
        {/* PARTNERS */}
        <div className="mt-10 pb-10 md:mt-28">
          <h2 className="text-center font-dm-sans text-[20px] font-medium text-white md:text-[32px]">
            Pioneering companies trust us to
            <br className="hidden md:block" /> deliver cutting-edge solutions.
          </h2>

          <div className="relative mt-4">
            <div className="absolute left-0 top-0 z-10 h-full w-full scale-110 bg-partners"></div>

            <Marquee
              pauseOnHover
              className="[--duration:20s] [--gap:2rem] md:[--gap:5rem]"
            >
              {clients.map((client, index) => (
                <Image
                  key={client?.name + index}
                  src={client?.brand}
                  alt={client?.name}
                  className={cn(
                    "aspect-[9/4] w-[100px]",
                    client?.name === "Porker Hut" && "scale-[1.3]",
                  )}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

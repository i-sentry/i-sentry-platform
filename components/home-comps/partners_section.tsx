import React from "react";
import Marquee from "../ui/marquee";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { clients } from "@/utils";

const Partners = () => {
  return (
    <section className="relative border-y-[0.2px] border-[#f9f9f924] py-4">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-partners"></div>
      <div className="wrapper">
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
    </section>
  );
};

export default Partners;

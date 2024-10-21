import React from "react";
import Marquee from "../ui/marquee";
import PorkerHut from "@/public/assets/partners/porkerhut.svg";
import TTfcx from "@/public/assets/partners/ttfcx.svg";
import Dataphyte from "@/public/assets/partners/Dataphyte.svg";
import Ri from "@/public/assets/partners/ri-softwares.svg";
import Image from "next/image";

const clients = [
  { name: "Trusted Transfers", brand: TTfcx },
  { name: "Dataphytes", brand: Dataphyte },
  { name: "Porker Hut", brand: PorkerHut },
  { name: "Ri-softwares", brand: Ri },
];

const Partners = () => {
  return (
    <section className="relative border-y-[0.2px] border-[#f9f9f924] py-4">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-partners"></div>
      <div className="wrapper text-white">
        <Marquee pauseOnHover className="[--duration:20s] [--gap:2rem]">
          {clients.map((client, index) => (
            <Image
              key={client.name + index}
              src={client.brand}
              alt={client.name}
              className="w-[100px]"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;

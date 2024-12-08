import Image from "next/image";
import React from "react";
import Block from "@/public/assets/svg/Keyboard-control-key.svg";
import Cone from "@/public/assets/svg/cone-pattern.svg";

const BannerIllustration = () => {
  return (
    <>
      {/* SVG BG */}
      <Image
        src={Block}
        data-speed="3.5"
        alt="Brick illustration"
        className="absolute left-16 top-[10rem] z-0 w-[150px] scale-150 md:scale-[1.8]"
      />
      <Image
        src={Cone}
        data-speed="3.5"
        alt="Brick illustration"
        className="absolute -right-[100px] -top-[10px] h-[200px] w-[376px] -rotate-[20deg] scale-[1.15] md:scale-125 lg:-right-[12rem] lg:-top-12 lg:h-[400px] lg:w-[500px] lg:scale-[1]"
      />
      s
    </>
  );
};

export default BannerIllustration;

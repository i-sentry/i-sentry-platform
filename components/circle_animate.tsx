import React from "react";

const CircleAnimate = () => {
  return (
    <>
      <div className="absolute left-1/2 top-[0%] h-[400px] w-[400px] -translate-x-1/2 scale-[2]">
        <div className="circle1 animate-stay bg-circle absolute left-0 top-[-15px] h-[400px] w-[400px] rounded-full"></div>
        <div className="circle2 animate-move-right bg-circle absolute left-0 top-[5px] h-[400px] w-[400px] rounded-full"></div>
        <div className="circle3 animate-move-left bg-circle absolute left-0 top-0 h-[400px] w-[400px] rounded-full"></div>
      </div>
    </>
  );
};

export default CircleAnimate;

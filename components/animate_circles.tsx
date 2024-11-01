// components/AnimatedCircle.js
import { useEffect } from "react";
import { gsap } from "gsap";

const AnimatedCircle = () => {
  useEffect(() => {
    // GSAP animations for the SVG gradients
    gsap.to("#paint0_linear", {
      attr: { x1: "1000", x2: "1200" }, // Animate x-axis positions
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: "sine.inOut",
    });

    gsap.to("#paint1_linear", {
      attr: { x1: "940", x2: "1140" },
      yoyo: true,
      repeat: 1,
      duration: 3,
      ease: "sine.inOut",
    });

    gsap.to("#paint2_linear", {
      attr: { x1: "980", x2: "1180" },
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <svg
      className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 scale-150 md:scale-100"
      width="1920"
      height="767"
      viewBox="0 0 1920 767"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M642 766.4C1039.65 766.4 1362 444.045 1362 46.4C1362 -351.245 1039.65 -673.6 642 -673.6C244.355 -673.6 -78 -351.245 -78 46.4C-78 444.045 244.355 766.4 642 766.4Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.2"
      />
      <path
        d="M1278 766.4C1675.65 766.4 1998 444.045 1998 46.4C1998 -351.245 1675.65 -673.6 1278 -673.6C880.355 -673.6 558 -351.245 558 46.4C558 444.045 880.355 766.4 1278 766.4Z"
        fill="url(#paint1_linear)"
        fillOpacity="0.2"
      />
      <path
        d="M960 692C1357.65 692 1680 369.645 1680 -28C1680 -425.645 1357.65 -748 960 -748C562.355 -748 240 -425.645 240 -28C240 369.645 562.355 692 960 692Z"
        fill="url(#paint2_linear)"
        fillOpacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="960"
          y1="255.2"
          x2="960"
          y2="699.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C2C2C2" stopOpacity="0" />
          <stop offset="1" stopColor="#C2C2C2" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="960"
          y1="255.2"
          x2="960"
          y2="699.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C2C2C2" stopOpacity="0" />
          <stop offset="1" stopColor="#C2C2C2" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="960"
          y1="255.2"
          x2="960"
          y2="699.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C2C2C2" stopOpacity="0" />
          <stop offset="1" stopColor="#C2C2C2" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedCircle;

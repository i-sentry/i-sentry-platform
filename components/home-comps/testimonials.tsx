"use client";
import React, { useEffect, useRef } from "react";
import Marquee from "../ui/marquee";
import ReviewCard from "./review_card";
import Placeholder from "@/public/images/placeholder.png";
import { professionals } from "@/utils";

const reviews = [
  {
    name: "Maurice",
    username: "ReactJs, NextJs",
    body: "I was initially intimidated by React, but the mentorship really helped me break down complex concepts into manageable pieces. My mentor's feedback on my projects gave me a real-world understanding of how to improve my code structure and design thinking.",
    img: Placeholder,
  },
  {
    name: "Maurice",
    username: "ReactJs, NextJs",
    body: "Working on real-life backend problems was a game-changer for me. I learned not just how to write clean code, but also how to architect systems that scale. The hands-on experience prepared me for production-level challenges.",
    img: Placeholder,
  },
  {
    name: "Maurice",
    username: "ReactJs, NextJs",
    body: "before i got into flutter, mobile app development felt like a huge mountain to climb. i knew basic programming, but translating that into a mobile app was overwhelming. during the mentorship, i learned the fundamentals of flutter and dart.",
    img: Placeholder,
  },
  {
    name: "Maurice",
    username: "ReactJs, NextJs",
    body: "my biggest challenge before the mentorship was understanding how to set up continuous integration and delivery pipelines. the hands-on approach made it clear how devops tools fit together in the real world. ",
    img: Placeholder,
  },
];

const firstRow = professionals
  .filter((item) => !item.alias.toLowerCase().includes("victor"))
  .slice(0, 3);
const secondRow = professionals
  .filter((item) => !item.alias.toLowerCase().includes("victor"))
  .slice(reviews.length / 2);

const Testimonials = () => {
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
      className="group py-16 pb-0 duration-300 ease-linear data-[theme=light]:bg-[#f8f8f8]"
      data-theme="dark"
      ref={sectionRef}
    >
      <div className="wrapper">
        <div className="mb-16 space-y-6 text-center">
          <h2 className="review-title text-center text-2xl font-semibold text-white duration-300 ease-linear group-data-[theme=light]:text-primary-900 md:text-4xl md:leading-tight">
            Testimonial
          </h2>
          <p className="review-title text-sm font-extralight text-[#C2C2C2] duration-300 ease-linear group-data-[theme=light]:text-secondary-500 md:text-base">
            From past mentees
          </p>
        </div>
      </div>
      <div className="relative pb-16">
        <div className="testimonials relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
              <ReviewCard
                key={review.alias + index}
                {...review}
                className="w-[400px]"
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, index) => (
              <ReviewCard
                key={review.alias + index}
                {...review}
                className="w-[400px]"
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review, index) => (
              <ReviewCard
                key={review.alias + index + "0"}
                {...review}
                className="w-[400px]"
              />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full scale-x-125 bg-reviews duration-300 group-data-[theme=light]:bg-light sm:block"></div>
      </div>
    </section>
  );
};

export default Testimonials;

/* 
linear-gradient(90deg,#030B1B_10%,_rgba(3,_11,_27,_0)_25.4%,_rgba(3,_11,_27,_0)_75.3%,_#030B1B_90.4%)",


*/

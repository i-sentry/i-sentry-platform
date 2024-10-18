import React from "react";
import Marquee from "../ui/marquee";
import ReviewCard from "./review_card";
import Placeholder from "@/public/images/placeholder.png";

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
    body: "before i got into flutter, mobile app development felt like a huge mountain to climb. i knew basic programming, but translating that into a mobile app was overwhelming. during the mentorship, i learned the fundamentals of flutter and dart, and what really helped was how project-oriented the sessions were. we worked on a complete app from scratch, from designing the ui to connecting it to a backend. my mentor’s guidance helped me understand not only how to code, but how to think through the entire app development process. today, i can proudly say i’ve built apps that are live on the play store.",
    img: Placeholder,
  },
  {
    name: "Maurice",
    username: "ReactJs, NextJs",
    body: "my biggest challenge before the mentorship was understanding how to set up continuous integration and delivery pipelines. the hands-on approach made it clear how devops tools fit together in the real world. i now understand how to automate processes and create a scalable infrastructure, which was exactly what i needed to level up.",
    img: Placeholder,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="wrapper">
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-2xl font-normal text-white">Testimonial</h2>
          <p className="text-sm font-extralight text-[#C2C2C2]">
            From past mentees
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="w-[400px]"
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="w-[450px]"
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="w-[300px]"
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full bg-reviews sm:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

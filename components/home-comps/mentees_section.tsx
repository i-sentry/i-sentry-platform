import React from "react";
// import Placeholder from "@/public/images/placeholder.png";
import MenteeCard from "./mentee_card";
import Ariyo from "@/public/assets/mentees/Ariyo_O.B.png";
import Emem from "@/public/assets/mentees/Emem-Peace.jpg";
import Victor from "@/public/assets/mentees/Victor-udo.jpeg";
import Wangui from "@/public/assets/mentees/Wangui.jpg";
import Taiwo from "@/public/assets/mentees/Taiwo_Oyewale.jpg";
import { StaticImageData } from "next/image";
import Marquee from "../ui/marquee";

const MenteeSection = () => {
  return (
    <section className="py-10">
      <div className="px-4">
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-center text-xl font-medium text-white md:text-3xl md:leading-10">
            Current Mentees
          </h2>
          <p className="text-sm font-extralight text-[#C2C2C2] md:text-base">
            Featured Interns
          </p>
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

export type ILinks = {
  github?: string;
  linkedin?: string;
  email?: string;
  portfolio?: string;
};

type IMentee = {
  name: string;
  alias: string;
  skill: string;
  tools: string;
  photo: StaticImageData;
  comment: string;
  links: ILinks;
};

const professionals: IMentee[] = [
  // {
  //   name: "Timilehin Abegunde",
  //   alias: "Abegunde T.S",
  //   skill: "Frontend Engineer",
  //   tools: "ReactJs/NextJs",
  //   photo: Abegunde,
  //   comment:
  //     "Before joining I-Sentry, my experience was mostly focused on HTML/CSS, JavaScript and WordPress. However, since joining the team and getting hands-on with real-world projects, I’ve been able to significantly improve my skills in ReactJS & NextJS. This experience has not only sharpened my ability to convert designs into code, but it has also given me exposure to working with a variety of logical structures.",
  //   links: {
  //     github: "https://github.com/Atimscreative",
  //     email: "timilehinsunday144@gmail.com",
  //   },
  // },
  {
    name: "Ariyo Oluwadamilola B",
    alias: "Ariyo B.",
    skill: "Product Manager",
    tools: "Jira",
    photo: Ariyo,
    comment:
      "Collaborating with a cross-functional team to drive the completion of a project has been a significant learning curve. The journey has reinforced the importance of teamwork, proper communication, and strategic thinking needed to build a product.",
    links: {
      linkedin:
        "https://www.linkedin.com/in/ariyo-oluwadamilola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "obariyo01@gmail.com",
    },
  },
  {
    name: "Wangui Njoroge",
    alias: "Wangui N.",
    skill: "Frontend Engineer",
    tools: "Bootstrap, Tailwind, JS, React",
    photo: Wangui,
    comment:
      "I have had the best time learning and getting the much needed hands-on experience from industry experts. They are patient, present and encouraging. I can't recommend them enough.",
    links: {
      linkedin: "https://ke.linkedin.com/in/wangui-njoroge-639378181",
      email: "wangoinjoroge450@gmail.com",
    },
  },
  {
    name: "Victor John Udo",
    alias: "Victor U.",
    skill: "QA Tester/Software Tester",
    tools: "Jira, Zephyr Scale",
    photo: Victor,
    comment: "Entry level",
    links: {
      linkedin: "http://linkedin.com/in/victor-udo-55136b2b2",
      email: "victor0094all@gmail.com",
    },
  },
  {
    name: "Eduoku Emem Okon",
    alias: "Eduoku E.",
    skill: "Frontend Engineer",
    tools: "HTML, CSS, Javascript, React, Next JS, Tailwind CSS",
    photo: Emem,
    comment:
      "The experience has been great so far. I have learnt a lot with regards to collaboration on github, API integration, UI state management, website optimisation and many more. The team has also been very helpful with lots of guidance that has helped me deliver on tasks. I am grateful for the opportunity to work with everyone of my team members.",
    links: {
      github: "https://github.com/Codegirlemem",
      linkedin: "https://www.linkedin.com/in/emem-eduoku",
      email: "eduokuemem@gmail.com",
    },
  },
  {
    name: "Taiwo Saidat Oyewale",
    alias: "Taiwo O.",
    skill: "Frontend Engineer",
    tools: "React | Next.js | TypeScript",
    photo: Taiwo,
    comment:
      "My experience thus far has been challenging but rewarding. I've gained industry experience and learned a lot.",
    links: {
      portfolio: "https://my-portfolio-app-eight.vercel.app/",
      github: "https://github.com/TaiwoSaidat",
      linkedin:
        "https://www.linkedin.com/in/taiwo-oyewale199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "oyewaletaiwo1803@gmail.com",
    },
  },
];

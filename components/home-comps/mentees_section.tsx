import React from "react";
import Placeholder from "@/public/images/placeholder.png";
import MenteeCard from "./mentee_card";

const MenteeSection = () => {
  return (
    <section className="py-10">
      <div className="wrapper">
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-2xl font-normal text-white">Testimonial</h2>
          <p className="text-sm font-extralight text-[#C2C2C2]">
            From past mentees
          </p>
        </div>

        <div>
          <MenteeCard image={Placeholder} title={""} description={""} />
        </div>
      </div>
    </section>
  );
};

export default MenteeSection;

type IMentee = {
  name: string;
  alias: string;
  skill: string;
  tools: string;
  photo: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const menteesList: IMentee[] = [
  {
    name: "Abegunde Timilehin",
    alias: "Abegunde T.S",
    skill: "Lead Frontend Engineer",
    tools: "ReactJs, NextJs, TypeScript",
    photo: "",
  },
  {
    name: "Abegunde Timilehin",
    alias: "Abegunde T.S",
    skill: "Lead Frontend Engineer",
    tools: "ReactJs, NextJs, TypeScript",
    photo: "",
  },
];

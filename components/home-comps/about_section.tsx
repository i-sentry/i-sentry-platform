import React from "react";
import Placeholder from "@/public/images/placeholder.png";
import { StaticImageData } from "next/image";
import AboutCard from "./about_card";

type ValueProp = {
  title: string;
  description: string;
  images?: StaticImageData[];
  buttonText?: string;
  listItems?: string[];
};

const coreValues: ValueProp[] = [
  {
    title: "Product Innovation Lab",
    description:
      "Transform ideas into reality with our cutting-edge development capabilities. From concept to deployment, we craft revolutionary           digital solutions that set new industry standards.",
    // images: [Placeholder, Placeholder, Placeholder],
    buttonText: "Explore Our Products",
    listItems: ["Custom Software Development", "IoT Solutions"],
  },
  {
    title: "Product Innovation Lab",
    description:
      "Transform ideas into reality with our cutting-edge development capabilities. From concept to deployment, we craft revolutionary           digital solutions that set new industry standards.",
    // images: [Placeholder, Placeholder, Placeholder],
    buttonText: "Explore Our Products",
    listItems: ["Custom Software Development", "IoT Solutions"],
  },
  {
    title: "Product Innovation Lab",
    description:
      "Transform ideas into reality with our cutting-edge development capabilities. From concept to deployment, we craft revolutionary           digital solutions that set new industry standards.",
    images: [Placeholder, Placeholder, Placeholder],
    // buttonText: "Explore Our Products",
    // listItems: ["Custom Software Development", "IoT Solutions"],
  },
  {
    title: "Product Innovation Lab",
    description:
      "Transform ideas into reality with our cutting-edge development capabilities. From concept to deployment, we craft revolutionary           digital solutions that set new industry standards.",
    images: [Placeholder],
    // buttonText: "Explore Our Products",
    // listItems: ["Custom Software Development", "IoT Solutions"],
  },
];

const About = () => {
  return (
    <>
      <section className="py-10">
        <div className="wrapper">
          <div className="grid gap-6 md:grid-cols-2">
            {coreValues.map((item: ValueProp, index: number) => (
              <AboutCard {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

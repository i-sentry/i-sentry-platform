import React from "react";
import Placeholder from "@/public/images/placeholder.png";
import ServiceCard from "./service_card";
import { StaticImageData } from "next/image";

type ServiceProp = {
  title: string;
  description: string;
  images?: StaticImageData[];
  buttonText?: string;
  listItems?: string[];
};

const services: ServiceProp[] = [
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

const Services = () => {
  return (
    <>
      <section className="py-10">
        <div className="wrapper">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((item: ServiceProp, index: number) => (
              <ServiceCard {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

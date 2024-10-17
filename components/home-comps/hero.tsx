import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Placeholder from "@/public/images/placeholder.png";

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

const Hero = () => {
  return (
    <>
      <section className="h-[50vh] w-full py-20">
        <div className="wrapper">
          <div>
            <h1 className="text-[28px] font-medium text-white">
              Pioneering the Digital Frontier
            </h1>
            <p className="text-center text-sm font-normal leading-5 text-[#C2C2C2CC]">
              Our cutting-edge solutions and global expertise empower businesses
              to navigate and thrive in the digital landscape of tomorrow.
            </p>

            <div className="flex items-center gap-2">
              <Button className="bg-grad-alt h-auto rounded-full border border-[#023B744D] px-8 py-3.5 backdrop-blur-xl">
                Our Services
              </Button>
              <Button className="bg-grad h-auto rounded-full px-8 py-3.5">
                Join our Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="wrapper">
          {services.map((item: ServiceProp, index: number) => (
            <ServiceCard {...item} key={index} />
          ))}
          <div className="bg-box rounded-2xl border border-[#FAFAFA1F] p-6 backdrop-blur-xl">
            <div className="grid grid-cols-3">
              <Image
                src={Placeholder}
                alt="placeholder-img"
                className="h-[200px] w-full rounded-xl object-cover object-center"
              />
            </div>
            <h3 className="font-medium text-white">Product Innovation Lab</h3>
            <p className="my-4 font-inter text-sm font-light text-[#C2C2C2]">
              Transform ideas into reality with our cutting-edge development
              capabilities. From concept to deployment, we craft revolutionary
              digital solutions that set new industry standards.
            </p>
            <ul className="list list-disc pl-4 font-inter text-sm font-light text-[#C2C2C2]">
              <li className="">Custom Software Development</li>
              <li className="">IoT Solutions</li>
            </ul>

            <Button className="bg-grad-alt mt-12 h-auto items-center gap-x-4 rounded-full border border-[#F4F4F40D] px-8 py-3.5 font-dm-sans font-normal">
              Explore Our Products{" "}
              <span>
                <ChevronRight />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

/* 
       <Button className="mx-auto flex rounded-full bg-gradient-to-tr from-base-400 via-orange-400 to-brand-400 p-1 shadow-lg">
              <button className="bg-grad-alt flex-1 rounded-full px-6 py-1 text-xl font-bold">
                Welcome
              </button>
            </Button>


*/

type ComponentProps = {
  showList?: boolean;
  showImages?: boolean;
  images?: StaticImageData[];
  title: string;
  description: string;
  buttonText?: string;
  listItems?: string[];
};
const ServiceCard: React.FC<ComponentProps> = ({
  images,
  listItems,
  showImages = images?.length,
  showList = listItems?.length,
  title,
  description,
  buttonText,
}) => {
  return (
    <>
      <div className="bg-box rounded-2xl border border-[#FAFAFA1F] p-6 backdrop-blur-xl">
        <div className="grid grid-cols-3">
          {showImages &&
            images?.map((img: StaticImageData, index: number) => (
              <Image
                key={index}
                src={img}
                alt="placeholder-img"
                className="h-[200px] w-full rounded-xl object-cover object-center"
              />
            ))}
        </div>
        <h3 className="font-medium text-white">{title}</h3>
        <p className="my-4 font-inter text-sm font-light text-[#C2C2C2]">
          {description}
        </p>
        {showList && (
          <>
            <ul className="list list-disc pl-4 font-inter text-sm font-light text-[#C2C2C2]">
              {listItems?.map((list: string) => <li key={list}>{list}</li>)}
            </ul>

            <Button className="bg-grad-alt mt-12 h-auto items-center gap-x-4 rounded-full border border-[#F4F4F40D] px-8 py-3.5 font-dm-sans font-normal">
              {buttonText}
              <span>
                <ChevronRight />
              </span>
            </Button>
          </>
        )}
      </div>
    </>
  );
};

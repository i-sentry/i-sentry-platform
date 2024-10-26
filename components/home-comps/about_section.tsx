import Consult1 from "@/public/images/consult-1.jpeg";
import Consult2 from "@/public/images/consult-2jpeg.jpeg";
import Consult3 from "@/public/images/consult-3.jpeg";
import Cloud from "@/public/images/cloud-solutions.jpeg";
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
    title: "Proprietary Product Development",
    description:
      "Transform ideas into reality with our cutting-edge development capabilities. From concept to deployment, we craft revolutionary digital solutions that set new industry standards.",
    buttonText: "Explore Our Products",
    listItems: ["Custom Software Development", "IoT Solutions"],
  },
  {
    title: "Global Tech Talent Incubator",
    description:
      "Nurturing tomorrow's tech leaders through our comprehensive year-long internship program. Join a worldwide community of innovators shaping the future.",
    buttonText: "Join our program",
    listItems: [
      "Hands-on Project Experience",
      "Expert Mentorship",
      "Career Development",
    ],
  },
  {
    title: "Expert Consultancy",
    description:
      "We don't just offer consultations - we drive transformation. Our expert consultancy service is your definitive pathway to exceptional technological advancement and business growth.",
    images: [Consult1, Consult2, Consult3],
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable, secure, and efficient cloud infrastructure designed for your unique needs.",
    images: [Cloud],
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

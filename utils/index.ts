import PorkerHut from "@/public/assets/partners/porkerhut.svg";
import TTfcx from "@/public/assets/partners/ttfcx.svg";
import Dataphyte from "@/public/assets/partners/Dataphyte.svg";
import Ri from "@/public/assets/partners/ri-softwares.svg";
import { StaticImageData } from "next/image";
import PorkerHutWeb from "@/public/images/case-studies/porkerhut.png";
import Bankify from "@/public/images/case-studies/bankify.png";

export type LinkProps = {
  name: string;
  url: string;
};

export const clients = [
  { name: "Trusted Transfers", brand: TTfcx },
  { name: "Dataphytes", brand: Dataphyte },
  { name: "Porker Hut", brand: PorkerHut },
  { name: "Ri-softwares", brand: Ri },
];

// NAVBAR MAIN MENU
export const navMenu = [
  {
    url: "/projects",
    name: "Projects",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/services",
    name: "Services",
  },
  {
    url: "/careers",
    name: "Careers",
  },
  {
    url: "/contact",
    name: "Contact us",
  },
];

// FOOTER LINKS
export const solutions: LinkProps[] = [
  {
    name: "Custom Software",
    url: "/custom-software",
  },
  {
    name: "Cloud Solutions",
    url: "/cloud-solutions",
  },
  {
    name: "Tech Consultancy",
    url: "/tech-consultancy",
  },
];

export const programs: LinkProps[] = [
  {
    name: "Mentorship Programs",
    url: "/mentorships",
  },
  {
    name: "Tech Internships",
    url: "/internships",
  },
  {
    name: "Certification",
    url: "/certification",
  },
];

export const aboutUs: LinkProps[] = [
  {
    name: "Careers",
    url: "/careers",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "Contact centre",
    url: "/contact-center",
  },
];

export const legal: LinkProps[] = [
  {
    name: "Terms",
    url: "/terms-of-service",
  },
  {
    name: "Privacy",
    url: "/privacy-policy",
  },
  {
    name: "Settings",
    url: "/settings",
  },
];

export type IProject = {
  id: string;
  title: string;
  isLunched: boolean;
  tags: string[];
  image: StaticImageData;
  slug: string;
  tools: string[];
  client: string;
  url: string;
};

export const caseStudies: IProject[] = [
  {
    id: "0",
    title: "PorkerHut Website",
    isLunched: false,
    tags: ["Web Design", "Web Development", "Marketing", "Creative Direction"],
    image: PorkerHutWeb,
    slug: "porkerhut",
    tools: ["MongoDB", "ReactJS", "AWS"],
    client: "Web Design",
    url: "/",
  },
  {
    id: "1",
    title: "Bankify Fintech Website",
    isLunched: true,
    tags: ["Web Design", "Web Development", "Marketing", "Creative Direction"],
    image: Bankify,
    slug: "bankify",
    tools: ["MongoDB", "ReactJS"],
    client: "Web Design",
    url: "/",
  },
];

import PorkerHut from "@/public/assets/partners/porkerhut.svg";
import TTfcx from "@/public/assets/partners/ttfcx.svg";
import Dataphyte from "@/public/assets/partners/Dataphyte.svg";
import Ri from "@/public/assets/partners/ri-softwares.svg";

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
    url: "/contact-us",
    name: "Contact us",
  },
];

// FOOTER LINKS
export const solutions: LinkProps[] = [
  {
    name: "Custom Software",
    url: "/",
  },
  {
    name: "Cloud Solutions",
    url: "/",
  },
  {
    name: "Tech Consultancy",
    url: "/",
  },
];

export const programs: LinkProps[] = [
  {
    name: "Mentorship Programs",
    url: "/",
  },
  {
    name: "Tech Internships",
    url: "/",
  },
  {
    name: "Certification",
    url: "/",
  },
];

export const aboutUs: LinkProps[] = [
  {
    name: "Careers",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
  },
  {
    name: "Help centre",
    url: "/",
  },
];

export const legal: LinkProps[] = [
  {
    name: "Terms",
    url: "/",
  },
  {
    name: "Privacy",
    url: "/",
  },
  {
    name: "Settings",
    url: "/",
  },
];

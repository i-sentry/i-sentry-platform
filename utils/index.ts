import PorkerHut from "@/public/assets/partners/porkerhut.svg";
import TTfcx from "@/public/assets/partners/ttfcx.svg";
import Dataphyte from "@/public/assets/partners/Dataphyte.svg";
import Ri from "@/public/assets/partners/ri-softwares.svg";

// import { StaticImageData } from "next/image";
// import PorkerHutWeb from "@/public/images/case-studies/porkerhut.png";
// import Bankify from "@/public/images/case-studies/bankify.png";

export type LinkProps = {
  name: string;
  url: string;
  comingSoon?: boolean;
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
    // comingSoon: true,
  },
  {
    name: "Tech Consultancy",
    url: "/tech-consultancy",
    // comingSoon: true,
  },
  {
    name: "Expert guidance & strategy",
    url: "/expert-guidance-and-strategy",
    // comingSoon: true,
  },
  {
    name: "Custom Enterprise Software",
    url: "/custom-enterprise-software",
    // comingSoon: true,
  },
  {
    name: "Cloud Solutions",
    url: "/cloud-solutions",
    comingSoon: true,
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
    // comingSoon: true,
  },
  {
    name: "Professional Training",
    url: "#",
    // comingSoon: true,
  },
  {
    name: "Corporate Training",
    url: "#",
    comingSoon: true,
  },
];

// "Professional Training";
// Add: "";

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
  {
    name: "Our Impact",
    url: "/our-impact",
  },
  {
    name: "Success Stories",
    url: "/success-stories",
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
    name: "Security",
    url: "/security",
  },
  {
    name: "Compliance",
    url: "/compliance",
  },
];

export type IProject = {
  tools: string[];
  client: string;
  url: string;
  descriptions: string[];
  id: string;
  slug: {
    current: string;
    _type: string;
  };
  services: string[];
  image: {
    asset: {
      url: string;
    };
  }[];
  title: string;
  isLaunched: boolean;
};

// export const caseStudies: IProject[] = [
//   {
//     id: "0",
//     title: "PorkerHut Website",
//     isLunched: false,
//     tags: ["Web Design", "Web Development", "Marketing", "Creative Direction"],
//     image: PorkerHutWeb,
//     slug: "porkerhut",
//     tools: ["MongoDB", "ReactJS", "AWS"],
//     client: "Web Design",
//     url: "/",
//     industry: "Ecommerce, Agriculture",
//   },
//   {
//     id: "1",
//     title: "Bankify Fintech Website",
//     isLunched: true,
//     tags: ["Web Design", "Web Development", "Marketing", "Creative Direction"],
//     image: Bankify,
//     slug: "bankify",
//     tools: ["MongoDB", "ReactJS"],
//     client: "Web Design",
//     url: "/",
//     industry: "Fintech",
//   },
// ];

export type StatProps = {
  percentage: string;
  title: string;
};

export const stats: StatProps[] = [
  {
    percentage: "1000+",
    title: "Businesses Transformed \n Through our enterprise digital solutions",
  },
  {
    percentage: "85%",
    title: "Career Advancement Rate \n For our certified graduates",
  },
  {
    percentage: "24/7",
    title: "Technical Support & Expert Consultant services",
  },
];

// MENTORSHIP
export type SolutionProp = {
  icon: React.JSX.Element;
  title: string;
  description: string;
  keyFeatures: string[];
};

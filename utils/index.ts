// import PorkerHut from "@/public/assets/partners/porkerhut.svg";
// import TTfcx from "@/public/assets/partners/ttfcx.svg";
// import Dataphyte from "@/public/assets/partners/Dataphyte.svg";
// import Ri from "@/public/assets/partners/ri-softwares.svg";
// import { StaticImageData } from "next/image";
// import PorkerHutWeb from "@/public/images/case-studies/porkerhut.png";
// import Bankify from "@/public/images/case-studies/cake-app.jpg";
// import Ariyo from "@/public/assets/mentees/Ariyo_O.B.png";
// import Emem from "@/public/assets/mentees/Emem-Peace.jpg";
// import Victor from "@/public/assets/mentees/Victor-udo.jpeg";
// import Wangui from "@/public/assets/mentees/Wangui.jpg";
// import Taiwo from "@/public/assets/mentees/Taiwo_Oyewale.jpg";
// import Gideon from "@/public/assets/mentees/gideon.webp";

export type LinkProps = {
  name: string;
  url: string;
  comingSoon?: boolean;
};

export const clients = [
  { name: "Trusted Transfers", brand: "/assets/partners/ttfcx.svg" },
  { name: "Dataphytes", brand: "/assets/partners/Dataphyte.svg" },
  { name: "Porker Hut", brand: "/assets/partners/porkerhut.svg" },
  { name: "Ri-softwares", brand: "/assets/partners/ri-softwares.svg" },
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
  // {
  //   name: "Custom Enterprise Software",
  //   url: "/custom-enterprise-software",
  //   // comingSoon: true,
  // },
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
    url: "/internship",
  },
  {
    name: "Certification",
    url: "#",
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
    url: "#",
  },
  {
    name: "Success Stories",
    url: "#",
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
    url: "#",
  },
  {
    name: "Compliance",
    url: "#",
  },
];

export type IProject = {
  id: string;
  title: string;
  isLunched: boolean;
  tags: string[];
  image: string;
  slug: string;
  tools: string[];
  client: string;
  url: string;
  industry: string;
  descriptions: string[];
  info: string;
};

export const caseStudies: IProject[] = [
  {
    id: "0",
    title: "PorkerHut Website",
    isLunched: false,
    tags: ["Web Design", "Web Development", "Marketing", "Creative Direction"],
    image: "/images/case-studies/porkerhut.png",
    slug: "porkerhut",
    tools: ["MongoDB", "ReactJS", "AWS"],
    client: "Web Design",
    url: "https://porker-hut-frontend-client.vercel.app/",
    industry: "Ecommerce, Agriculture",
    descriptions: [
      "Porkerhut is an agro-based e-commerce platform that blends online convenience with in-store shopping for pork products. It offers customers a flexible, accessible way to shop from home or in person.",
      "It also serves as a vendor marketplace, helping sellers reach more customers. By digitizing the pork supply chain, Porkerhut streamlines operations and modernizes the buying and selling experience.",
    ],
    info: "Porkerhut is an agro-based e-commerce platform that blends online convenience with in-store shopping for pork products",
  },
  {
    id: "1",
    title: "The Cake App",
    isLunched: true,
    tags: ["Web Design", "Web Development", "Marketing", "Creative Direction"],
    image: "/images/case-studies/cake-app.jpg",
    slug: "the-cake-app",
    tools: ["MongoDB", "NextJS", "Vercel"],
    client: "Web Design",
    url: "https://goldies-frontend-v3.vercel.app/",
    industry: "Ecommerce, Bakery",
    descriptions: [
      "The Cake App is an online platform to purchase delicious cakes. It offers a range of pre-designed options and a custom design service for unique creations tailored to any event or preference.",
      "Your online destination for delicious cakes, The Cake App offers both ready-to-order designs and personalized custom creations for any occasion, catering to diverse customer needs.",
    ],
    info: "The Cake App is an online platform to purchase delicious cakes, offering a wide variety of flavors, custom designs to suit every occasion.",
  },
];

export type StatProps = {
  percentage: number;
  title: string;
  symbol: string;
};

export const stats: StatProps[] = [
  {
    percentage: 1000,
    title: "Businesses Transformed \n Through our enterprise digital solutions",
    symbol: "+",
  },
  {
    percentage: 85,
    title: "Career Advancement Rate \n For our certified graduates",
    symbol: "%",
  },
  {
    percentage: 24,
    title: "Technical Support & Expert Consultant services",
    symbol: "/7",
  },
];

// MENTORSHIP
export type SolutionProp = {
  icon: React.JSX.Element;
  title: string;
  description: string;
  keyFeatures: string[];
};

export type ILinks = {
  github?: string;
  linkedin?: string;
  email?: string;
  portfolio?: string;
};

export type IMentee = {
  name: string;
  alias: string;
  skill: string;
  tools: string;
  photo: string;
  comment: string;
  links: ILinks;
};

export const professionals: IMentee[] = [
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
    photo: "/assets/mentees/Ariyo_O.B.png",
    comment:
      "Collaborating with a cross-functional team to drive the completion of a project has been a significant learning curve. The journey has reinforced the importance of teamwork, proper communication, and strategic thinking needed to build a product.",
    links: {
      linkedin:
        "https://www.linkedin.com/in/ariyo-oluwadamilola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "obariyo01@gmail.com",
    },
  },
  {
    name: "Taiwo Saidat Oyewale",
    alias: "Taiwo O.",
    skill: "Frontend Engineer",
    tools: "React | Next.js | TypeScript",
    photo: "/assets/mentees/Taiwo_Oyewale.jpg",
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
  {
    name: "Wangui Njoroge",
    alias: "Wangui N.",
    skill: "Frontend Engineer",
    tools: "Tailwind, JS, React, NextJS, Typescript",
    photo: "/assets/mentees/Wangui.jpg",
    comment:
      "I have had the best time learning and getting the much needed hands-on experience from industry experts. They are patient, present and encouraging. I can't recommend them enough.",
    links: {
      github: "https://github.com/R-Wangui",
      linkedin: "https://ke.linkedin.com/in/wangui-njoroge-639378181",
      email: "wangoinjoroge450@gmail.com",
    },
  },
  {
    name: "Victor John Udo",
    alias: "Victor U.",
    skill: "QA Tester/Software Tester",
    tools: "Jira, Zephyr Scale",
    photo: "/assets/mentees/Victor-udo.jpeg",
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
    photo: "/assets/mentees/Emem-Peace.jpg",
    comment:
      "The experience has been great so far. I have learnt a lot with regards to collaboration on github, API integration, UI state management, website optimisation and many more. The team has also been very helpful with lots of guidance that has helped me deliver on tasks. I am grateful for the opportunity to work with everyone of my team members.",
    links: {
      github: "https://github.com/Codegirlemem",
      linkedin: "https://www.linkedin.com/in/emem-eduoku",
      email: "eduokuemem@gmail.com",
    },
  },

  {
    name: "Gideon Sunday",
    alias: "Gideon S.",
    skill: "Project Manager",
    tools: "Click-up",
    photo: "/assets/mentees/gideon.webp",
    comment:
      "I-Sentry is committed to nurturing future tech leaders and my experience has been to help create seamless and efficient project workflows-project planning, tracking progress, and ensuring timely delivery. Proud to be part of a community driving innovation for business and individual growth.",
    links: {
      portfolio: "https://my-portfolio-app-eight.vercel.app/",
      linkedin: "https://www.linkedin.com/in/gideon-sunday",
      email: "sundaygideon73@gmail.com",
    },
  },
];

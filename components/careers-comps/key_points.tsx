import { BsTools } from "react-icons/bs";
import { Users, Puzzle, TrendingUp, Award, Heart } from "lucide-react";

// import SmartLinkButton from "../custom_button";

type KPIProps = {
  icon: React.JSX.Element;
  title: string;
  content: string;
};

const KPIs: KPIProps[] = [
  {
    icon: <Users size={20} />,
    title: "Collaborate on Cutting-Edge Solutions",
    content:
      "Work alongside our talented engineers, developers and product experts to build innovative software and digital solutions that drive technological advancement. You'll be at the forefront of emerging technologies and industry trends, constantly expanding your skills and knowledge.",
  },
  {
    icon: <Puzzle size={20} />,
    title: "Tackle Complex, Rewarding Challenges",
    content:
      "Sink your teeth into high-impact projects that push the boundaries of what's possible. Whether you're optimizing legacy systems, developing new platforms or automating complex workflows, you'll have the chance to demonstrate your strategic thinking, problem-solving abilities and creative flair.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Accelerate Your Professional Growth",
    content:
      "Take advantage of our robust training programs, mentorship opportunities and continuing education support to continuously evolve your skillset. We're committed to providing the resources and guidance you need to unlock your full potential and advance your career.",
  },
  {
    icon: <BsTools size={20} />,
    title: "Leverage Best-in-Class Tools and Technologies",
    content:
      "Explore and leverage the latest tools, frameworks and platforms used by the world's leading companies. Our extensive integrations and developer-friendly ecosystem empowers you to work efficiently, experiment fearlessly and deliver exceptional results.",
  },
  {
    icon: <Award size={20} />,
    title: "Contribute to a Culture of Excellence",
    content:
      "Join a team of passionate, highly skilled professionals who share your drive for innovation and commitment to client success. Collaborate on cross-functional initiatives, share knowledge, and learn from the best as you help shape our inclusive, high-performance culture.",
  },
  {
    icon: <Heart size={20} />,
    title: "Make a Meaningful Impact",
    content:
      "As a key member of the I-Sentry team, you'll play a vital role in transforming businesses and empowering individuals through technology. Your contributions will have a direct, measurable influence on our clients' growth and evolution, giving you a profound sense of purpose.",
  },
];

const KeyPoints = () => {
  return (
    <section>
      <div className="wrapper">
        {/* JOIN THE TEAM */}
        {/* <div className="md:w-3/4 lg:w-1/2">
          <h3 className="mb-2 font-dm-sans text-2xl text-white">
            Join a team of makers
          </h3>
          <p className="text-sm font-light leading-normal text-primary-100">
            At I-Sentry, we&apos;re building the future of technology. If
            you&apos;re a self-aware, strategic thinker who thrives on
            innovation, we want you on our team. Our team embodies our core
            values of innovation, quality, collaboration, integrity,
            customer-centricity and sustainability. If this resonates with you,
            we&apos;d love to talk.
          </p>
          <SmartLinkButton
            variant="dark"
            buttonText="Meet the Team"
            showAnimatedIcon
            className="mt-4 px-4 py-2 text-xs md:mt-10"
            url="/about#team"
            isLink
          />
        </div> */}
        {/* KPI */}

        <div className="mt-10">
          <h2 className="mb-2 font-dm-sans text-2xl text-white">
            Grow Your Career with Us
          </h2>
          <p className="text-sm font-light leading-normal text-primary-100">
            As an I-Sentry team member, you&apos;ll have the opportunity to:
          </p>
        </div>
        <div className="my-14 grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {KPIs.map((kpi, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-[8px] border-solid border-secondary-800 bg-secondary-500 text-primary-50">
                  {kpi.icon}
                </span>
                <h3 className="mb-2 font-dm-sans text-lg font-medium text-white">
                  {kpi.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-primary-100 md:text-base">
                  {kpi.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;

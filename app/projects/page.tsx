import ProjectCard from "@/components/projects-comps/project_card";
import EachElement from "@/components/widgets/list_rendering";
import React from "react";
import PorkerHut from "@/public/images/case-studies/porkerhut.png";
import Bankify from "@/public/images/case-studies/bankify.png";
import Image, { StaticImageData } from "next/image";
import Marquee from "@/components/ui/marquee";
import { clients } from "@/utils";
import { cn } from "@/lib/utils";

const Projects = () => {
  return (
    <>
      <section className="py-24">
        <div className="wrapper">
          {/* HEADING */}
          <div>
            
            <div className="text-center">
              <p className="text-sm text-base-200">Case Studies</p>
              <h2 className="mb-4 mt-3 font-dm-sans text-[28px] font-medium text-white">
                Crafting unique solutions
              </h2>
              <p className="text-sm font-light text-brand-100">
                Ready to transform your ideas into reality? Whether you&apos;re
                looking for digital solutions or interested in our mentorship
                program, we&apos;re here to help.
              </p>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-light text-brand-100">
                Transform your career trajectory through our intensive year-long
                mentorship program. At I-Sentry Technologies, we don&apos;t just
                teach—we immerse you in real-world projects, surround you with
                industry experts, and guide your journey from aspiring developer
                to tech professional.
              </p>
            </div>
          </div>

          {/* CASE STUDIES */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <EachElement
              of={caseStudies}
              render={(item: IProject, index: number) => {
                return <ProjectCard key={item?.title + index} data={item} />;
              }}
            />
          </div>

          {/* PARTNERS */}
          <div className="mt-10 md:mt-28">
            <h2 className="text-center font-dm-sans text-[20px] font-medium text-white md:text-[32px]">
              Pioneering companies trust us to
              <br className="hidden md:block" /> deliver cutting-edge solutions.
            </h2>

            <div className="relative mt-4">
              <div className="absolute left-0 top-0 z-10 h-full w-full scale-110 bg-partners"></div>

              <Marquee
                pauseOnHover
                className="[--duration:20s] [--gap:2rem] md:[--gap:5rem]"
              >
                {clients.map((client, index) => (
                  <Image
                    key={client?.name + index}
                    src={client?.brand}
                    alt={client?.name}
                    className={cn(
                      "aspect-[9/4] w-[100px]",
                      client?.name === "Porker Hut" && "scale-[1.3]",
                    )}
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

export type IProject = {
  title: string;
  isLunched: boolean;
  tags: string[];
  image: StaticImageData;
};

const caseStudies: IProject[] = [
  {
    title: "PorkerHut Website",
    isLunched: false,
    tags: ["Web Design", "Web Development", "Marketing", "Creative Direction"],
    image: PorkerHut,
  },
  {
    title: "Bankify Fintech Website",
    isLunched: true,
    tags: ["Web Design", "Web Development", "Marketing", "Creative Direction"],
    image: Bankify,
  },
];

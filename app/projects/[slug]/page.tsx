"use client";
import React, { useEffect, useState } from "react";
import PlaceHolder from "@/public/images/placeholder.png";
import Image from "next/image";
import { caseStudies, IProject } from "@/utils";
import EachElement from "@/components/widgets/list_rendering";
import { Badge } from "@/components/ui/badge";
import SmartButton from "@/components/custom_button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import ProjectCard from "@/components/projects-comps/project_card";
type ComponentProps = {
  params: {
    slug: string;
    id: string | number;
  };
};

const ProjectDetails: React.FC<ComponentProps> = ({ params }) => {
  const [project, setProject] = useState<IProject>();

  console.log(params, "params", params?.id);

  useEffect(() => {
    setProject(caseStudies.find((item) => item?.slug === params?.slug));
  }, [params?.slug]);
  return (
    <>
      <section className="py-28">
        <div className="wrapper">
          {/* PROJECT THUMBNAIL */}
          <Image
            src={project?.image || PlaceHolder}
            alt="placeholder"
            className="h-[300px] w-full rounded-lg object-cover object-center sm:h-[400px] md:h-[500px] lg:h-[650px]"
          />

          {/* PROJECT DETAILS */}
          <h1 className="mb-16 mt-14 text-[2rem] font-medium text-white">
            {project?.title || "No project name"}
          </h1>
          <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2">
            <div className="space-y-6">
              {/* SERVICES */}
              <div>
                <h2 className="mb-4 font-dm-sans text-lg font-medium text-white">
                  Services
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  <EachElement
                    of={project?.tags}
                    render={(tag: string) => (
                      <Badge
                        key={tag}
                        className="text-primary-900 inline-block rounded-full bg-white px-6 py-3 font-dm-sans font-normal hover:bg-white"
                      >
                        {tag}
                      </Badge>
                    )}
                  />
                </div>
              </div>
              {/* TOOLs */}
              <div>
                <h2 className="mb-4 font-dm-sans text-lg font-medium text-white">
                  Tools
                </h2>
                <div className="flex items-center gap-3">
                  <EachElement
                    of={project?.tools}
                    render={(tool: string) => (
                      <Badge
                        key={tool}
                        className="text-primary-900 inline-block rounded-full bg-white px-6 py-3 font-dm-sans font-normal hover:bg-white"
                      >
                        {tool}
                      </Badge>
                    )}
                  />
                </div>
              </div>

              {/* CLIENT */}
              <div>
                <h2 className="mb-4 font-dm-sans text-lg font-medium text-white">
                  Client
                </h2>
                <div className="flex items-center gap-3">
                  <Badge className="text-primary-900 inline-block rounded-full bg-white px-6 py-3 font-dm-sans font-normal hover:bg-white">
                    {project?.client}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="mb-6 text-lg font-medium text-white">
                Our approach
              </h3>
              <p className="font-inter font-light leading-normal text-white">
                The amazing team at Porkerhut came to us to build their
                e-commerce website for selling pork meat and farm produce. We
                focused on quickly setting up key pages and working closely with
                them to add more features and enhancements. We built the site
                using React, contributing to the creative direction and
                animations to ensure it stayed true to the brand&apos;s visual
                identity. Our approach The amazing team at Porkerhut came to us
                to build their e-commerce website for selling pork meat and farm
                produce. We focused on quickly setting up key pages and working
                closely with them to add more features and enhancements.
                <br /> <br />
                We built the site using React, contributing to the creative
                direction and animations to ensure it stayed true to the
                brand&apos;s visual identity.
              </p>

              <SmartButton
                variant="dark"
                className="mt-8 border-opacity-75 bg-link hover:shadow-white/5"
                buttonText={
                  <>
                    <span>Live Link</span>
                    <span>
                      <ArrowTopRightIcon />
                    </span>
                  </>
                }
              />
            </div>
          </div>

          {/* OTHER PROJECT IMAGES */}
          <div className="mt-20 flex flex-wrap justify-center gap-6 *:h-[300px] *:rounded-xl *:object-cover *:object-center *:md:h-[400px]">
            <Image
              src={PlaceHolder}
              alt="placeholder"
              className="w-[95%] sm:w-[80%]"
            />
            <Image
              src={PlaceHolder}
              alt="placeholder"
              className="hidden w-[calc(50%_-_20px)] md:block"
            />
            <Image
              src={PlaceHolder}
              alt="placeholder"
              className="hidden w-[calc(50%_-_20px)] md:block"
            />
            <Image src={PlaceHolder} alt="placeholder" className="w-full" />
          </div>

          {/* RELATED POSTS */}
          {/* CASE STUDIES */}
          <div className="mt-16 border-t border-[#F9F9F94D] pt-10">
            <h4 className="font-dm-sans text-lg font-medium text-white">
              Next project
            </h4>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <EachElement
                of={caseStudies}
                render={(item: IProject, index: number) => {
                  return <ProjectCard key={item?.title + index} data={item} />;
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;

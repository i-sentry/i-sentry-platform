"use client";
import React, { useEffect, useState } from "react";
import PlaceHolder from "@/public/images/placeholder.png";
import Image from "next/image";
import { caseStudies, IProject } from "@/utils";
import EachElement from "@/components/widgets/list_rendering";
import { Badge } from "@/components/ui/badge";
import SmartButton from "@/components/custom_button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
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
      {/* PROJECT THUMBNAIL */}
      <section className="py-28">
        <div className="wrapper">
          <Image
            src={project?.image || PlaceHolder}
            alt="placeholder"
            className="h-[300px] w-full rounded-lg object-cover object-center lg:h-[500px]"
          />

          <h1 className="mb-16 mt-14 text-[2rem] font-medium text-white">
            {project?.title || "No project name"}
          </h1>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2">
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
                        className="inline-block rounded-full bg-white px-6 py-3 font-dm-sans font-normal text-brand-900 hover:bg-white"
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
                        className="inline-block rounded-full bg-white px-6 py-3 font-dm-sans font-normal text-brand-900 hover:bg-white"
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
                  <Badge className="inline-block rounded-full bg-white px-6 py-3 font-dm-sans font-normal text-brand-900 hover:bg-white">
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
                animations to ensure it stayed true to the brand’s visual
                identity. Our approach The amazing team at Porkerhut came to us
                to build their e-commerce website for selling pork meat and farm
                produce. We focused on quickly setting up key pages and working
                closely with them to add more features and enhancements.
                <br /> <br />
                We built the site using React, contributing to the creative
                direction and animations to ensure it stayed true to the brand’s
                visual identity.
              </p>

              <SmartButton
                variant="dark"
                className="bg-link mt-8 border-opacity-75 hover:shadow-white/5"
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
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;

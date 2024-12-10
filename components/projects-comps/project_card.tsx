"use client";

import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import EachElement from "../widgets/list_rendering";
import { useMediaQuery } from "usehooks-ts";
import { IProject } from "@/utils";
import SmartLinkButton from "../custom_button";

type ComponentProps = {
  data: IProject;
};

const ProjectCard: React.FC<ComponentProps> = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  console.log(data.slug, "slug");

  return (
    <SmartLinkButton
      variant="bright"
      className="bg-transparent text-left hover:shadow-none"
      isLink
      url={`/projects/${data?.slug?.current}`}
      buttonText={
        <div className="block rounded-[16px] bg-box p-4 lg:p-6">
          <figure className="relative h-[300px] overflow-hidden rounded-[8px] md:h-[350px] xl:h-[400px]">
            <div className="relative z-10 p-6">
              {/* COMING SOON BADGE */}
              {!data?.isLaunched && (
                <Badge className="mb-6 inline-block rounded-full border border-[#FAFAFA1F] bg-secondary-700 px-6 py-2 font-dm-sans font-light text-white hover:bg-secondary-700">
                  Coming Soon
                </Badge>
              )}

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">
                <EachElement
                  of={data?.services}
                  render={(tag: string, index: number) => {
                    if (isMobile) {
                      if (index === 0) {
                        return (
                          <Badge
                            key={tag}
                            className="inline-block rounded-full bg-white/80 px-6 py-3 font-dm-sans font-light text-primary-900 hover:bg-white"
                          >
                            {tag}
                          </Badge>
                        );
                      } else if (index === 1) {
                        return (
                          <Badge
                            key={tag}
                            className="inline-block rounded-full bg-white/80 px-6 py-3 font-dm-sans font-light text-primary-900 hover:bg-white"
                          >
                            ...
                          </Badge>
                        );
                      }
                    } else {
                      return (
                        <Badge
                          key={tag}
                          className="inline-block rounded-full bg-white/80 px-6 py-3 font-dm-sans font-light text-primary-900 hover:bg-white"
                        >
                          {tag}
                        </Badge>
                      );
                    }
                  }}
                />
              </div>
            </div>
            <div className="absolute left-0 top-0 z-[2] h-full w-full bg-primary-900/10" />
            <Image
              src={data?.image[0]?.asset?.url}
              alt={data?.title}
              width="1000"
              height="1000"
              className="absolute top-0 h-full w-full object-cover object-center"
            />
          </figure>

          <figcaption className="mt-8 text-base font-medium text-white">
            {data?.title}
          </figcaption>
        </div>
      }
    />
  );
};

export default ProjectCard;

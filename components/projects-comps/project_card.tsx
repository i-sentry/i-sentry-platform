"use client";

import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import EachElement from "../widgets/list_rendering";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import { IProject } from "@/utils";

type ComponentProps = {
  data: IProject;
};

const ProjectCard: React.FC<ComponentProps> = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Link
      href={`/projects/${data?.slug}`}
      className="block rounded-[16px] bg-box p-4 lg:p-6"
    >
      <figure className="relative h-[300px] overflow-hidden rounded-[8px] md:h-[350px] xl:h-[400px]">
        <div className="relative z-10 p-6">
          {/* COMING SOON BADGE */}
          {!data?.isLunched && (
            <Badge className="mb-6 inline-block rounded-full border border-[#FAFAFA1F] bg-base-700 px-6 py-2 font-dm-sans font-light hover:bg-base-700">
              Coming Soon
            </Badge>
          )}

          {/* TAGS */}
          <div className="flex flex-wrap gap-3">
            <EachElement
              of={data?.tags}
              render={(tag: string, index: number) => {
                if (isMobile) {
                  if (index === 0) {
                    return (
                      <Badge
                        key={tag}
                        className="inline-block rounded-full bg-white/80 px-6 py-3 font-dm-sans font-light text-brand-900 hover:bg-white"
                      >
                        {tag}
                      </Badge>
                    );
                  } else if (index === 1) {
                    return (
                      <Badge
                        key={tag}
                        className="inline-block rounded-full bg-white/80 px-6 py-3 font-dm-sans font-light text-brand-900 hover:bg-white"
                      >
                        ...
                      </Badge>
                    );
                  }
                } else {
                  return (
                    <Badge
                      key={tag}
                      className="inline-block rounded-full bg-white/80 px-6 py-3 font-dm-sans font-light text-brand-900 hover:bg-white"
                    >
                      {tag}
                    </Badge>
                  );
                }
              }}
            />
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[2] h-full w-full bg-brand-900/10" />
        <Image
          src={data?.image}
          alt={data?.title}
          width="1000"
          height="1000"
          className="absolute top-0 h-full w-full object-cover object-center"
        />
      </figure>

      <figcaption className="mt-8 text-base font-medium text-white">
        {data?.title}
      </figcaption>
    </Link>
  );
};

export default ProjectCard;

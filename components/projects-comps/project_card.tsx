"use client";

import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import EachElement from "../widgets/list_rendering";
// import { useMediaQuery } from "usehooks-ts";
import { IProject } from "@/utils";
import Link from "next/link";

type ComponentProps = {
  data: IProject;
};

const ProjectCard: React.FC<ComponentProps> = ({ data }) => {
  // const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="block rounded-[16px] bg-box p-4 lg:p-6">
      <figure className="relative h-[200px] overflow-hidden rounded-[8px] md:h-[350px] xl:h-[400px]">
        {/* COMING SOON BADGE */}
        {!data?.isLunched && (
          <Badge className="absolute left-1 top-1.5 z-10 inline-block rounded-[5px] border border-[#FAFAFA1F] bg-secondary-700 font-dm-sans font-light text-white hover:bg-secondary-700">
            Coming Soon
          </Badge>
        )}

        {/* <div className="absolute left-0 top-0 z-[2] h-full w-full bg-primary-900/10" /> */}
        <Image
          src={data?.image}
          alt={data?.title}
          width="1000"
          height="1000"
          className="absolute top-0 h-full w-full object-contain object-center"
        />
      </figure>

      <div className="mt-4">
        <Link
          href={`/projects/${data.slug}`}
          className="mb-2 text-xl font-medium text-white hover:underline"
        >
          {data?.title}
        </Link>
        <p className="text-base text-primary-100">{data?.info}</p>
        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          <EachElement
            of={data?.tags}
            render={(tag: string, index: number) => {
              return (
                <Badge
                  variant="outline"
                  key={tag + index}
                  className="inline-block rounded-full border border-primary-100 font-dm-sans font-light text-primary-100"
                >
                  {tag}
                </Badge>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

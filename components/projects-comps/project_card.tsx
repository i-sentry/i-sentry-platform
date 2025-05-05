"use client";

import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import EachElement from "../widgets/list_rendering";
import { useMediaQuery } from "usehooks-ts";
import { IProject } from "@/utils";
import Link from "next/link";

type ComponentProps = {
  data: IProject;
};

const ProjectCard: React.FC<ComponentProps> = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="block rounded-[16px] bg-box p-4 lg:p-6">
      <figure className="relative h-[300px] overflow-hidden rounded-[8px] md:h-[350px] xl:h-[400px]">
        {/* COMING SOON BADGE */}
        {!data?.isLunched && (
          <Badge className="absolute left-5 top-3 z-10 my-2 inline-block rounded-full border border-[#FAFAFA1F] bg-secondary-700 font-dm-sans font-light text-white hover:bg-secondary-700">
            Coming Soon
          </Badge>
        )}

        <div className="absolute left-0 top-0 z-[2] h-full w-full bg-primary-900/10" />
        <Image
          src={data?.image}
          alt={data?.title}
          width="1000"
          height="1000"
          className="absolute top-0 h-full w-full object-cover object-center"
        />
      </figure>

      <div className="mt-4">
        <Link
          href={`/projects/${data.slug}`}
          className="mb-2 text-xl font-medium text-white hover:underline"
        >
          {data?.title}
        </Link>
        <p className="text-base text-primary-100">
          {data?.info ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, reiciendis nisi! Officia in eius enim obcaecati sunt? "}
        </p>
        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-1">
          <EachElement
            of={data?.tags}
            render={(tag: string, index: number) => {
              if (isMobile) {
                if (index === 0) {
                  return (
                    <Badge
                      variant="outline"
                      key={tag}
                      className="inline-block rounded-full border border-primary-100 font-dm-sans font-light text-primary-100"
                    >
                      {tag}
                    </Badge>
                  );
                } else if (index === 1) {
                  return (
                    <Badge
                      variant="outline"
                      key={tag}
                      className="inline-block rounded-full border border-primary-100 font-dm-sans font-light text-primary-100"
                    >
                      ...
                    </Badge>
                  );
                }
              } else {
                return (
                  <Badge
                    variant="outline"
                    key={tag}
                    className="inline-block rounded-full border border-primary-100 font-dm-sans font-light text-primary-100"
                  >
                    {tag}
                  </Badge>
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

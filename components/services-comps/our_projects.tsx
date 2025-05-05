// import { Skeleton } from "@/components/ui/skeleton";
import EachElement from "@/components/widgets/list_rendering";
import React from "react";
import { cn } from "@/lib/utils";
import { caseStudies, IProject } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const OurProjects = () => {
  return (
    <section className="py-10">
      <div className="wrapper">
        <h2 className="mb-8 text-2xl font-medium text-white md:text-3xl md:leading-tight">
          Explore our projects
        </h2>

        <div className="flex w-full gap-6 overflow-y-hidden no-scrollbar">
          <EachElement
            of={caseStudies}
            render={(data: IProject, index: number) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex h-[400px] w-[360px] flex-wrap items-end justify-between overflow-hidden rounded-3xl md:w-[380px]",
                  )}
                >
                  <Image
                    src={data?.image}
                    alt={data?.title}
                    width="500"
                    height="500"
                    className="absolute top-0 h-full w-full rounded-3xl object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 z-10 flex h-max w-full flex-col justify-end bg-primary-900/50 p-6 backdrop-blur-md">
                    <Link
                      href={`/project/${data.slug}`}
                      className="mb-1 text-lg font-normal text-white"
                    >
                      {data?.title}
                    </Link>
                    <p className="text-sm text-primary-50">
                      {data?.tools?.join(", ")}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

// const SkeletonLoader = () => {
//   return (
//     <Skeleton className="flex h-[400px] w-[350px] flex-wrap items-end justify-between rounded-3xl bg-primary-100/10 p-6">
//       <div className="w-full space-y-2">
//         <Skeleton className="h-4 w-3/4 rounded bg-primary-100/10" />
//         <Skeleton className="h-2.5 w-1/2 rounded bg-primary-100/10" />
//       </div>
//     </Skeleton>
//   );
// };

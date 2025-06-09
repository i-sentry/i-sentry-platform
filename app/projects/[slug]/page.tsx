"use client";
import React, { useEffect, useState } from "react";
// import PlaceHolder from "@/public/images/placeholder.png";
import Image from "next/image";
import { caseStudies, IProject } from "@/utils";
import EachElement from "@/components/widgets/list_rendering";
import { Badge } from "@/components/ui/badge";
import SmartButton from "@/components/custom_button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import ProjectCard from "@/components/projects-comps/project_card";
// import { Skeleton } from "@/components/ui/skeleton";
type ComponentProps = {
  params: {
    slug: string;
    id: string | number;
  };
};

const ProjectDetails: React.FC<ComponentProps> = ({ params }) => {
  const [project, setProject] = useState<IProject>();
  const { slug } = params;

  useEffect(() => {
    setProject(caseStudies.find((item) => item.slug === slug));
  }, [slug]);

  console.log(slug, project, caseStudies);

  return (
    <>
      <section className="py-28">
        <div className="wrapper">
          <>
            <Image
              src="/images/placeholder.png"
              width={1000}
              height={1000}
              alt="placeholder"
              className="h-[300px] w-full rounded-[12px] object-cover object-center sm:h-[400px] md:h-[500px] lg:h-[650px]"
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
                      of={project?.tags as string[]}
                      render={(tag: string) => (
                        <Badge
                          key={tag}
                          className="inline-block rounded-full bg-white font-dm-sans font-normal text-primary-900 hover:bg-white"
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
                      of={project?.tools as string[]}
                      render={(tool: string) => (
                        <Badge
                          key={tool}
                          className="inline-block rounded-full bg-white font-dm-sans font-normal text-primary-900 hover:bg-white"
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
                    <Badge className="inline-block rounded-full bg-white font-dm-sans font-normal text-primary-900 hover:bg-white">
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
                  {project?.descriptions[0]}
                  <br /> <br />
                  {project?.descriptions[1]}
                </p>

                <SmartButton
                  variant="dark"
                  isLink
                  url={project?.url || "/"}
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
            {/* <div className="mt-20 flex flex-wrap justify-center gap-6">
              <Image
                src={project?.image || PlaceHolder}
                alt="placeholder"
                width={1000}
                height={1000}
                className={cn(
                  "h-[300px] w-full rounded-xl object-cover object-center md:h-[400px]",
                  // index === 0 && "w-[95%] sm:w-[80%]",
                  // index >= 1 &&
                  //   index <= 2 &&
                  //   "hidden w-[calc(50%_-_20px)] md:block",
                  // index === 3 && "lg:h-[600px]",
                )}
              />
            </div> */}
          </>

          {/* RELATED PROJECTS */}
          <div className="mt-16 border-t border-[#F9F9F94D] pt-10">
            <h4 className="font-dm-sans text-lg font-medium text-white">
              Next project
            </h4>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <EachElement
                of={caseStudies.filter((item) => item.slug !== slug)}
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

// const SkeletonLoader = () => {
//   return (
//     <div className="">
//       {/* PROJECT THUMBNAIL */}
//       <Skeleton className="h-[300px] w-full rounded-[12px] bg-primary-100/10 object-cover object-center sm:h-[400px] md:h-[500px] lg:h-[650px]" />

//       {/* PROJECT TITLE */}
//       <Skeleton className="my-10 h-6 w-full rounded bg-primary-100/10" />

//       {/* PROJECT INFO */}
//       <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2">
//         <div className="space-y-6">
//           {/* SERVICES */}
//           <div>
//             <Skeleton className="mb-4 h-4 w-[300px] rounded bg-primary-100/10" />
//             <div className="flex flex-wrap items-center gap-3">
//               {Array.from({ length: 3 }, (_: never, index: number) => (
//                 <Skeleton
//                   key={index}
//                   className="h-[42px] w-[150px] rounded-full bg-primary-100/10 px-2.5 py-0.5"
//                 />
//               ))}
//             </div>
//           </div>
//           {/* TOOLs */}
//           <div>
//             <Skeleton className="mb-4 h-4 w-[300px] rounded bg-primary-100/10" />
//             <div className="flex items-center gap-3">
//               {Array.from({ length: 2 }, (_: never, index: number) => (
//                 <Skeleton
//                   key={index}
//                   className="h-[42px] w-[115px] rounded-full bg-primary-100/10 px-2.5 py-0.5"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* CLIENT */}
//           <div>
//             <Skeleton className="mb-4 h-4 w-[300px] rounded bg-primary-100/10" />
//             <div className="flex items-center gap-3">
//               <Skeleton className="h-[42px] w-[100px] rounded-full bg-primary-100/10 px-2.5 py-0.5" />
//             </div>
//           </div>
//         </div>

//         <div className="">
//           <Skeleton className="mb-4 h-4 w-[300px] rounded bg-primary-100/10" />

//           <p className="font-inter font-light leading-normal text-white">
//             {Array.from({ length: 5 }, (_: never, index: number) => (
//               <Skeleton
//                 key={index}
//                 className="mb-4 h-3 w-full rounded bg-primary-100/10"
//               />
//             ))}
//             <br />
//             {Array.from({ length: 3 }, (_: never, index: number) => (
//               <Skeleton
//                 key={index}
//                 className="mb-4 h-3 w-full rounded bg-primary-100/10"
//               />
//             ))}
//           </p>
//         </div>
//       </div>

//       {/* IMAAGES */}
//       <div className="mt-20 flex flex-wrap justify-center gap-6 *:rounded-[12px] *:bg-primary-100/10">
//         <Skeleton className="h-[300px] w-[95%] sm:w-[80%]" />
//         <Skeleton className="hidden h-[300px] w-[calc(50%_-_20px)] md:block md:h-[400px]" />
//         <Skeleton className="hidden h-[300px] w-[calc(50%_-_20px)] md:block md:h-[400px]" />
//         <Skeleton className="h-[300px] w-full lg:h-[600px]" />
//       </div>
//     </div>
//   );
// };

// const ProjectsSkeletonLoader = () => {
//   return (
//     <div className="animate-pulse rounded-[16px] bg-box p-4 lg:p-6">
//       <Skeleton className="h-[300px] rounded-[8px] bg-primary-100/10 md:h-[350px] xl:h-[400px]" />
//       <Skeleton className="mt-8 h-4 w-3/4 rounded-[2px] bg-primary-100/10" />
//     </div>
//   );
// };

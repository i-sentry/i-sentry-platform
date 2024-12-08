import { Skeleton } from "@/components/ui/skeleton";
import EachElement from "@/components/widgets/list_rendering";
import React from "react";
import { useEffect, useState } from "react";
import { fetchCaseStudies } from "@/sanity/lib/fetchDatas";
import { cn } from "@/lib/utils";
import { IProject } from "@/utils";
import Image from "next/image";

const OurProjects = () => {
  const [data, setData] = useState<{ [x: string]: string }>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchCaseStudies();
        console.log(data, "case");

        setData(data);
      } catch (error) {
        console.error("Error fetching core team data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
    // console.log(getData, "tema");
  }, []);

  return (
    <section className="py-10">
      <div className="wrapper">
        <h2 className="mb-8 text-2xl font-medium text-white md:text-3xl md:leading-tight">
          Explore our projects
        </h2>

        <div className="w-full overflow-y-hidden no-scrollbar">
          <div className="flex h-min w-max space-x-6">
            {loading ? (
              <>
                {Array.from({ length: 5 }, (_: unknown, index: number) => {
                  return <SkeletonLoader key={index} />;
                })}
              </>
            ) : (
              <EachElement
                of={data}
                render={(data: IProject, index: number) => {
                  return (
                    <div
                      key={index}
                      className={cn(
                        "relative flex h-[400px] w-[360px] flex-wrap items-end justify-between overflow-hidden rounded-3xl md:w-[380px]",
                      )}
                    >
                      <Image
                        src={data?.image[0]?.asset?.url}
                        alt={data?.title}
                        width="500"
                        height="500"
                        className="absolute top-0 h-full w-full rounded-3xl object-cover object-center"
                      />
                      <div className="absolute bottom-0 left-0 z-10 flex h-max w-full flex-col justify-end bg-primary-900/50 p-6 backdrop-blur-md">
                        <h3 className="mb-1 text-lg font-normal text-white">
                          {data?.title}
                        </h3>
                        <p className="text-sm text-primary-50">
                          {data?.tools?.join(", ")}
                        </p>
                      </div>
                    </div>
                  );
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

const SkeletonLoader = () => {
  return (
    <Skeleton className="flex h-[400px] w-[350px] flex-wrap items-end justify-between rounded-3xl bg-primary-100/10 p-6">
      <div className="w-full space-y-2">
        <Skeleton className="h-4 w-3/4 rounded bg-primary-100/10" />
        <Skeleton className="h-2.5 w-1/2 rounded bg-primary-100/10" />
      </div>
    </Skeleton>
  );
};

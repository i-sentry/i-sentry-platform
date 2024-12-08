import React, { useEffect, useState } from "react";
import EachElement from "../widgets/list_rendering";
import { IProject } from "@/utils";
import SmartLinkButton from "../custom_button";
import ProjectCard from "./project_card";
import { fetchCaseStudies } from "@/sanity/lib/fetchDatas";
import { Skeleton } from "../ui/skeleton";

const CaseStudies = () => {
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
    <>
      <section>
        <div className="wrapper">
          {/* CASE STUDIES */}
          <div className="mt-10 gap-6 space-y-6 md:mt-24 md:grid md:grid-cols-2 md:space-y-0">
            {loading ? (
              <>
                {Array.from({ length: 2 }, (_, i) => (
                  <SkeletonLoader key={i} />
                ))}
              </>
            ) : (
              <EachElement
                of={data}
                render={(item: IProject, index: number) => {
                  return <ProjectCard key={item?.title + index} data={item} />;
                }}
              />
            )}

            <div className="col-span-2 mt-10 flex items-center justify-center">
              <SmartLinkButton
                variant="bright"
                url="/projects/archive"
                buttonText="View all projects"
                isLink
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse rounded-[16px] bg-box p-4 lg:p-6">
      <Skeleton className="h-[300px] rounded-[8px] bg-primary-100/10 md:h-[350px] xl:h-[400px]" />
      <Skeleton className="mt-8 h-4 w-3/4 rounded-[2px] bg-primary-100/10" />
    </div>
  );
};

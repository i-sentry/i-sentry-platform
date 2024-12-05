import React from "react";
import EachElement from "../widgets/list_rendering";
import { caseStudies, IProject } from "@/utils";
import SmartLinkButton from "../custom_button";
import ProjectCard from "./project_card";

const CaseStudies = () => {
  return (
    <>
      <section>
        <div className="wrapper">
          {/* CASE STUDIES */}
          <div className="mt-10 gap-6 space-y-6 md:mt-24 md:grid md:grid-cols-2 md:space-y-0">
            <EachElement
              of={caseStudies}
              render={(item: IProject, index: number) => {
                return <ProjectCard key={item?.title + index} data={item} />;
              }}
            />

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

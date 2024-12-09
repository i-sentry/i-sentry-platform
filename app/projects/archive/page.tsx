"use client";
import TransitionLink from "@/components/widgets/transition_links";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EachElement from "@/components/widgets/list_rendering";
import { Badge } from "@/components/ui/badge";
import { fetchCaseStudies } from "@/sanity/lib/fetchDatas";

const ProjectArchive = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

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
  }, []);
  console.log(data, "tema", loading);
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div>
            <TransitionLink
              href="/projects"
              className="inline-flex items-center gap-2 text-secondary-300"
            >
              <span>
                <ArrowLeft size={20} />
              </span>
              Projects
            </TransitionLink>
            <h1 className="font-dm-sans text-2xl font-semibold text-white sm:text-3xl">
              All Projects
            </h1>
          </div>

          <div className="mt-12">
            {data?.length >= 1 && (
              <Table>
                <TableHeader className="[&_tr]:border-primary-50/10">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-lg text-primary-50 sm:w-[200px]">
                      Project
                    </TableHead>
                    <TableHead className="hidden w-[250px] text-lg text-primary-50 sm:table-cell">
                      Industry
                    </TableHead>
                    <TableHead className="hidden text-lg text-primary-50 lg:table-cell">
                      Tools
                    </TableHead>
                    <TableHead className="hidden text-lg text-primary-50 xl:table-cell">
                      Services
                    </TableHead>
                    <TableHead className="text-lg text-primary-50 sm:w-[200px]">
                      Link
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="[&_tr>td]:py-4 [&_tr]:border-primary-50/10">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <EachElement
                    of={data}
                    render={(
                      item: {
                        title: string;
                        industry: string;
                        tools: string[];
                        tags: string[];
                      },
                      index: number,
                    ) => (
                      <TableRow key={index} className="hover:bg-transparent">
                        <TableCell className="align-top text-sm font-medium text-primary-50">
                          {item.title}
                        </TableCell>
                        <TableCell className="hidden align-top text-sm text-primary-50 sm:table-cell">
                          {item.industry}
                        </TableCell>
                        <TableCell className="hidden align-top lg:table-cell">
                          <div className="inline-flex flex-wrap items-center gap-3">
                            <EachElement
                              of={item?.tools}
                              render={(tool: string) => (
                                <Badge
                                  key={tool}
                                  className="inline-block rounded-full bg-[#023B741A] px-6 py-3 font-dm-sans text-xs font-normal text-secondary-300 hover:bg-[#568CC21A]"
                                >
                                  {tool}
                                </Badge>
                              )}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="hidden text-sm text-primary-50 xl:table-cell">
                          <div className="inline-flex flex-wrap items-center gap-3">
                            <EachElement
                              of={item?.tags}
                              render={(tag: string) => (
                                <Badge
                                  key={tag}
                                  className="inline-block rounded-full bg-[#023B741A] px-6 py-3 font-dm-sans text-xs font-normal text-secondary-300 hover:bg-[#568CC21A]"
                                >
                                  {tag}
                                </Badge>
                              )}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="align-top text-sm text-primary-50">
                          <TransitionLink
                            href="/project"
                            className="inline-flex items-center gap-2 text-secondary-300"
                          >
                            View details
                            <span>
                              <ArrowUpRight size={20} />
                            </span>
                          </TransitionLink>
                        </TableCell>
                      </TableRow>
                    )}
                  />
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectArchive;

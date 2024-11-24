import { LinkProps } from "@/utils";
import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import TransitionLink from "./widgets/transition_links";

type ComponentProps = {
  title: string;
  links: LinkProps[];
};

const FooterLink: React.FC<ComponentProps> = ({ title, links }) => {
  return (
    <>
      <div>
        <h3 className="font-inter text-sm font-normal text-[#667085]">
          {title}
        </h3>

        <div className="mt-4 inline-flex flex-col gap-3">
          {links.map((item: LinkProps, index: number) => (
            <div
              key={index}
              className="inline-flex items-center justify-start gap-2"
            >
              <TransitionLink
                href={item?.comingSoon ? "" : item?.url}
                className={cn(
                  "font-inter text-base font-normal text-[#97A4B7] duration-300 hover:text-secondary-400",
                  item?.comingSoon
                    ? "pointer-events-none cursor-not-allowed"
                    : "pointer-events-auto cursor-pointer",
                )}
              >
                {item?.name}
              </TransitionLink>
              {item?.comingSoon && (
                <Badge className="rounded-full border-[#ABEFC64D] bg-[#06764780] p-1 px-2 py-1 text-[9px] font-light text-[#34C759]">
                  Coming soon
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterLink;

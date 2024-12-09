import React from "react";
import SmartButton from "@/components/custom_button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PriceListProp } from "@/app/mentorships/page";
import { cn } from "@/lib/utils";

const PriceCard = ({ list }: { list: PriceListProp }) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#568CC24D] bg-price p-6">
      {list.comingSoon && (
        <span className="absolute -right-14 top-8 inline-block w-[200px] rotate-45 bg-[#023B74CC] p-2 text-center text-sm uppercase text-white">
          Coming Soon
        </span>
      )}
      <div>
        <div className="">
          <div className="relative flex items-center justify-between">
            <p className="text-sm font-light capitalize text-primary-100">
              {list?.package}
            </p>

            {list?.badge && (
              <Badge className="absolute right-0 top-0 rounded-[16px] bg-[#023B74CC] p-2 text-sm font-light text-white">
                {list?.badge}
              </Badge>
            )}
          </div>
          <h3 className="py-4 font-dm-sans text-4xl font-semibold text-white">
            {list?.duration}
          </h3>
          <p className="text-sm font-light text-primary-100">
            {list?.description}
          </p>
        </div>

        <hr className="my-8 border-0 border-t border-[#F9F9F94D] md:grid md:grid-cols-2" />

        <div className="flex flex-col space-y-4">
          {list.features.map((item, index) => {
            return (
              <div
                key={item + index}
                className="inline-grid grid-cols-[20px_1fr] items-start justify-start gap-2"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary-700 text-primary-100">
                  <Check size={14} />
                </span>
                <span className="grow text-primary-100">{item}</span>
              </div>
            );
          })}
        </div>
      </div>

      <SmartButton
        variant="bright"
        buttonText="Enroll Now"
        className={cn(
          "mt-8 w-full items-center justify-center text-center",
          list?.badge !== "coming soon"
            ? "grayscale-0"
            : "cursor-default opacity-30 grayscale-[50] hover:shadow-none",
        )}
        isLink={list?.badge !== "coming soon"}
        url="/intership/enroll"
      />
    </div>
  );
};

export default PriceCard;

import React from "react";
import SmartButton from "@/components/custom_button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PriceListProp } from "@/app/mentorships/page";

const PriceCard = ({ list }: { list: PriceListProp }) => {
  return (
    <div className="rounded-[2rem] border border-[#568CC24D] bg-price p-6">
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
            <div key={item + index} className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary-700 text-primary-100">
                <Check size={14} />
              </span>
              <span className="text-primary-100">{item}</span>
            </div>
          );
        })}
      </div>

      <SmartButton
        variant="bright"
        buttonText="Enroll Now"
        className="mt-8 w-full"
      />
    </div>
  );
};

export default PriceCard;

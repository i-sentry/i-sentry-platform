import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import EachElement from "./list_rendering";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrackInput = ({ errors, data, control }: any) => {
  return (
    <div className="col-span-2 nth-child-1:col-span-1 nth-child-2:col-span-1">
      <label
        htmlFor={data?.name}
        className="mb-1.5 inline-block text-sm text-primary-200"
      >
        {data?.label}
      </label>
      <Controller
        name="track"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger
              className={cn(
                "w-full overflow-hidden rounded border-0 bg-field text-primary-100 focus:ring-1 focus:ring-secondary-300",
                errors?.[data?.name] &&
                  "border border-red-600 focus-within:ring-1 focus-within:ring-red-600",
              )}
            >
              <SelectValue
                placeholder="Select a track"
                className="text-primary-100"
              />
            </SelectTrigger>
            <SelectContent className="rounded border-primary-100/30 bg-primary-900">
              <EachElement
                of={tracks}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                render={(track: any, index: number) => (
                  <SelectItem
                    key={index}
                    value={track.value}
                    className="text-primary-100"
                  >
                    {track.label}
                  </SelectItem>
                )}
              />
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default TrackInput;

const tracks = [
  { label: "Frontend Development", value: "front-end" },
  { label: "Backend Development", value: "back-end" },
  { label: "Fullstack Development", value: "fullstack" },
  { label: "Mobile App Development", value: "mobile-app" },
  { label: "UI/UX Design", value: "ui-ux-design" },
  // { label: "Data Science", value: "data-science" },
  // { label: "Machine Learning", value: "machine-learning" },
  // { label: "DevOps", value: "devops" },
  // { label: "Cybersecurity", value: "cybersecurity" },
  // { label: "Cloud Engineering", value: "cloud-engineering" },
  // { label: "Game Development", value: "game-development" },
  { label: "Digital Marketing", value: "digital-marketing" },
  { label: "Product Management", value: "product-management" },
  { label: "Quality Assurance (QA)", value: "quality-assurance" },
  { label: "Technical Writing", value: "technical-writing" },
];

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
import { countries } from "@/utils/countrylist";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CountryInput = ({ errors, data, control }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const sortedCountries = countries.sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <div className="col-span-2 nth-child-1:col-span-1 nth-child-2:col-span-1">
      <label
        htmlFor={data?.name}
        className="mb-1.5 inline-block text-sm text-primary-200"
      >
        {data?.label}
      </label>
      {
        <Controller
          name="country"
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
                  placeholder="Select country"
                  className="text-primary-100"
                />
              </SelectTrigger>
              <SelectContent className="rounded border-primary-100/30 bg-primary-900">
                <EachElement
                  of={sortedCountries}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  render={(data: any, index: number) => (
                    <SelectItem
                      key={index}
                      value={data?.name?.common}
                      className="text-primary-100"
                    >
                      {data?.name?.common}
                    </SelectItem>
                  )}
                />
              </SelectContent>
            </Select>
          )}
        />
      }
    </div>
  );
};

export default CountryInput;

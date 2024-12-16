import React, { useEffect, useState } from "react";
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
import { Skeleton } from "../ui/skeleton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CountryInput = ({ errors, data, control }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Await the JSON conversion
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  return (
    <div className="col-span-2 nth-child-1:col-span-1 nth-child-2:col-span-1">
      <label
        htmlFor={data?.name}
        className="mb-1.5 inline-block text-sm text-primary-200"
      >
        {data?.label}
      </label>
      {loading ? (
        <Skeleton className="h-9 w-full rounded bg-field" />
      ) : (
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
                  of={countries}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  render={(data: any, index: number) => (
                    <SelectItem
                      key={index}
                      value={data?.name}
                      className="text-primary-100"
                    >
                      {data?.name}
                    </SelectItem>
                  )}
                />
              </SelectContent>
            </Select>
          )}
        />
      )}
    </div>
  );
};

export default CountryInput;

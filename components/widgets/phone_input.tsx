import React from "react";
import { Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { cn } from "@/lib/utils";
import flags from "react-phone-number-input/flags";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PhoneInputField = ({ errors, data, control }: any) => {
  return (
    <div className="col-span-2">
      <label
        htmlFor={data?.name}
        className="mb-2 inline-block text-base text-[#4F4F4F]"
      >
        {data?.label}
      </label>

      <div
        className={cn(
          "overflow-hidden rounded bg-field p-2 focus-within:ring-1 focus-within:ring-secondary-300",
          errors[data?.name] &&
            "border border-red-600 focus:border-red-600 focus:ring-red-600",
        )}
      >
        <Controller
          name={data?.name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <PhoneInput
              flags={flags}
              international
              defaultCountry="NG"
              countryCallingCodeEditable={false}
              value={value}
              onChange={onChange}
              placeholder={data?.placeholder}
              className={cn(
                "h-6 w-full border-transparent [&_input]:form-input [&_input[type=tel]]:shadow-none [&_input[type=tel]]:ring-0 [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-primary-100 [&_input]:shadow-none [&_input]:ring-0 [&_input]:placeholder:text-primary-200 [&_input]:focus:border-[transparent_!important] [&_input]:focus:ring-[transparent_!important]",
              )}
            />
          )}
        />
      </div>
      <p className="p-1 text-sm text-red-600">
        {errors[data.name] &&
          (errors[data.name].message || (data?.err_message as string))}
      </p>
    </div>
  );
};

export default PhoneInputField;

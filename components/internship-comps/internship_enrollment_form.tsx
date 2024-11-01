import { Checkbox } from "@radix-ui/react-checkbox";
import SmartButton from "../custom_button";
import { Controller, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import EachElement from "../widgets/list_rendering";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const contactFormData = [
  {
    name: "firstName",
    label: "First name",
    placeholder: "First name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last name",
    placeholder: "Last name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "you@company.com",
    type: "email",
  },
  {
    name: "country",
    label: "Country",
    placeholder: "Select your country",
    type: "select",
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "+1 (555) 000-0000",
    type: "tel",
  },
  {
    name: "track",
    label: "Which track are you applying for?",
    placeholder: "Last name",
    type: "text",
  },
  {
    name: "message",
    label: "How did you hear about I-sentry Internship",
    placeholder:
      "How did you hear about I-sentry e.g through X, LinkedIn or through a friend.",
    type: "richtext",
  },
];

const schema = yup.object().shape({
  firstName: yup.string().required("Input your first name"),
  lastName: yup.string().required("Input your last name"),
  email: yup.string().email("Input a valid email").required("Input your email"),
  country: yup.string().required("Select your country"),
  phone: yup.string().required("Input your phone number"),
  track: yup.string().required("Select a track"),
  message: yup.string().required("Input your message"),
  agreeToPolicy: yup.boolean().default(true).required(),
});

const InternshipForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    control,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);

    reset();
  };
  return (
    <div className="rounded-xl border border-[#FAFAFA1F] bg-footer2 p-5 md:p-8">
      <form
        id="contact_us"
        className="mx-auto w-full sm:w-3/4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-12 text-2xl font-medium text-white md:text-3xl">
          Confirm your details
        </h2>

        <div className="flex flex-col gap-x-8 gap-y-6 sm:grid sm:grid-cols-2">
          <EachElement
            of={contactFormData}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render={(data: any) => {
              if (data.type === "richtext") {
                return (
                  <div className="col-span-2 sm:nth-child-1:col-span-1 sm:nth-child-2:col-span-1">
                    <label
                      htmlFor={data?.name}
                      className="mb-1.5 inline-block text-sm text-primary-200"
                    >
                      {data?.label}
                    </label>
                    <div
                      className={cn(
                        "overflow-hidden rounded bg-field focus-within:ring-1 focus-within:ring-secondary-300",
                        errors?.[data?.name] &&
                          "focus-within:ring-1 focus-within:ring-red-600",
                      )}
                    >
                      <textarea
                        {...register(data?.name)}
                        placeholder={data?.placeholder}
                        autoComplete="off"
                        className={cn(
                          "form-input h-[120px] w-full resize-none border-0 bg-transparent p-2 text-primary-200 placeholder:text-sm placeholder:text-primary-300 focus:border-0 focus:ring-0",
                        )}
                        id={data?.name}
                      />
                    </div>
                    {errors?.[data?.name] && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors[data?.name]?.message as string}
                      </p>
                    )}
                  </div>
                );
              }

              return (
                <div className="col-span-2 nth-child-1:col-span-1 nth-child-2:col-span-1">
                  <label
                    htmlFor={data?.name}
                    className="mb-1.5 inline-block text-sm text-primary-200"
                  >
                    {data?.label}
                  </label>
                  <div
                    className={cn(
                      "overflow-hidden rounded bg-field focus-within:ring-1 focus-within:ring-secondary-300",
                      errors?.[data?.name] &&
                        "focus-within:ring-1 focus-within:ring-red-600",
                    )}
                  >
                    <input
                      {...register(data?.name)}
                      type={data?.type}
                      placeholder={data?.placeholder}
                      autoComplete="off"
                      className={cn(
                        "form-input w-full border-0 bg-transparent p-2 text-primary-200 placeholder:text-sm placeholder:text-primary-300 focus:border-0 focus:ring-0",
                      )}
                      id={data?.name}
                    />
                  </div>
                  {errors?.[data?.name] && (
                    <p className="mt-1.5 text-sm text-red-600">
                      {errors[data?.name]?.message as string}
                    </p>
                  )}
                </div>
              );
            }}
          />
        </div>

        <div className="mb-8 mt-6 space-x-3">
          <Controller
            name="agreeToPolicy"
            control={control}
            render={({ field: { value = false, onChange } }) => (
              <Checkbox
                id="agreeToPolicy"
                checked={value}
                onChange={(e) =>
                  onChange((e.target as HTMLInputElement).checked)
                }
                className="form-checkbox rounded-[6px] border border-grey-100 checked:bg-secondary-300 focus:ring-0 focus:ring-offset-0 checked:focus:ring-0"
              />
            )}
          />

          <label
            htmlFor="agreeToPolicy"
            className="cursor-default text-sm text-primary-200"
          >
            You agree to our friendly&nbsp;
            <Link href="/privacy-policy" className="underline">
              privacy policy
            </Link>
            .
          </label>
        </div>

        <SmartButton
          type="submit"
          variant="bright"
          buttonText="Enroll now"
          className="w-full"
        />
      </form>
    </div>
  );
};

export default InternshipForm;

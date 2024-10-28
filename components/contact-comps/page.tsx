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
    name: "phone",
    label: "Phone",
    placeholder: "+1 (555) 000-0000",
    type: "tel",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Leave us a message",
    type: "richtext",
  },
];

const schema = yup.object().shape({
  firstName: yup.string().required("Input your first name"),
  lastName: yup.string().required("Input your last name"),
  email: yup.string().email("Input a valid email").required("Input your email"),
  phone: yup.string().required("Input your phone number"),
  message: yup.string().required("Input your message"),
  agreeToPolicy: yup.boolean().default(true).optional(),
});

const ContactForm = () => {
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
          Contact us
        </h2>

        <div className="flex flex-col gap-x-8 gap-y-6 sm:grid sm:grid-cols-2">
          <EachElement
            of={contactFormData}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render={(data: any) => {
              if (data.type === "richtext") {
                return (
                  <div className="sm:nth-child-2:col-span-1 sm:nth-child-1:col-span-1 col-span-2">
                    <label
                      htmlFor={data?.name}
                      className="text-primary-200 mb-1.5 inline-block text-sm"
                    >
                      {data?.label}
                    </label>
                    <div
                      className={cn(
                        "focus-within:ring-secondary-300 overflow-hidden rounded bg-field focus-within:ring-1",
                        errors?.[data?.name] &&
                          "focus-within:ring-1 focus-within:ring-red-600",
                      )}
                    >
                      <textarea
                        {...register(data?.name)}
                        placeholder={data?.placeholder}
                        autoComplete="off"
                        className={cn(
                          "text-primary-200 placeholder:text-primary-300 form-input w-full resize-none border-0 bg-transparent p-2 placeholder:text-sm focus:border-0 focus:ring-0",
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
                <div className="nth-child-2:col-span-1 nth-child-1:col-span-1 col-span-2">
                  <label
                    htmlFor={data?.name}
                    className="text-primary-200 mb-1.5 inline-block text-sm"
                  >
                    {data?.label}
                  </label>
                  <div
                    className={cn(
                      "focus-within:ring-secondary-300 overflow-hidden rounded bg-field focus-within:ring-1",
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
                        "text-primary-200 placeholder:text-primary-300 form-input w-full border-0 bg-transparent p-2 placeholder:text-sm focus:border-0 focus:ring-0",
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
            render={({ field }) => (
              <Checkbox
                id="agreeToPolicy"
                // name="agreeToPolicy"
                checked={field.value}
                onCheckedChange={field.onChange}
                className="checked:bg-secondary-300 form-checkbox rounded-[6px] border border-grey-100 focus:ring-0 focus:ring-offset-0 checked:focus:ring-0"
              />
            )}
          />

          <label htmlFor="agreeToPolicy" className="text-primary-200 text-sm">
            You agree to our friendly&nbsp;
            <Link href="/privacy-policy" className="underline">
              privacy policy
            </Link>
            .
          </label>
        </div>

        <SmartButton type="submit" variant="bright" buttonText="Send message" />
      </form>
    </div>
  );
};

export default ContactForm;

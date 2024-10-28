"use client";
import SmartButton from "@/components/custom_button";
import { Checkbox } from "@/components/ui/checkbox";
import EachElement from "@/components/widgets/list_rendering";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("Input your first name"),
  lastName: yup.string().required("Input your last name"),
  email: yup.string().required("Input your email address"),
  phone: yup.string().required("Input your phone no"),
  message: yup.string().required("Input your message"),
  agreeToPolicy: yup.boolean().default(false).optional(),
});

const ContactUs = () => {
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
    <>
      <section className="py-16">
        <div className="wrapper">
          <div className="space-y-8">
            <h1 className="font-dm-sans text-2xl font-semibold text-white md:text-[2rem]">
              Talk to the team
            </h1>
            <p className="text-primary-100 text-sm font-light leading-normal md:text-base">
              Transform your career trajectory through our intensive year-long
              mentorship program. At I-Sentry Technologies, we don&apos;t just
              teach—we immerse you in real-world projects, surround you with
              industry experts, and guide your journey from aspiring developer
              to tech professional.
            </p>
            <ul>
              <li className="inline-flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
                Program Foundation Building
              </li>
            </ul>
          </div>

          {/* FORM */}
          <div className="rounded-xl bg-footer2 p-8">
            <form
              id="contact_us"
              className="mx-auto w-3/4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="mb-12 text-3xl font-semibold text-white">
                Contact us
              </h2>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <EachElement
                  of={contactFormData}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  render={(data: any) => {
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
                              "bg-error focus-within:ring-1 focus-within:ring-red-600",
                          )}
                        >
                          <input
                            {...register(data?.name)}
                            type={data?.type}
                            placeholder={data?.placeholder}
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

              <div>
                <Controller
                  name="agreeToPolicy"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="checked:bg-secondary-300 form-checkbox rounded-[6px] border border-grey-100 focus:ring-0 focus:ring-offset-0 checked:focus:ring-0"
                    />
                  )}
                />
                <label htmlFor="agreeToPolicy">
                  You agree to our friendly privacy policy. Save my login
                  details for next time.
                </label>
              </div>

              <SmartButton
                type="submit"
                variant="bright"
                buttonText="Send message"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

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
    label: "Massage",
    placeholder: "Leave us a message",
    type: "richtext",
  },
];

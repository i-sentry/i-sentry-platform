import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import EachElement from "../widgets/list_rendering";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import PhoneInputField from "../widgets/phone_input";
import emailjs from "@emailjs/browser";
import { Check, Loader, X } from "lucide-react";

export type IContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

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
  // agreeToPolicy: yup.boolean().required("You need to agree to privacy policy"),
});

// mailsender: mlsn.46c207dc33bd27a645bc59402da1b0caf2ebb297900637784730c4e6f0182d4b

const ContactForm = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
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
  const onSubmit = async (data: any) => {
    setLoading(true);
    setClicked(true);
    try {
      await emailjs.send(
        "service_udyqvvc",
        "template_wbm4rs5",
        {
          to_email: data.email,
          from_email: "programs@isentrytechnologies.com",
          subject: "Thank You for Contacting ISentry Technologies!",
          name: `${data.firstName} ${data?.lastName}`,
          phone: data.phone,
          email: data.email,
          message: data.message,
          type: "contact",
          main: "Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.",
          end: "We appreciate your interest and look forward to assisting you.",
        },
        "NSO4VhtozM_fxtMXW",
      );

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSuccess(false);
    } finally {
      setLoading(false);
      setClicked(false);
    }
  };

  useEffect(() => {
    if (clicked && isSuccess) {
      setMessage("Form submitted successfully!");
    } else if (clicked && !isSuccess) {
      setMessage("Error submitting form. Please try again.");
    }
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [clicked, isSuccess]);

  return (
    <div className="rounded-xl border border-[#FAFAFA1F] bg-footer2 p-5 md:p-8">
      <form
        id="contact_us"
        className="mx-auto w-full sm:w-3/4 lg:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-12">
          <h2 className="mb-2 text-2xl font-medium text-white md:text-3xl">
            Contact us
          </h2>
          <p className="text-sm font-light leading-normal text-primary-100 md:text-base">
            Please fill out the form below with your contact details and a brief
            message, and we&apos;ll be in touch as soon as possible.
          </p>
        </div>

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
                          "form-input w-full resize-none border-0 bg-transparent p-2 text-primary-50 placeholder:text-sm placeholder:text-primary-300 focus:border-0 focus:ring-0",
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
              } else if (data.name === "phone") {
                return (
                  <PhoneInputField
                    errors={errors}
                    data={data}
                    control={control}
                  />
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
                        "form-input w-full border-0 bg-transparent p-2 text-primary-50 placeholder:text-sm placeholder:text-primary-300 focus:border-0 focus:ring-0",
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
          <input
            id="agreeToPolicy"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="form-checkbox cursor-pointer rounded-[6px] border border-grey-100 checked:bg-secondary-300 checked:hover:bg-secondary-300 focus:ring-0 focus:ring-offset-0 checked:focus:bg-secondary-300 checked:focus:ring-0"
          />

          <label htmlFor="agreeToPolicy" className="text-sm text-primary-200">
            You agree to our friendly&nbsp;
            <Link href="/privacy-policy" className="underline">
              privacy policy
            </Link>
            .
          </label>
        </div>
        <Button
          type="submit"
          disabled={!isChecked || loading}
          className="group inline-flex h-auto cursor-pointer items-center gap-4 rounded-full bg-grad px-8 py-3.5 font-dm-sans font-light text-white hover:shadow-lg hover:shadow-white/25 disabled:opacity-35"
        >
          {loading ? (
            <>
              <Loader size={20} className="animate-spin" />
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </Button>
        {message && (
          <p
            className={cn(
              "mt-6 flex items-center gap-2 text-sm font-light text-primary-50",
              isSuccess ? "text-green-500" : "text-red-500",
            )}
          >
            {isSuccess ? <Check size={20} /> : <X size={20} />} {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

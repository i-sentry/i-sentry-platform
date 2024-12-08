import EachElement from "@/components/widgets/list_rendering";
import { IProps } from "../../app/services/page";
import { cn } from "@/lib/utils";

const OurApproaches = () => {
  return (
    <div className="wrapper py-10 lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-10">
      <div className="max-w-lg">
        <h2 className="mb-4 text-2xl font-medium text-white md:text-3xl md:leading-tight">
          Our approach
        </h2>
        <p className="font-inter font-extralight text-primary-100">
          Accelerate your tech career with I-Sentry&apos;s immersive year-long
          mentorship program. Gain hands-on experience through real-world
          projects, expert guidance, and a structured path to becoming a tech
          leader.
        </p>
      </div>

      <div className="mt-10">
        <div className="relative flex flex-col justify-center gap-6 after:absolute after:top-0 after:inline-block after:h-full after:w-[0.5px] after:-translate-x-1/2 after:bg-primary-100/20 md:after:left-1/2">
          <EachElement
            of={ourApproaches}
            render={(item: IProps, index: number) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-16 pl-5 pt-5 last:pb-5 md:pl-0"
                >
                  <div
                    className={cn(
                      "col-span-2 md:col-span-1",
                      (index + 1) % 2 && "md:col-[2]",
                    )}
                  >
                    <span className="text-white">0{index + 1}</span>
                    <h3 className="mb-2 mt-1 text-lg font-normal text-white">
                      {item?.title}
                    </h3>
                    <p className="font-inter font-extralight text-primary-100">
                      {item?.content}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurApproaches;

const ourApproaches: IProps[] = [
  {
    title: "Research",
    content:
      "Explore opportunities, understand our workshops, and start your application journey to become a developer.",
  },
  {
    title: "Define",
    content:
      "Identify your strengths and interests while shaping your personalized learning path.",
  },
  {
    title: "Execution",
    content:
      "Engage in real-world projects and hands-on workshops guided by industry experts.",
  },
  {
    title: "Evaluation",
    content:
      "Receive feedback, refine your skills, and track your progress towards becoming a tech professional.",
  },
];

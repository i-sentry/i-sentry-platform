import { SolutionProp } from "@/utils";
import SmartLinkButton from "../custom_button";
import EachElement from "../widgets/list_rendering";

const SolutionCard = ({ item }: { item: SolutionProp }) => {
  return (
    <div className="grid grid-cols-[48px_1fr] items-start gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border-[8px] border-solid border-[#F9F5FF] bg-[#F4EBFF] text-[#7F56D9]">
        {item?.icon}
      </span>
      <div>
        <h3 className="mb-2 font-dm-sans text-base text-white">
          {item?.title}
        </h3>
        <p className="font-light leading-normal text-primary-200">
          {item?.description}
        </p>

        <div className="mt-2">
          <h4 className="mb-2 font-normal text-white">Key Features</h4>
          <ul className="list-disc pl-3.5 font-light leading-normal">
            <EachElement
              of={item.keyFeatures}
              render={(data: string, index: number) => (
                <li key={index} className="text-primary-200">
                  {data}
                </li>
              )}
            />
          </ul>
        </div>
        <SmartLinkButton
          showAnimatedIcon
          variant="dark"
          buttonText="Schedule a call"
          className="mt-4 px-6 py-3"
          isLink
          url="https://calendly.com/isentrytechnologies"
          target="_blank"
        />
      </div>
    </div>
  );
};
export default SolutionCard;

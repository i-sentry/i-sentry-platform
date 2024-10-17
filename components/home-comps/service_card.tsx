import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type ComponentProps = {
  showList?: boolean;
  showImages?: boolean;
  images?: StaticImageData[];
  title: string;
  description: string;
  buttonText?: string;
  listItems?: string[];
};

const ServiceCard: React.FC<ComponentProps> = ({
  images,
  listItems,
  showImages = images?.length,
  showList = listItems?.length,
  title,
  description,
  buttonText,
}) => {
  return (
    <>
      <div className="bg-box rounded-2xl border border-[#FAFAFA1F] p-6 backdrop-blur-xl">
        {showImages && (
          <div
            className={cn(
              `mb-5 grid grid-cols-1 gap-5 sm:grid-cols-3`,
              images && images?.length < 3 && "sm:grid-cols-1",
            )}
          >
            {images?.map((img: StaticImageData, index: number) => (
              <Image
                key={index}
                src={img}
                alt="placeholder-img"
                className={cn(
                  "h-[150px] w-full rounded-xl object-cover object-center",
                )}
              />
            ))}
          </div>
        )}
        <h3 className="font-medium text-white sm:text-xl">{title}</h3>
        <p className="my-4 font-inter text-sm font-extralight leading-6 text-[#C2C2C2] sm:text-base">
          {description}
        </p>
        {showList && (
          <>
            <ul className="list list-disc pl-4 font-inter text-sm font-extralight text-[#C2C2C2] sm:text-base">
              {listItems?.map((list: string) => <li key={list}>{list}</li>)}
            </ul>

            <Button className="bg-grad-alt mt-12 h-auto items-center gap-x-4 rounded-full border border-[#F4F4F40D] px-8 py-3.5 font-dm-sans font-light">
              {buttonText}
              <span>
                <ChevronRight />
              </span>
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default ServiceCard;

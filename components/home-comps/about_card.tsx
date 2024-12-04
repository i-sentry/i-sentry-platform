import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import SmartButton from "../custom_button";

type ComponentProps = {
  showList?: boolean;
  showImages?: boolean;
  images?: StaticImageData[];
  title: string;
  description: string;
  buttonText?: string;
  listItems?: string[];
  url?: string;
  index: number;
};

const AboutCard: React.FC<ComponentProps> = ({
  images,
  listItems,
  showImages = images?.length,
  showList = listItems?.length,
  title,
  description,
  buttonText,
  url,
  index,
}) => {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-duration="1000"
        data-aos-delay={`${400 * index}`}
        className={cn(
          "rounded-2xl border border-[#FAFAFA1F] bg-box p-6",
          "aboutCard-" + (index + 1),
        )}
      >
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
              {listItems?.map((list: string, index: number) => (
                <li
                  key={list}
                  className={cn(
                    url === "/services" && index === 2 && "opacity-0",
                  )}
                >
                  {list}
                </li>
              ))}
            </ul>

            <SmartButton
              url={url}
              isLink
              variant="dark"
              buttonText={`${buttonText}`}
              className="mt-12 border-[#F4F4F40D] bg-grad-alt backdrop-blur-none hover:shadow-none"
              showAnimatedIcon
            />
          </>
        )}
      </div>
    </>
  );
};

export default AboutCard;

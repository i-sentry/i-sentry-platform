import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

const ReviewCard = ({
  img,
  name,
  username,
  body,
  className,
}: {
  img: StaticImageData;
  name: string;
  username: string;
  body: string;
  className?: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border border-[#FAFAFA]/10 bg-stats p-4 duration-300 ease-linear group-data-[theme=light]:bg-[#EDEDED]",
        className,
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="h-10 w-10 rounded object-cover object-center"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="font-dm-sans text-sm font-normal text-white duration-300 ease-linear group-data-[theme=light]:text-primary-800">
            {name}
          </figcaption>
          <p className="font-dm-sans text-sm font-light text-[#C2C2C2B2] duration-300 ease-linear group-data-[theme=light]:text-secondary-600">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-light text-[#C2C2C2B2] duration-300 ease-linear group-data-[theme=light]:text-primary-900">
        {body}
      </blockquote>
    </figure>
  );
};

export default ReviewCard;

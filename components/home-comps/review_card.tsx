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
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border border-[#FAFAFA]/10 bg-stats p-4",
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
          <figcaption className="font-dm-sans text-sm font-normal text-white">
            {name}
          </figcaption>
          <p className="font-dm-sans text-sm font-light text-[#C2C2C2B2]">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-light text-[#C2C2C2B2]">
        {body}
      </blockquote>
    </figure>
  );
};

export default ReviewCard;

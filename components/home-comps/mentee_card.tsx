import Image, { StaticImageData } from "next/image";
import Placeholder from "@/public/images/placeholder.png";
import Link from "next/link";
import { ILinks } from "@/utils";

const MenteeCard = ({
  image,
  title,
  description,
  links,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  links: ILinks;
}) => {
  return (
    <div className="mentee relative h-[300px] w-[300px] overflow-hidden rounded-3xl">
      <Image
        src={image || Placeholder}
        alt="placeholder"
        className="h-full w-full object-cover object-[top_center]"
      />

      <div className="absolute bottom-0 left-0 z-10 w-full bg-black/60 p-6 backdrop-blur-xl">
        <h3 className="text-sm font-normal text-white">
          <Link target="_blank" href={`${links?.linkedin || links?.github}`}>
            {title}
          </Link>
        </h3>
        <p className="text-sm text-[#c2c2c2]">{description}</p>
      </div>
    </div>
  );
};

export default MenteeCard;

import Image, { StaticImageData } from "next/image";
import Placeholder from "@/public/images/placeholder.png";

const MenteeCard = ({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative h-[300px] w-[300px] overflow-hidden rounded-3xl">
      <Image
        src={image || Placeholder}
        alt="placeholder"
        className="h-full w-full object-cover object-center"
      />

      <div className="absolute bottom-0 left-0 z-10 w-full bg-black/30 p-6 backdrop-blur-xl">
        <h3 className="text-sm font-normal text-white">{title}</h3>
        <p className="text-sm text-[#c2c2c2]">{description}</p>
      </div>
    </div>
  );
};

export default MenteeCard;

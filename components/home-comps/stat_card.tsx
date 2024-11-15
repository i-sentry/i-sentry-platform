"use client";
import { useRouter } from "next/navigation";
import SmartButton from "../custom_button";

type ComponentProps = {
  percentage: string;
  title: string;
};

const StatCard: React.FC<ComponentProps> = ({ percentage, title }) => {
  const router = useRouter();

  return (
    <div className="rounded-xl border border-[#FAFAFA1F] bg-stats p-6 backdrop-blur-lg">
      <h3 className="text-4xl text-white">{percentage}</h3>
      <p className="mb-6 mt-3 font-inter text-sm font-extralight lowercase text-white">
        {title}
      </p>

      <SmartButton
        variant="dark"
        buttonText="Learn more"
        className="mt-4 border-[#F4F4F40D] backdrop-blur-none hover:shadow-none"
        showAnimatedIcon
        onClick={() => router.push("/about")}
      />
    </div>
  );
};

export default StatCard;

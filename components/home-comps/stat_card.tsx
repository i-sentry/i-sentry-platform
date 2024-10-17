import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type ComponentProps = {
  percentage: string;
  title: string;
};

const StatCard: React.FC<ComponentProps> = ({ percentage, title }) => {
  return (
    <div className="bg-stats rounded-xl border border-[#FAFAFA1F] p-6 backdrop-blur-lg">
      <h3 className="text-4xl text-white">{percentage}</h3>
      <p className="mb-6 mt-3 font-inter text-sm font-extralight lowercase text-white">
        {title}
      </p>

      <Button className="h-auto items-center gap-x-4 rounded-full border border-[#F4F4F40D] bg-grad-alt px-8 py-3.5 font-dm-sans font-light">
        Learn more
        <span>
          <ChevronRight />
        </span>
      </Button>
    </div>
  );
};

export default StatCard;

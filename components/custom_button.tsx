import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";

type ComponentProps = {
  buttonText: string | ReactNode;
  variant: "bright" | "dark";
  showAnimatedIcon?: boolean;
  className?: string;
};

const SmartButton: React.FC<ComponentProps> = ({
  variant,
  buttonText,
  showAnimatedIcon = false,
  className,
}) => {
  return (
    <Button
      className={cn(
        "group h-auto cursor-pointer items-center gap-4 rounded-full px-8 py-3.5 font-dm-sans font-light hover:shadow-lg hover:shadow-white/25",
        variant === "bright"
          ? "bg-grad"
          : "border border-[#023B74]/20 bg-grad-alt backdrop-blur-[50px]",
        className,
      )}
    >
      <>{buttonText}</>
      {showAnimatedIcon && (
        <span className="relative inline-block">
          <ChevronRight
            size={20}
            className="duration-300 group-hover:opacity-0"
          />
          <ArrowRight
            size={20}
            className="absolute -left-1 top-1/2 -translate-y-1/2 opacity-0 duration-300 group-hover:left-0 group-hover:opacity-100"
          />
        </span>
      )}
    </Button>
  );
};

export default SmartButton;

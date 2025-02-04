"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";

type SmartLinkButtonProps = {
  buttonText: string | ReactNode;
  variant: "bright" | "dark";
  showAnimatedIcon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  url?: string;
  isLink?: boolean;
  target?: string;
};

// const sleep = (ms: number): Promise<void> =>
//   new Promise((resolve) => setTimeout(resolve, ms));

const SmartLinkButton: React.FC<SmartLinkButtonProps> = ({
  buttonText,
  variant,
  showAnimatedIcon = false,
  className,
  type = "button",
  onClick,
  url,
  isLink = false,
  target,
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (onClick) onClick();

    if (isLink && url) {
      // const body = document.querySelector("body");
      // body?.classList.add("page-transition");
      // await sleep(500);
      router.push(url);
      // await sleep(500);
      // body?.classList.remove("page-transition");
    }
  };

  const commonStyles = cn(
    "group h-auto cursor-pointer inline-flex items-center gap-4 rounded-full px-8 py-3.5 font-dm-sans font-light text-white hover:shadow-lg hover:shadow-white/25",
    variant === "bright"
      ? "bg-grad"
      : "border border-[#023B74]/20 bg-grad-alt backdrop-blur-[50px]",
    className,
  );

  if (isLink && url) {
    // Render as Link
    return (
      <Link
        href={url}
        onClick={target ? () => null : handleTransition}
        className={commonStyles}
        passHref
        target={target}
      >
        <>
          {buttonText}
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
        </>
      </Link>
    );
  }

  // Render as Button
  return (
    <Button onClick={handleTransition} type={type} className={commonStyles}>
      <>
        {buttonText}
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
      </>
    </Button>
  );
};

export default SmartLinkButton;

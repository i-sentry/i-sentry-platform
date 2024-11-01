import { cn } from "@/lib/utils";
import { useMobileMenuOverlay } from "@/stores/mobile_menu";
import { navMenu } from "@/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Cone from "@/public/assets/svg/cone-pattern.svg";
import SmartButton from "./custom_button";

const MobileSideMenu = () => {
  const pathname = usePathname();
  const { open, setOpen } = useMobileMenuOverlay();

  return (
    <div
      className={cn(
        "fixed top-0 z-50 h-full w-full duration-300 lg:hidden",
        open ? "right-0" : "-right-full",
      )}
    >
      <div className="absolute right-0 top-0 h-full w-full bg-primary-900/50 backdrop-blur"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-full overflow-hidden bg-primary-900 p-5 sm:max-w-sm">
        <Image
          src={Cone}
          alt="svg"
          className="absolute -right-[5rem] top-0 z-0 scale-125 opacity-50"
        />
        <span
          onClick={setOpen}
          className="absolute right-5 top-5 z-10 cursor-pointer text-white"
        >
          <X size={24} />
        </span>

        <div className="relative z-10 mt-16 inline-flex flex-col justify-center gap-8">
          {navMenu.map((link: { name: string; url: string }, index: number) => (
            <Link
              href={link.url}
              key={index}
              onClick={setOpen}
              className={cn("text-2xl uppercase text-secondary-300")}
            >
              <span
                className={cn(
                  "inline-block rounded-full",
                  pathname?.endsWith(link.url) &&
                    "bg-grad bg-clip-text font-semibold text-transparent drop-shadow-[0_4px_2px_rgba(255,255,255,0.2)]",
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA BUTTONs */}
        <div className="mt-10 flex flex-col items-start gap-6 border-t border-secondary-300/10 pt-8">
          <Link
            href="/login"
            className="hidden px-8 font-dm-sans font-normal text-white drop-shadow-[0_7px_3px_rgba(255,255,255,0.3)] lg:inline-block"
          >
            Login
          </Link>
          <SmartButton variant="bright" buttonText="Join our Program" />
        </div>
      </div>
    </div>
  );
};

export default MobileSideMenu;

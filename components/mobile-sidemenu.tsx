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
        "fixed top-0 z-50 h-full w-full duration-300",
        open ? "right-0" : "-right-full",
      )}
    >
      <div className="bg-primary-900/50 absolute right-0 top-0 h-full w-full backdrop-blur"></div>
      <div className="bg-primary-900 absolute right-0 top-0 z-10 h-full w-full overflow-hidden p-5 sm:max-w-sm">
        <Image
          src={Cone}
          alt="svg"
          className="absolute -right-[5rem] top-0 z-0 opacity-30"
        />
        <span
          onClick={setOpen}
          className="absolute right-5 top-5 cursor-pointer text-white"
        >
          <X size={24} />
        </span>

        <div className="relative z-10 mt-16 inline-flex flex-col">
          {navMenu.map((link: { name: string; url: string }, index: number) => (
            <Link
              href={link.url}
              key={index}
              className={cn(
                "text-secondary-300 p-0.5",
                pathname?.endsWith(link.url) &&
                  "text-primary-100 rounded-full bg-gradient-to-l from-[#10213e]/50 to-[#061935]/50",
              )}
            >
              <span
                className={cn(
                  "inline-block rounded-full p-3",
                  pathname?.endsWith(link.url) &&
                    "bg-gradient-to-l from-[#10213e]/30 to-[#061935]/30",
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA BUTTONs */}
        <div className="mt-5 flex flex-col items-center gap-6 border-t pt-8">
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

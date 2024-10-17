import { cn } from "@/lib/utils";
import { useMobileMenuOverlay } from "@/stores/mobile_menu";
import { navMenu } from "@/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const MobileSideMenu = () => {
  const pathname = usePathname();
  const { open, setOpen } = useMobileMenuOverlay();

  return (
    <div
      className={cn(
        "fixed top-0 z-50 h-full w-full duration-300",
        open ? "left-0" : "-left-full",
      )}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex h-full w-full flex-col items-center gap-3 bg-white p-5 sm:max-w-xl">
        <span
          onClick={setOpen}
          className="absolute right-5 top-5 cursor-pointer"
        >
          <X size={24} />
        </span>
        {navMenu.map((link: { name: string; url: string }, index: number) => (
          <Link
            href={link.url}
            key={index}
            className={cn(
              "text-base-300 p-0.5",
              pathname?.endsWith(link.url) &&
                "text-base-300 rounded-full bg-gradient-to-l from-[#10213e]/50 to-[#061935]/50",
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

        {/* CTA BUTTONs */}
        <div className="mt-5 flex flex-col items-center gap-6 border-t pt-8">
          <Link
            href="/login"
            className="font-dm-sans text-base-600 px-8 font-normal drop-shadow-[0_7px_3px_rgba(255,255,255,0.3)]"
          >
            Login
          </Link>
          <Button className="font-dm-sans to-base-300 from-base-700 hover:from-base-300 hover:to-base-700 h-auto rounded-full bg-gradient-to-r px-8 py-3.5 font-normal text-white duration-300">
            Join our Program
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileSideMenu;

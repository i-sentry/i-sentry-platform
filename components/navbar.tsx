"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navMenu } from "@/utils";
import MobileSideMenu from "./mobile-sidemenu";
import SmartButton from "./custom_button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
// import Logo from "@/public/images/isentry.svg";
import Image from "next/image";

type ComponentProps = {
  text?: string;
};

const Navbar: React.FC<ComponentProps> = ({}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Scroll handler

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsSticky]);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 top-0 z-50 w-full py-4 duration-300",
          isSticky ? "bg-primary-800/80 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="wrapper flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" onClick={() => setOpen(false)} className="text-white">
            <Image
              src="/images/isentry.svg"
              width={120}
              height={150}
              alt="ISentry Technologies"
              className="w-[120px] md:w-[150px]"
            />
          </Link>

          {/* NAV LINKS */}
          <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6">
            {navMenu.map(
              (link: { name: string; url: string }, index: number) => (
                <Link
                  href={link.url}
                  key={index}
                  className={cn(
                    "p-0.5 text-white",
                    pathname?.endsWith(link.url) &&
                      "rounded-full bg-gradient-to-l from-[#10213e]/50 to-[#061935]/50 text-secondary-300",
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
              ),
            )}
          </div>

          <div className="inline-flex items-center gap-3">
            {/* CTA BUTTONs */}
            <div className="inline-flex items-center">
              <SmartButton
                variant="bright"
                buttonText="Join our Program"
                className="text-sm sm:text-base"
                url="/mentorships"
                isLink
              />
            </div>

            {/* MOBILE MENU ICON */}
            {open ? (
              <span
                onClick={() => setOpen(false)}
                className="inline-block cursor-pointer text-white"
              >
                <X size={24} />
                <span className="sr-only">Close mainmenu</span>
              </span>
            ) : (
              <Button
                onClick={() => setOpen(true)}
                className="cursor-pointer border-0 bg-transparent p-0 text-white hover:bg-transparent lg:hidden"
              >
                <Menu size={24} />
                <span className="sr-only">Open mainmenu</span>
              </Button>
            )}
          </div>
        </div>
      </nav>

      <MobileSideMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { navMenu } from "@/utils";
import { useMobileMenuOverlay } from "@/stores/mobile_menu";
import MobileSideMenu from "./mobile-sidemenu";

type ComponentProps = {
  text?: string;
};

const Navbar: React.FC<ComponentProps> = ({}) => {
  const pathname = usePathname();
  const { setOpen } = useMobileMenuOverlay();
  const [isSticky, setIsSticky] = useState(false);

  // Scroll handler

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsSticky]);

  console.log(isSticky);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 top-0 z-50 w-full duration-300",
          isSticky ? "bg-brand-800/35 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* LOGO */}
          <Link href="/" className="text-white">
            Isentry
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
                      "rounded-full bg-gradient-to-l from-[#10213e]/50 to-[#061935]/50 text-base-300",
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
              <Link
                href="/login"
                className="hidden px-8 font-dm-sans font-normal text-white drop-shadow-[0_7px_3px_rgba(255,255,255,0.3)] lg:inline-block"
              >
                Login
              </Link>
              <Button className="h-auto rounded-full bg-gradient-to-r from-base-700 to-base-300 p-3 px-5 font-dm-sans text-sm font-normal text-white duration-300 hover:from-base-300 hover:to-base-700 sm:px-8 sm:py-3.5">
                Join our Program
              </Button>
            </div>

            {/* HAMBURGER ICON */}
            <Button
              onClick={setOpen}
              className="cursor-pointer border-0 bg-transparent p-0 hover:bg-transparent lg:hidden"
            >
              <HamburgerMenuIcon className="h-6 w-10" />
              <span className="sr-only">Open mainmenu</span>
            </Button>
          </div>
        </div>
      </nav>

      <MobileSideMenu />
    </>
  );
};

export default Navbar;

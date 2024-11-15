"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navMenu } from "@/utils";
import { useMobileMenuOverlay } from "@/stores/mobile_menu";
import MobileSideMenu from "./mobile-sidemenu";
import SmartButton from "./custom_button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import TransitionLink from "./widgets/transition_links";

type ComponentProps = {
  text?: string;
};

const Navbar: React.FC<ComponentProps> = ({}) => {
  const pathname = usePathname();
  const { open, setOpen } = useMobileMenuOverlay();
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

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

  console.log(isSticky);

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
          <Link href="/" className="text-white">
            Isentry
          </Link>

          {/* NAV LINKS */}
          <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6">
            {navMenu.map(
              (link: { name: string; url: string }, index: number) => (
                <TransitionLink
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
                </TransitionLink>
              ),
            )}
          </div>

          <div className="inline-flex items-center gap-3">
            {/* CTA BUTTONs */}
            <div className="inline-flex items-center">
              <SmartButton
                variant="bright"
                buttonText="Join our Program"
                className="px-6 py-2.5 text-xs md:px-6 md:py-3 md:text-sm"
                onClick={() => router.push("/mentorships")}
              />
            </div>

            {/* MOBILE MENU ICON */}
            {open ? (
              <span
                onClick={setOpen}
                className="inline-block cursor-pointer text-white"
              >
                <X size={24} />
                <span className="sr-only">Close mainmenu</span>
              </span>
            ) : (
              <Button
                onClick={setOpen}
                className="cursor-pointer border-0 bg-transparent p-0 text-white hover:bg-transparent lg:hidden"
              >
                <Menu size={24} />
                <span className="sr-only">Open mainmenu</span>
              </Button>
            )}
          </div>
        </div>
      </nav>

      <MobileSideMenu />
    </>
  );
};

export default Navbar;

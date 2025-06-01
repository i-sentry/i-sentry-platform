import { cn } from "@/lib/utils";
import { legal, navMenu, programs } from "@/utils";
import { usePathname } from "next/navigation";
import React from "react";
import FooterLink from "./footer_links";
import Link from "next/link";

const MobileSideMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed top-0 z-40 h-full w-full duration-300 lg:hidden",
        open ? "right-0" : "-right-full",
      )}
    >
      <div className="absolute right-0 top-0 h-full w-full bg-primary-900/50 backdrop-blur"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-full overflow-hidden bg-primary-900 pt-6">
        <div className="relative z-10 mt-16 flex flex-col justify-center">
          {navMenu.map((link: { name: string; url: string }, index: number) => (
            <Link
              href={link.url}
              key={index}
              onClick={() => setOpen(false)}
              className={cn(
                "bg-transparent px-4 py-3 font-inter text-primary-100 duration-300 hover:bg-footer2",
                pathname?.endsWith(link.url) && "bg-footer2",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA BUTTONs */}
        <div className="mt-10 flex flex-wrap items-start justify-start gap-10 border-t border-secondary-300/10 px-4 pt-8 sm:grid sm:grid-cols-2">
          <FooterLink title="Programs" setOpen={setOpen} links={programs} />
          <FooterLink title="Legals" setOpen={setOpen} links={legal} />
        </div>
      </div>
    </div>
  );
};

export default MobileSideMenu;

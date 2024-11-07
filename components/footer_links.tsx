import { LinkProps } from "@/utils";
import Link from "next/link";

type ComponentProps = {
  title: string;
  links: LinkProps[];
};

const FooterLink: React.FC<ComponentProps> = ({ title, links }) => {
  return (
    <>
      <div>
        <h3 className="font-inter text-sm font-normal text-[#667085]">
          {title}
        </h3>

        <div className="mt-4 inline-flex flex-col gap-3">
          {links.map((item: LinkProps, index: number) => (
            <Link
              key={index}
              href={item?.url}
              className="font-inter text-base font-normal text-[#97A4B7] duration-300 hover:text-secondary-400"
            >
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterLink;

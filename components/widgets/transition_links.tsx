import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface ILink extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink: React.FC<ILink> = ({
  href,
  children,
  className,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500);
    router.push(href);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <Link
      href={href}
      {...props}
      onClick={handleTransition}
      className={className}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;

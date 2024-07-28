import Link from "next/link";
import { FC, HTMLAttributeAnchorTarget, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  href: string
  target?: HTMLAttributeAnchorTarget;
}

const Url: FC<Props> = ({ children, className, href = "#", target }) => {
  return (
    <>
      <Link
        href={href}
        className={`flex items-center gap-2 text-lg font-semibold${className ? " " + className : ""}`}
        prefetch={false}
        target={target}
        rel="noopener"
      >
        {children}
      </Link>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(Url);

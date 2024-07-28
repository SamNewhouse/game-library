import { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  variant?: "ghost" | "secondary" | "outline";
  size?: "icon" | "sm";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<Props> = ({ children, className }) => {
  return (
    <>
      <button className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start${className ? " " + className : ""}`}>
        {children}
      </button>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(Button);

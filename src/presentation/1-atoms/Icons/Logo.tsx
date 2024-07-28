import { FC, memo } from "react";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return (
    <> 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ${className ? " " + className : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    </>
  );
};

export default memo<Props>(Logo);

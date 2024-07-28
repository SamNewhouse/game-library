import { FC, memo, PropsWithChildren } from "react";

interface Props {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Separator: FC<Props> = ({ orientation = "horizontal", className }) => (
  <div className={`${orientation} ${className}`} />
);

export default memo<PropsWithChildren<Props>>(Separator);

import { FC, memo, PropsWithChildren, ReactNode } from "react";
import Header from "../3-organisms/Header";
import Sidebar from "../3-organisms/Sidebar";

interface Props {
  children?: ReactNode;
  className?: string;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const BaseLayout: FC<Props> = ({ children, className, activeFilter, setActiveFilter }) => {
  return (
    <>
      <div
        className={`flex h-screen w-full flex-col${className ? " " + className : ""}`}
      >
        <Header />
        <div className="flex h-full">
          <Sidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <div className="flex-1 bg-muted/40 p-4 md:p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(BaseLayout);

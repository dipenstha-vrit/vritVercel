import { cn } from "@/lib/utils";
import React from "react";

type flexorBoxProps = {
  firstBox: React.ReactNode;
  secondBox: React.ReactNode;
  boxClass?: string;
};

const FlexorBox = ({ firstBox, secondBox, boxClass }: flexorBoxProps) => {
  return (
    <div
      className={cn(
        `flex flex-col lg:flex-row h-auto justify-between gap-12 px-5 md:px-12 xl:px-36 w-full ${boxClass}`
      )}
    >
      <div className="lg:w-[50%] flex justify-center items-center">
        {firstBox}
      </div>
      <div className="lg:w-[50%] flex justify-center items-center">
        {secondBox}
      </div>
    </div>
  );
};

export default FlexorBox;

import React from "react";
import { Input as UiInput } from "@/components/ui/input";

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProp> = ({ icon, className, ...prop }) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <UiInput className={`${className} ${icon ? "pl-11" : ""}`} {...prop} />
    </div>
  );
};

export default Input;

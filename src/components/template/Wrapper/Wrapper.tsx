import React from "react";

type WrapperProps = { children: React.ReactNode; className?: string };

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={`px-[20px] md:px-[30px] lg:px-[90px] ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;

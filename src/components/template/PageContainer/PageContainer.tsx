import React from "react";

type PageContainerProps = { children: React.ReactNode; className?: string };

const PageContainer = ({ children, className }: PageContainerProps) => {
  return <div className={`pt-24 md:pt-32 ${className}`}>{children}</div>;
};

export default PageContainer;

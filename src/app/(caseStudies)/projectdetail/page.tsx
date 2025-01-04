import dynamic from "next/dynamic";
import React from "react";

const DynamicCaseStudyTemplate = dynamic(
  () => import("@/components/template/CaseStudy/ManageCaseStudy")
);
const page = () => {
  return <DynamicCaseStudyTemplate />;
};

export default page;

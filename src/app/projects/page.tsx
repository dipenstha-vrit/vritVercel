import dynamic from "next/dynamic";
import React from "react";

const DynamicProjectTemplate = dynamic(
  () => import("@/components/template/Projects/ManageProjects")
);
const page = () => {
  return <DynamicProjectTemplate />;
};

export default page;

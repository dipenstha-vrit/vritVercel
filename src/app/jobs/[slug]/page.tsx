import dynamic from "next/dynamic";
import React from "react";

const DynamicJobDetail = dynamic(
  () => import("@/components/template/JobDetail/ManageJobDetail")
);
const page = () => {
  return <DynamicJobDetail />;
};

export default page;

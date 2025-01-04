import dynamic from "next/dynamic";
import React from "react";

const DynamicServicesTemplate = dynamic(
  () => import("@/components/template/services/ManageServices")
);
const page = () => {
  return <DynamicServicesTemplate />;
};

export default page;

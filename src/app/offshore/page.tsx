import dynamic from "next/dynamic";
import React from "react";

const DynamicOffshoreTemplate = dynamic(
  () => import("@/components/template/offshore/ManageOffshore")
);
const page = () => {
  return <DynamicOffshoreTemplate />;
};

export default page;

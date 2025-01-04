import dynamic from "next/dynamic";
import React from "react";

const DynamicEmailTemplate = dynamic(
  () => import("@/components/organism/offshore/EmailPreference")
);
const page = () => {
  return <DynamicEmailTemplate />;
};

export default page;

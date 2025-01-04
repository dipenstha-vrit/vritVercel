import dynamic from "next/dynamic";
import React from "react";


const DynamicFaqTemplate = dynamic(
  () => import("@/components/template/Faq/ManageFaq")
);
const page = () => {
  return <DynamicFaqTemplate />;
};

export default page;

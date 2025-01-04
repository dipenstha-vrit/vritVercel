import dynamic from "next/dynamic";
import React from "react";

const DynamicFormTemplate = dynamic(
  () => import("@/components/template/Forms/ManageForms")
);
const page = () => {
  return <DynamicFormTemplate />;
};

export default page;

import dynamic from "next/dynamic";
import React from "react";

const DynamicContactTemplate = dynamic(
  () => import("@/components/template/Contacts/ManageContacts")
);
const page = () => {
  return <DynamicContactTemplate />;
};

export default page;

import PageContainer from "@/components/template/PageContainer/PageContainer";
import dynamic from "next/dynamic";
import React from "react";

const DynamicAboutUsTemplate = dynamic(
  () => import("@/components/template/About/ManageAbout")
);
const page = () => {
  return (
    <>
      <PageContainer>
        <DynamicAboutUsTemplate />
      </PageContainer>
    </>
  );
};

export default page;

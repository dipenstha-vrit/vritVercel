import PageContainer from "@/components/template/PageContainer/PageContainer";
import dynamic from "next/dynamic";
import React from "react";

const DynamicJobsOnlyTemplate = dynamic(
  () => import("@/components/template/JobsOnly/ManageJobs")
);

const page = () => {
  return (
    <PageContainer>
      <DynamicJobsOnlyTemplate />
    </PageContainer>
  );
};

export default page;

import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import ProjectHero from "@/components/organism/Projects/ProjectHero";
import OurWork from "@/components/organism/Projects/OurWork";
import PreferPositionCard from "@/components/molecules/card/preferpositioncard";

const ManageProjects = () => {
  return (
    <>
      <PageContainer>
        <ProjectHero />
        <OurWork />
      </PageContainer>
      <PreferPositionCard
        title="You've got an idea?"
        description="Let’s build together, whether you’re a startup or an enterprise, there’s something we can do for you"
        btnName="Start working with us"
      />
    </>
  );
};

export default ManageProjects;

import BuildTogether from "@/components/organism/Contacts/BuildTogether";
import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Wrapper from "../Wrapper/Wrapper";
import PreferPositionCard from "@/components/molecules/card/preferpositioncard";


const ManageContacts = () => {
  return (
    <>
      <PageContainer>
        <div className="pattern1 w-full h-[50px] md:h-[150px]"></div>
        <Wrapper>
          <BuildTogether />
        </Wrapper>
      </PageContainer>
      <PreferPositionCard
        title="You've got an idea?"
        description="Let’s build together, whether you’re a startup or an enterprise, there’s something we can do for you"
        btnName="Start working with us"
      />
    </>
  );
};

export default ManageContacts;

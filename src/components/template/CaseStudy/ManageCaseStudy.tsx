import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import CaseContent from "@/components/organism/CaseStudy/CaseContent";
import HeroBg from "@/components/organism/CaseStudy/HeroBg";
import PageContainer from "../PageContainer/PageContainer";
import Wrapper from "../Wrapper/Wrapper";

const ManageCaseStudy = () => {
  return (
    <>
      <HeroBg />
      <PageContainer>
        <Wrapper>
          <CaseContent />
        </Wrapper>
      </PageContainer>
      <PreferPositionCard
        title="You’ve got an idea?"
        description="Let’s build together, whether you’re a startup or an enterprise, there’s something we can do for you"
        btnName="Start working with us"
      />
    </>
  );
};

export default ManageCaseStudy;

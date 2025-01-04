import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import Hero from "@/components/organism/offshore/HeroOffshore";
import LatestInsight from "@/components/organism/offshore/LatestInsight";
import Technology from "@/components/organism/offshore/Technology";
import Testimonial from "@/components/organism/offshore/Testimonial";
import Trusted from "@/components/organism/offshore/Trusted";
import VisionOffshore from "@/components/organism/offshore/VisionOffshore";
import PageContainer from "../PageContainer/PageContainer";
import Wrapper from "../Wrapper/Wrapper";

const ManageOffshore = () => {
  return (
    <>
      <PageContainer>
        <Hero />
        <Wrapper>
          <Trusted />
          <Technology />
        </Wrapper>
        <VisionOffshore title1="Your vision, our" title2="journey together" />
      </PageContainer>
      <Testimonial />
      <LatestInsight />
      <PreferPositionCard
        title="You've got an idea?"
        description="Let’s build together, whether you’re a startup or an enterprise, there’s something we can do for you"
        btnName="Start working with us"
      />
    </>
  );
};

export default ManageOffshore;

import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import InfiniteImageLR from "@/components/molecules/infiniteMove/InfiniteImage/InfiniteImageLR";
import Partners from "@/components/molecules/partners";
import PricingHero from "@/components/organism/Pricing/PricingHero";
import PricingPlan from "@/components/organism/Pricing/PricingPlan";
import VisionPricing from "@/components/organism/Pricing/VisionPricing";
import PageContainer from "../PageContainer/PageContainer";
import Wrapper from "../Wrapper/Wrapper";

const ManagePricing = () => {
  return (
    <PageContainer>
      <PricingHero />
      <Wrapper>
        <PricingPlan />
        <div className="py-16 space-y-12">
          <Partners />
          <Partners move="RL" />
        </div>

        <VisionPricing title1="Your vision, our" title2="journey together" />
      </Wrapper>
      <div className="py-16">
        <InfiniteImageLR />
      </div>

      <PreferPositionCard
        title="you've got an idea?"
        description="Let’s build together, whether you’re a startup or an enterprise, there’s something we can do for you"
        btnName="Start working with us"
      />
    </PageContainer>
  );
};

export default ManagePricing;

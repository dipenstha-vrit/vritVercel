import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import ServiceHero from "@/components/organism/Services/ServiceHero";
import ServiceStickRight from "@/components/organism/Services/ServiceStickRight";
import ServiceTestimonial from "@/components/organism/Services/ServiceTestimonial";
import PageContainer from "../PageContainer/PageContainer";
import Wrapper from "../Wrapper/Wrapper";


const ManageServices = () => {
  return (
    <>
      <PageContainer>
        <Wrapper>
          <ServiceHero />
        </Wrapper>
        <ServiceStickRight
          title1="Your vision, our"
          title2="journey together"
        />
        <Wrapper>
          <ServiceTestimonial />
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

export default ManageServices;

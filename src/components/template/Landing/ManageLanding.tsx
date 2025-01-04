import ElevateBusiness from "@/components/organism/Landing/ElevateBusiness/ElevateBusiness";
import LandingFaq from "@/components/organism/Landing/landingFaq/LandingFaq";
import Testimonials from "@/components/organism/offshore/Testimonial";
import dynamic from "next/dynamic";
import PageContainer from "../PageContainer/PageContainer";
import Wrapper from "../Wrapper/Wrapper";

const DynamicHeroComponent = dynamic(
  () => import("@/components/organism/Landing/HeroContent/HeroContent"),
  { loading: () => <p>Loading...</p> }
);
const DynamicDragComponent = dynamic(
  () => import("@/components/organism/Landing/DragSection/DragSection"),
  { loading: () => <p>Loading...</p> }
);
const DynamicVisionComponent = dynamic(
  () => import("@/components/organism/Landing/Vision/Vision"),
  { loading: () => <p>Loading...</p> }
);

export default function LandingTemplate() {
  return (
    <div>
      <PageContainer>
        <DynamicHeroComponent />
        <div className="pattern1 w-full h-[150px] md:h-[200px] xl:h-[250px]"></div>
      </PageContainer>
      <div className="bg-[#fafafa] overflow-x-hidden">
        <Wrapper>
          <DynamicDragComponent />
        </Wrapper>
      </div>

      <DynamicVisionComponent />
      <Testimonials />

      <div className="pattern1 w-full h-[150px] xl:h-[250px]"></div>
      <LandingFaq />
      <ElevateBusiness />
    </div>
  );
}

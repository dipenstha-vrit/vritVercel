import PageContainer from "@/components/template/PageContainer/PageContainer";
import dynamic from "next/dynamic";

const DynamicLandingTemplate = dynamic(
  () => import("@/components/template/Landing/ManageLanding")
);
const LandingPage = () => {
  return (
    <PageContainer>
      <DynamicLandingTemplate />
    </PageContainer>
  );
};

export default LandingPage;

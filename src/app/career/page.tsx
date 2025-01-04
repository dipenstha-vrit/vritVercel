import PageContainer from "@/components/template/PageContainer/PageContainer";
import dynamic from "next/dynamic";

const CareerTemplate = dynamic(
  () => import("@/components/template/Career/ManageCareer")
);

const page = () => {
  return (
    <PageContainer>
      <CareerTemplate />
    </PageContainer>
  );
};

export default page;

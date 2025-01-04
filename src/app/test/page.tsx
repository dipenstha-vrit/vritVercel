import PageContainer from "@/components/template/PageContainer/PageContainer";
import { lazy } from "react";
const Template404 = lazy(
  () => import("@/components/template/Page404/Template404")
);

const Page404 = () => {
  return (
    <PageContainer>
      <div className="text-center">
        <Template404 />
      </div>
    </PageContainer>
  );
};

export default Page404;

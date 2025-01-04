import JobContent from "@/components/organism/JobDetail/JobContent";
import JobHero from "@/components/organism/JobDetail/JobHero";
import PageContainer from "../PageContainer/PageContainer";
import Wrapper from "../Wrapper/Wrapper";

const ManageJobDetail = () => {
  return (
    <>
      <JobHero />
      <PageContainer>
        <Wrapper>
          <JobContent />
        </Wrapper>
      </PageContainer>
    </>
  );
};

export default ManageJobDetail;

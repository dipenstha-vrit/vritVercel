import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import BuildCareerOnly from "@/components/organism/JobsOnly/BuildCareerOnly";
import CareerOnly from "@/components/organism/JobsOnly/CareerOnly";

const ManageJobs = () => {
  return (
    <>
      <BuildCareerOnly />
      <div className="pattern1 h-[150px] md:h-[200px]"></div>
      <CareerOnly />
      <PreferPositionCard
        title="Didn’t find your prefer position?"
        description="Follow us in our social media to stay updated."
        btnName="Send us your CV"
      />
    </>
  );
};

export default ManageJobs;

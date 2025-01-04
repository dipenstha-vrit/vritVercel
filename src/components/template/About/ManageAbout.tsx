import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import AboutHero from "@/components/organism/Aboutus/AboutHero";
import AboutTeam from "@/components/organism/Aboutus/AboutTeam";
import Experience from "@/components/organism/Aboutus/Experience";
import Glimpse from "@/components/organism/Aboutus/Glimpse";


const ManageAbout = () => {
  return (
    <>
      <AboutHero />
      <div className="pattern1 w-full h-[150px] md:h-[225px]"></div>
      <Experience />
      <AboutTeam />
      <Glimpse />
      <PreferPositionCard
        title="Join the conversation and be part of the innovation."
        description="Stay connected and up-to-date with the latest from Virt Technologies! Follow us across our social media channels for career updates, industry insights, and exclusive content."
        showBtn={false}
        showLink={true}
        descWidth="lg:w-[70%]"
      />
    </>
  );
};

export default ManageAbout;

import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import AccordionContents from "@/components/organism/Faq/AccorditionContents";
import FaqHero from "@/components/organism/Faq/FaqHero";

const ManageFaq = () => {
  return (
    <>
      <FaqHero />
      <div className="flex justify-center items-center px-5">
        <AccordionContents />
      </div>
      <PreferPositionCard
        title="You've got an idea?"
        description="Let’s build together, whether you’re a startup or an enterprise, there’s something we can do for you"
        btnName="Start working with us"
      />
    </>
  );
};

export default ManageFaq;

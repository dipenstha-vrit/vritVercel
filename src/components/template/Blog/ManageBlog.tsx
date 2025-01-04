import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import BOAHero from "@/components/organism/BlogAndForm/BOAHero";
import BOAMain from "@/components/organism/BlogAndForm/BOAMain";

const ManageBlog = () => {
  return (
    <>
      <BOAHero />
      <BOAMain />
      <PreferPositionCard
        title="You've got an idea?"
        description="Let’s build together, whether you’re a startup or an enterprise, there’s something we can do for you"
        btnName="Start working with us"
      />
    </>
  );
};

export default ManageBlog;

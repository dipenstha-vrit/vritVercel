import TechnologyCard from "@/components/molecules/card/TechnologyCard/TechnologyCard";
import Text from "@/components/ui/text";

const Technology = () => {
  return (
    <div className=" w-full md:pb-16 text-center flex flex-col justify-center items-center">
      <div className=" w-full flex-col flex items-center justify-center">
        <Text className="headText text-3xl font-bold">
          Our Technology Stack
        </Text>
        <Text className=" xl:px-[15rem] pb-[3rem]">
          Leveraging top technologies for exceptional products, from front-end
          to enterprise systems.
        </Text>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-4">
        {[1, 2, 3].map((_, index) => (
          <TechnologyCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Technology;

import Text from "@/components/ui/text";
import FlexorBox from "../flexorBox/flexorBox";


const AboutHero = () => {
  const firstContent = () => {
    return (
      <>
        <div className=" w-full">
          <Text className="text-4xl font-black p-1">
            Empowering Your Vision
          </Text>
        </div>
      </>
    );
  };

  const secondContent = () => {
    return (
      <div className="py-10">
        <Text className="text-xl text-gray-600">
          At Vrit Technologies, we turn your big ideas into reality with tech
          magic. Let’s make your vision happen!
        </Text>
      </div>
    );
  };
  return <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />;
};

export default AboutHero;

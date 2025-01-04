import Text from "@/components/ui/text";
import FlexorBox from "../flexorBox/flexorBox";


const firstContent = () => {
  return (
    <div className="md:w-[50%] space-y-8 w-full h-full text-center lg:text-start">
      <Text className="headText w-full text-4xl font-bold">
        Build your career with us
      </Text>
    </div>
  );
};
const secondContent = () => {
  return (
    <div className="px-6 lg:px-16 space-y-4 md:space-y-16">
      <div>
        <Text className="text-[18px] font-medium text-gray-800">
          Join the Vrit Squad! Bring your talent, passion, and energy. Let’s
          make waves together!
        </Text>
      </div>
    </div>
  );
};
const BuildCareerOnly = () => {
  return (
    <div className="pt-[25px] md:pt-[50px]">
      <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />
    </div>
  );
};

export default BuildCareerOnly;

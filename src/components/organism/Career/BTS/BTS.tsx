import Text from "@/components/ui/text";
import FlexorBox from "../../flexorBox/flexorBox";


const firstContent = () => {
  return (
    <div className="md:px-16 w-full h-full text-center lg:text-start">
      <Text className="headText w-full text-3xl xl:text-4xl font-extrabold">
        Meet our behind the scenes team member
      </Text>
    </div>
  );
};

const secondContent = () => {
  return (
    <div className="md:px-16 space-y-8 w-full h-full text-center lg:text-start">
      <Text className="w-full font-semibold text-gray-700">
        Peek into our everyday moments! From coffee-fueled coding sessions to
        spontaneous dance breaks, our gallery showcases the unique energy and
        creativity that makes us Vrit Technologies.
      </Text>
    </div>
  );
};

const BTS = () => {
  return (
    <div className="py-8">
      <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />
    </div>
  );
};

export default BTS;

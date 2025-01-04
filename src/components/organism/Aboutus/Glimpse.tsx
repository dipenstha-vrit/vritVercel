import InfiniteImageLR from "@/components/molecules/infiniteMove/InfiniteImage/InfiniteImageLR";
import InfiniteImageRL from "@/components/molecules/infiniteMove/InfiniteImage/InfiniteImageRL";
import Text from "@/components/ui/text";
import FlexorBox from "../flexorBox/flexorBox";


const Glimpse = () => {
  const firstContent = () => {
    return (
      <div className="w-full">
        <Text className="text-4xl font-black p-1">
          See the glimpse of Vrit Technologies
        </Text>
      </div>
    );
  };
  const secondContent = () => {
    return (
      <div>
        <Text className="text-xl text-gray-600">
          Peek into our everyday moments! From coffee-fueled coding sessions to
          spontaneous dance breaks, our gallery showcases the unique energy and
          creativity that makes us Vrit Technologies.
        </Text>
      </div>
    );
  };
  return (
    <div className="py-24">
      <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />
      <div className="flex flex-col gap-4 py-20">
        <InfiniteImageLR />
        <InfiniteImageRL />
      </div>
    </div>
  );
};

export default Glimpse;

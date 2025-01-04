import Text from "@/components/ui/text";
import FlexorBox from "../../flexorBox/flexorBox";


const firstVision = () => {
  return (
    <div className=" xl:pe-32">
      <Text className="headText font-bold text-3xl xl:text-5xl p-1">
        Your vision, our journey together
      </Text>
    </div>
  );
};

const secondVision = () => {
  return (
    <div className="xl:px-24">
      <Text>
        Explore how our tailored research, design, and development bring your
        vision to life, creating solutions that effectively represent and
        elevate your business.
      </Text>
    </div>
  );
};
const Vision = () => {
  return (
    <div className="xl:py-24 xl:px-8 ">
      <FlexorBox firstBox={firstVision()} secondBox={secondVision()} />
    </div>
  );
};

export default Vision;

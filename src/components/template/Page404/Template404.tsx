import { Icon404 } from "@/app/images";
import FlexorBox from "@/components/organism/flexorBox/flexorBox";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";

const first404 = () => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-4 items-center md:items-start md:text-start">
        <Text className="headText text-4xl font-black">
          Oops! Page Not Found
        </Text>
        <Text className="text-gray-800 text-lg">
          It looks like something went wrong. Give us a moment while we fix this
          hiccup, and everything will be back on track soon!
        </Text>
        <Button className="mt-4 w-fit">Back to Homepage</Button>
      </div>
      <div className="md:hidden flex md:justify-end justify-center">
        <Icon404 />
      </div>
    </>
  );
};
const second404 = () => {
  return (
    <>
      <div className="hidden md:flex md:justify-end justify-center">
        <Icon404 />
      </div>
      <div className="flex md:hidden flex-col gap-4 items-center md:items-start md:text-start">
        <Text className="headText text-4xl font-black">
          Oops! Page Not Found
        </Text>
        <Text className="text-gray-800 text-lg">
          It looks like something went wrong. Give us a moment while we fix this
          hiccup, and everything will be back on track soon!
        </Text>
        <Button className="mt-4 w-fit">Back to Homepage</Button>
      </div>
    </>
  );
};

const Template404 = () => {
  return (
    <div className="flex items-center justify-center h-dvh">
      <FlexorBox boxClass="" firstBox={first404()} secondBox={second404()} />
    </div>
  );
};

export default Template404;

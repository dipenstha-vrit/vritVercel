import Text from "@/components/ui/text";
import React from "react";
import FlexorBox from "../../flexorBox/flexorBox";
import { Button } from "@/components/ui/button";
import PositionCard from "@/components/molecules/card/PositionCard";
import { positionList } from "@/constant/positionList";

const firstContent = () => {
  return (
    <div className="md:px-16 space-y-8 w-full h-full text-center lg:text-start">
      <Text className="headText w-full text-5xl font-bold">
        Build your career with us
      </Text>
      <Button className="text-[#1253ED] border-[#1253ED]" variant={"outline"}>
        See all open position
      </Button>
    </div>
  );
};
const secondContent = () => {
  return (
    <div className=" space-y-16">
      <div>
        <Text className="text-[20px] text-gray-800">
          Join the Vrit Squad! Bring your talent, passion, and energy. Let’s
          make waves together!
        </Text>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {positionList?.slice(0, 4).map((item, index) => (
          <PositionCard
            title={item.title}
            experience={item.exp}
            vacancy={item.vacancy}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
const BuildCareer = () => {
  return (
    <div className="py-[25px] md:py-[150px]">
      <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />
    </div>
  );
};

export default BuildCareer;

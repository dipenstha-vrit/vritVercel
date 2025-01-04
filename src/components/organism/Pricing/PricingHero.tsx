import Text from "@/components/ui/text";
import React from "react";

const PricingHero = () => {
  return (
    <div className="pattern1 h-[240px] flex flex-col text-center w-full ">
      <Text className="headText text-3xl font-extrabold p-1">
        The plan make it real
      </Text>
      <Text className="text-gray-600 text-xl xl:px-80">
        Our plans are crafted to align with your business’s unique needs and
        goals. Each one is designed to provide a clear path to success, helping
        you achieve your ambitions efficiently.
      </Text>
    </div>
  );
};

export default PricingHero;

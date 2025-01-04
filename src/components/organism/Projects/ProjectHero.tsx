import Text from "@/components/ui/text";
import React from "react";

const ProjectHero = () => {
  return (
    <div className="md:py-16">
      <div className="w-full px-5 md:px-20">
        <Text className="text-2xl md:text-3xl font-semibold  md:w-[40rem] tracking-wide">
          Explore our expert designs and animations that effectively showcase
          and represent your business.
        </Text>
        <div className="pattern1 w-full h-24 md:h-40"></div>
      </div>
    </div>
  );
};

export default ProjectHero;

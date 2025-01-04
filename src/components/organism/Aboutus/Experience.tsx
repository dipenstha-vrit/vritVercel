import Text from "@/components/ui/text";
import React from "react";


const Experience = () => {
  return (
    <div className="w-full px-5 xl:ps-40">
      <Text className="font-bold text-2xl md:text-3xl lg:text-3xl xl:w-[52%] w-full py-2 text-center md:text-start">
        Vrit Technologies delivers innovative solutions for 8 years, driven by
        excellence and client success.
      </Text>
      <div className="w-full flex justify-center xl:justify-start gap-4 py-14 flex-wrap">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border px-4 w-full md:w-[20%] aspect-video bg-[#fcfcfc] rounded-xl"
          >
            <span>8+</span>
            <span>Years of Experience</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

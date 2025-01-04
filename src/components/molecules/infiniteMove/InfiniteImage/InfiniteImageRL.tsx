import React from "react";
import InfiniteMover from "..";
import Text from "@/components/ui/text";
import photoList from "@/constant/photoList";
import Image from "next/image";



const InfiniteImageRL = () => {
  return (
    <InfiniteMover className="sideXFade" duration={10} move="RL">
      <div className="flex items-start justify-center ">
        {photoList?.map((item, index) => (
          <div key={index} className="relative w-[100px] rounded-md ml-4 ">
            <Image
              src={item}
              alt="image"
              loading="lazy"
              className="rounded-md"
            />
            <div
              className={`absolute rounded-md top-0 left-0 w-full h-full  bg-[#0437B8] bg-opacity-50`}
            ></div>
          </div>
        ))}
      </div>
    </InfiniteMover>
  );
};

export default InfiniteImageRL;

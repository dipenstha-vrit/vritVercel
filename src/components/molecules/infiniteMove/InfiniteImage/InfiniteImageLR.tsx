import React from "react";
import InfiniteMover from "..";
import Text from "@/components/ui/text";
import photoList from "@/constant/photoList";
import Image from "next/image";


const InfiniteImageLR = () => {
  return (
    <InfiniteMover className="sideXFade" duration={10} move="LR">
      <div className="flex items-end justify-center ">
        {photoList?.map((item, index) => (
          <div key={index} className="relative w-[200px] rounded-md ml-4 ">
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

export default InfiniteImageLR;

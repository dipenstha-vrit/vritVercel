import React from "react";
import InfiniteMover from "../infiniteMove";
import Image from "next/image";
import { partners } from "@/constant/dragSectionList";

type PartnersProps = {
  move?: "LR" | "RL";
};

const Partners: React.FC<PartnersProps> = ({ move = "LR" }) => {
  // Define animation direction logic

  return (
    <InfiniteMover
      className="sideXFade"
      duration={6} // Animation duration in seconds
      move={move}
    >
      <div className="flex items-center justify-center">
        {partners?.map((item, index) => (
          <div key={index} className="w-[100px] ml-12">
            <Image
              src={item}
              alt={`Partner ${index}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </InfiniteMover>
  );
};

export default Partners;

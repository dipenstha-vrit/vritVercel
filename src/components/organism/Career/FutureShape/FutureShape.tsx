import { ArrowRightIcon } from "@/app/images";
import Text from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TeamImg from "@/app/images/Team.png";



const FutureShape = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center">
      <Text className="headText font-extrabold text-5xl">
        Shape Your Future with Us
      </Text>
      <div>
        <Text className="opacity-80 text-xl">
          Why Settle for Ordinary When You Can Have Extraordinary?
        </Text>
        <Text className="opacity-80 text-xl">
          Dive Into a Career That Feels Like Play and Enjoy Every Moment of the
          Ride!
        </Text>
      </div>
      <Link href={``}>
        <div className="flex items-center justify-center gap-2 text-sm">
          <Text className="text-[#0437b8] font-semibold">
            See all open position
          </Text>
          <ArrowRightIcon />
        </div>
      </Link>
      {/* HeroIMG  */}

      <div className=" teamImg w-full rounded-xl lg:w-[1000px] bg-blend-screen border">
        <Image
          src={TeamImg}
          alt="Vrit Technologies Team"
          className="rounded-xl "
        />
      </div>
    </div>
  );
};

export default FutureShape;

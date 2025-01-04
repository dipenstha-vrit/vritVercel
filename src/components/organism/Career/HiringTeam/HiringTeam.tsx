"use client";
import { AnimatedGroup } from "@/components/molecules/animatedGroup";
import TeamCard from "@/components/molecules/card/TeamCard/TeamCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Text from "@/components/ui/text";
import { perksList } from "@/constant/perksList";
import { teamList } from "@/constant/teamList";


const HiringTeam = () => {
  return (
    <>
      <div className="flex flex-col gap-8 py-24">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <Text className="headText font-extrabold text-3xl md:text-5xl">
            Meet our hiring team
          </Text>
          <Text className="w-full lg:max-w-[45%] text-xl">
            To stay on our managing team radar, feel free to send us your
            polished and favorite project
          </Text>
        </div>

        {/* team card */}
        <AnimatedGroup className="flex lg:flex-row flex-col gap-4 justify-between">
          {teamList?.slice(0, 3)?.map((team, index) => (
            <TeamCard key={index} data={team} buttonShow={true} imgHeightWidth="w-[430px] h-full md:h-[530px]"/>
          ))}
        </AnimatedGroup>
      </div>
      {/* Perks&Benifits  */}
      <div className="flex flex-col gap-4 justify-center items-center text-center pt-16">
        <Text className="headText text-3xl xl:text-5xl font-extrabold">
          Perks & benefits
        </Text>
        <ol className="flex flex-col md:flex-row items-start md:items-center flex-wrap justify-between gap-4 py-8 xl:w-[50%]">
          {perksList?.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 md:w-[40%]  text-start"
            >
              <Avatar>
                <AvatarImage
                  src={item?.icon}
                  alt="icon"
                  className="bg-[#e4ecff] p-2"
                />
                <AvatarFallback>icon</AvatarFallback>
              </Avatar>
              <Text className="text-gray-600 text-xl">{item?.name}</Text>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default HiringTeam;

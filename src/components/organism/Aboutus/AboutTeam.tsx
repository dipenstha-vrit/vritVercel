import TeamCard from "@/components/molecules/card/TeamCard/TeamCard";
import Text from "@/components/ui/text";
import { teamList } from "@/constant/teamList";

const AboutTeam = () => {
  const ATeam = teamList?.filter((team) => team?.divison === "A");
  const BTeam = teamList?.filter((team) => team?.divison === "B");
  const CTeam = teamList?.filter((team) => team?.divison === "C");
  return (
    <div className="w-full py-12 px-5 xl:px-20">
      <div className="py-12">
        <Text className="headText xl:ps-20 font-black text-2xl md:text-3xl lg:text-3xl lg:w-[52%] md:w-[50%] w-full py-1 text-center md:text-start">
          Managing Team
        </Text>
        <div className="flex gap-4 flex-wrap py-6">
          {ATeam?.map((team, index) => (
            <TeamCard
              key={index}
              data={team}
              buttonShow={false}
              showFooter={true}
              imgHeightWidth="w-full h-[480px] md:min-w-[300px] md:w-[356px] md:h-[450px] lg:min-w-[460px] lg:w-[476px] lg:h-[600px] xl:min-w-[300px] xl:w-[250px]  xl:h-[380px]"
            />
          ))}
        </div>
      </div>
      <div className="py-12">
        <Text className="headText xl:ps-20 font-black text-2xl md:text-3xl lg:text-3xl lg:w-[52%] md:w-[50%] w-full py-1 text-center md:text-start">
          Design Team
        </Text>
        <div className="flex gap-4 flex-wrap py-6">
          {ATeam?.map((team, index) => (
            <TeamCard
              key={index}
              data={team}
              buttonShow={false}
              showFooter={true}
              imgHeightWidth="w-full h-[480px] md:min-w-[300px] md:w-[356px] md:h-[450px] lg:min-w-[460px] lg:w-[476px] lg:h-[600px] xl:min-w-[300px] xl:w-[250px]  xl:h-[380px]"
            />
          ))}
        </div>
      </div>
      <div className="py-12">
        <Text className="headText xl:ps-20 font-black text-2xl md:text-3xl lg:text-3xl lg:w-[52%] md:w-[50%] w-full py-1 text-center md:text-start">
          Business Team
        </Text>
        <div className="flex gap-4 flex-wrap py-6">
          {ATeam?.map((team, index) => (
            <TeamCard
              key={index}
              data={team}
              buttonShow={false}
              showFooter={true}
              imgHeightWidth="w-full h-[480px] md:min-w-[300px] md:w-[356px] md:h-[450px] lg:min-w-[460px] lg:w-[476px] lg:h-[600px] xl:min-w-[300px] xl:w-[250px]  xl:h-[380px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;

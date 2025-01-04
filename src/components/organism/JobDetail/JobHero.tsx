"use client";
import { BriefcaseIcon, UsersIcon } from "@/app/images";
import Text from "@/components/ui/text";
import { positionList } from "@/constant/positionList";
import { useSearchParams } from "next/navigation";


const JobHero = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const data = positionList.find((item) => item.id === id);
  console.log(data, "data");
  return (
    <div className="border text-white bg-blue-700 h-[430px] space-y-12 flex flex-col justify-center items-center w-full text-center">
      <Text className="text-white text-5xl font-semibold">{data?.title}</Text>
      <div className="flex md:flex-row flex-col items-center w-full justify-center gap-4 ">
        <Text className="font-semibold flex items-center space-x-2 justify-center md:justify-end">
          <BriefcaseIcon className="stroke-white" />
          <span>Experience Level: {data?.exp}</span>
        </Text>
        <Text className="font-semibold flex items-center space-x-2 justify-center md:justify-start ">
          <UsersIcon className="stroke-white" />
          <span>Vacancy: {data?.vacancy}</span>
        </Text>
      </div>
    </div>
  );
};

export default JobHero;

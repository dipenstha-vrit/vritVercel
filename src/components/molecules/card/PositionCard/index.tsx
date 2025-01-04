import { ArrowRightIcon, BriefcaseIcon, UsersIcon } from "@/app/images";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Text from "@/components/ui/text";
import Link from "next/link";

type PositionCardProps = {
  title: string;
  experience: string;
  vacancy: string;
};

const PositionCard = ({ title, experience, vacancy }: PositionCardProps) => {
  return (
    <>
      <Link href={`/jobs/${title}?id=${title}`}>
        <Card className="hover:bg-[#f3f6fe] w-full">
          <CardHeader className="p-4">
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between items-end p-4 ">
            <div className="flex flex-row w-[60%] lg:w-[75%] text-[#00164880] ">
              <Text className="text-xs font-semibold flex items-center space-x-2 w-[61%] ">
                <BriefcaseIcon className="stroke-[#00164880]" /> <span>Experience Level: {experience}</span>
              </Text>
              <Text className="text-xs font-semibold flex items-end space-x-2 w-[39%] ">
                <UsersIcon className="stroke-[#00164880]"/>
                <span>Vacancy: {vacancy}</span>
              </Text>
            </div>
            <div className=" text-gray-500 group-hover:text-[#1253ed] text-xs font-semibold flex gap-2 text-end justify-end items-end w-[40%] lg:w-[25%] ">
              <Text>View Details</Text>{" "}
              <ArrowRightIcon className="stroke-gray-500 group-hover:stroke-[#1253ed]" />
            </div>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default PositionCard;

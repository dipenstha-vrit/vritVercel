import { CheckIcon } from "@/app/images";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type PricingCardProps = {
  data: {
    name: string;
    price: string;
    timePeriod: string;
    desc: string;
    services: string[];
  };
};

const PricingCard = (data: PricingCardProps) => {
  return (
    <>
      {/* Card */}
      <Card className="p-6 py-0 w-full md:w-[300px] xl:w-[350px] group hover:border-[#1253ED] hover:shadow-[0_0_0_1px_#1253ED] duration-200">
        <CardHeader className="text-start pb-2 px-0">
          <CardTitle className="mb-7 text-[#032783]">
            {data?.data?.name}
          </CardTitle>
          <div className="flex items-center gap-4">
            <span className="font-bold text-5xl">${data?.data?.price}</span>
            <span className="text-muted-foreground">
              {data?.data?.timePeriod} weeks
            </span>
          </div>
        </CardHeader>
        <CardDescription className=" break-words border-b-2 py-8 h-[8rem]">
          {data?.data?.desc}
        </CardDescription>
        <CardContent className="min-h-[20rem]">
          <ul className="mt-7 space-y-2.5 text-sm">
            {data?.data?.services?.map((item, index) => (
              <li key={index} className="flex space-x-2">
                <CheckIcon />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="">
          <Button
            className="w-full rounded-3xl group-hover:bg-[#1253ED] group-hover:text-white duration-200"
            variant={"secondary"}
          >
            Start your Project
          </Button>
        </CardFooter>
      </Card>
      {/* End Card */}
    </>
  );
};

export default PricingCard;

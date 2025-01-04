"use client";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import React from "react";
import StickyBox from "react-sticky-box";

type StickyProps = {
  title1: string;
  title2: string;
  desc: React.ReactNode;
  titleClassName?: string;
  descClassName?: string;
  showBtn?: boolean;
  btnTitle?: string;
};

const StickyScroll = ({
  title1,
  title2,
  desc,
  titleClassName,
  descClassName,
  showBtn = false,
  btnTitle,
}: StickyProps) => {
  return (
    <div className="grid md:grid-cols-[500px_1fr] xl:gap-8 p-4 break-all xl:px-12">
      <React.Fragment>
        {/* Sticky Section */}
        <StickyBox
          offsetTop={200} // Increase offsetTop dynamically
          className={cn(
            `h-fit md:flex flex-col md:text-start md:justify-start  hidden text-center ${titleClassName}`
          )}
        >
          <div className=" w-full">
            <Text as={"h2"}>{title1}</Text>
            <Text as={"h2"}>{title2}</Text>
            {showBtn && (
              <Button type="button" className="w-fit mt-8">
                {btnTitle}
              </Button>
            )}
          </div>
        </StickyBox>
        <Text
          as={"h2"}
          className="md:hidden text-3xl xl:text-2xl text-center font-bold"
        >
          {title1}
        </Text>
        <Text
          as={"h2"}
          className="md:hidden text-3xl xl:text-2xl text-center font-bold mb-8 md:mb-0"
        >
          {title2}
        </Text>
        {showBtn && (
          <div className="border mx-auto md:hidden">
            <Button type="button" className=" w-fit mt-2 mb-8">
              {btnTitle}
            </Button>
          </div>
        )}
        {/* Corresponding Content */}
        <div className="w-full">{desc}</div>
      </React.Fragment>
    </div>
  );
};

export default StickyScroll;

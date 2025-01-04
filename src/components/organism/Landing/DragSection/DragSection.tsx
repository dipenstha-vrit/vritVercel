import React from "react";
import FlexorBox from "../../flexorBox/flexorBox";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import {
  dragSectionContentList,
  dragSectionList,
} from "@/constant/dragSectionList";
import Partners from "@/components/molecules/partners";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselSlider,
} from "@/components/molecules/dragCarousel";

const firstContent = () => {
  return (
    <div className=" space-y-8 w-full">
      <Text className="text-2xl xl:text-3xl opacity-80">
        Experience our expert solutions tailored to enhance your business with
        top-tier design, development, and animation.
      </Text>
      <Button size={"lg"}>Services</Button>
    </div>
  );
};

const secondContent = () => {
  return (
    <div className="w-full flex justify-center ">
      <div>
        <ol className="space-y-4 text-center md:text-start">
          {dragSectionList?.map((item, index) => (
            <li key={index} className="headText font-bold text-4xl">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const DragSection = () => {
  return (
    <div className="w-full gap-24 py-24  flex flex-col justify-center items-center">
      <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />
      {/* drag Section  */}
      <div className="w-full flex justify-end">
        <div className="w-full relative overflow-x-hidden">
          <Carousel className=" py-8">
            <CarouselContent className="-ml-4">
              {dragSectionContentList?.map((item, index) => (
                <CarouselItem className="basis-2/3 pl-4" key={index}>
                  <div className="flex rounded-md items-center justify-center">
                    <img
                      src={item}
                      alt="image"
                      draggable={false}
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselSlider />
          </Carousel>
        </div>
      </div>

      {/* partner  */}
      <div className="w-full text-center flex flex-col gap-6">
        <Text className="font-semibold">Our Partners</Text>
        <div className="">
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default DragSection;

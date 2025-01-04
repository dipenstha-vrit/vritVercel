"use client";
import { TestiArrowLeft, TestiArrowRight } from "@/app/images";
import TestimonialHero from "@/components/molecules/card/TestimonialHero";
import CardCarousel from "@/components/molecules/customCarousel/CardCarousel";
import Wrapper from "@/components/template/Wrapper/Wrapper";
import { Button } from "@/components/ui/button";
import { testimonialsList } from "@/constant/testimonialList";
import { useState } from "react";

const Testimonials = () => {
  // APIHooks usage

  //   const viewableCards = cards?.filter((item: any) => item.is_show);
  const viewableCards = testimonialsList;

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex: number) => (prevIndex + 1) % viewableCards.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex: number) =>
        (prevIndex - 1 + viewableCards.length) % viewableCards.length
    );
  };
  return (
    <div className="relative w-full xl:px-8 pb-16 md:pb-52">
      <Wrapper>
        <div className=" relative flex lg:block flex-row justify-center items-center px-5 lg:px-14 xl:pb-32">
          <TestimonialHero />
          <div className={`${viewableCards?.length > 0 ? "block" : "hidden"}`}>
            <Button
              onClick={handleNext}
              className="absolute shadow-none  group z-10 hidden lg:block top-[60%]  rounded-full px-6 pt-4 pb-7 left-52 bg-transparent hover:bg-gray-100 border"
            >
              <TestiArrowRight />
            </Button>
            <Button
              onClick={handlePrev}
              className="absolute shadow-none group hover:bg-gray-100 hidden z-10 lg:block top-[60%] rounded-full px-6 pt-4 pb-7 left-28 border bg-transparent"
            >
              <TestiArrowLeft />
            </Button>
          </div>
        </div>
        <div className="flex top-[30%] xl:absolute mt-5 right-[0%]">
          <CardCarousel
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            viewableCards={viewableCards}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Testimonials;

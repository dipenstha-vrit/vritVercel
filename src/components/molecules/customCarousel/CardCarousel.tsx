import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import TestimonialsCard from "../card/TestimonialCard/TestimonialCard";

type CardCarouselProps = {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  currentIndex: number;
  viewableCards: {
    id: number;
    name: string;
    feedback: string;
    img: string;
    rating: number;
  }[];
};

const CardCarousel: React.FC<CardCarouselProps> = ({
  setCurrentIndex,
  currentIndex,
  viewableCards,
}) => {
  const [dragging, setDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % viewableCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + viewableCards.length) % viewableCards.length
    );
  };

  const handleDrag = (event: any, info: { offset: { x: number } }) => {
    const dragDistance = info.offset.x;
    setDragProgress(dragDistance);
  };

  const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
    const dragDistance = info.offset.x;
    const threshold = 100; // Customize this threshold for faster or slower swipes

    // If dragged sufficiently to the left or right, update index
    if (dragDistance < -threshold) {
      handleNext();
    } else if (dragDistance > threshold) {
      handlePrev();
    }

    // Reset drag progress after dragging
    setDragProgress(0);
    setDragging(false);
  };

  return (
    <div className="relative lg:w-[850px] z-10 lg:pl-0 lg:p-6 lg:pr-[430px] overflow-hidden">
      <motion.div
        className="flex xl:gap-0 gap-4"
        initial={{ x: 0 }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{
          type: "tween",
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {viewableCards.map((testimonial) => (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={(event, info) => handleDrag(event, info)}
            key={testimonial.id}
            onDragEnd={(event, info) => handleDragEnd(event, info)}
            dragElastic={0.05}
            className="flex-shrink-0 w-full max-h-full"
          >
            <TestimonialsCard testimonialsData={testimonial} />
          </motion.div>
        ))}
      </motion.div>

      {/* Carousel controls for larger screens */}
      <button
        onClick={handlePrev}
        className="absolute text-sm lg:hidden bottom-0 right-[55%] transform -translate-y-1/2 bg-primary-color text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute lg:hidden bottom-0 left-[55%] transform -translate-y-1/2 bg-primary-color text-white text-sm p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default CardCarousel;

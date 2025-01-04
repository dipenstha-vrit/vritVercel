"use client";

import { FigmaCursor } from "@/app/images";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const AnimatedFigmaCursor: React.FC<{
  motionClassName?: string;
  cursorClassName?: string;
  className?: string;
  cursorColor?: string;
  text: string;
  xPosition?: "xTL" | "xTR" | "xBL" | "xBR";
  yPosition?: "yTL" | "yTR" | "yBL" | "yBR";
}> = ({
  motionClassName,
  className,
  cursorColor,
  text,
  cursorClassName,
  xPosition = "xTL",
  yPosition = "yTL",
}) => {
  // Define translations for X-axis
  const xTranslations = {
    xTL: ["0px", "-20px", "0px"], // Animates to the left and back
    xTR: ["0px", "20px", "0px"], // Animates to the right and back
    xBL: ["0px", "-20px", "0px"], // Animates to the left and back
    xBR: ["0px", "20px", "0px"], // Animates to the right and back
  };

  // Define translations for Y-axis
  const yTranslations = {
    yTL: ["0px", "-20px", "0px"], // Animates upwards and back
    yTR: ["0px", "-20px", "0px"], // Animates upwards and back
    yBL: ["0px", "20px", "0px"], // Animates downwards and back
    yBR: ["0px", "20px", "0px"], // Animates downwards and back
  };

  return (
    <div className={className}>
      <motion.div
        initial={{ translateX: "0px", translateY: "0px" }}
        animate={{
          translateX: xTranslations[xPosition],
          translateY: yTranslations[yPosition],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={cn("relative flex items-center gap-4")}
      >
        <div
          className={cn(
            "w-fit rounded-full py-2 px-4  bg-green-600 border-4 border-green-100 text-white",
            motionClassName
          )}
        >
          {text}
        </div>
        <div className={cn("absolute", cursorClassName)}>
          <FigmaCursor color={cursorColor} />
        </div>
      </motion.div>
    </div>
  );
};

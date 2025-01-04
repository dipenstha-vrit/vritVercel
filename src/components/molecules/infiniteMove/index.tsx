"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  move?: "LR" | "RL"; // Specify allowed direction values
};

const InfiniteMover: React.FC<Props> = ({
  children,
  className,
  move = "LR", // Default direction is Left-to-Right
  duration = 5,
}) => {
  // Define movement directions
  const directions = {
    LR: { from: "-100%", to: "0%" }, // Left-to-Right
    RL: { from: "0%", to: "-100%" }, // Right-to-Left
  };

  const currentMove = directions[move];

  return (
    <div className={cn("flex overflow-hidden", className)}>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <motion.div
          key={index}
          initial={{ x: currentMove.from }} // Start position
          animate={{ x: currentMove.to }} // End position
          transition={{
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          }}
          className="flex-shrink-0"
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
};

export default InfiniteMover;

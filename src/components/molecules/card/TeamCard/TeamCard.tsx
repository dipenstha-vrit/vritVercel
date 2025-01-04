"use client";
import { XMenuIcon } from "@/app/images";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Text from "@/components/ui/text";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

type TeamCardProps = {
  data: {
    name: string;
    position: string;
    divison: string;
    description: string;
    img: { src: string; alt: string };
  };
  buttonShow: boolean;
  imgHeightWidth?: string;
  showFooter?: boolean;
};

const TeamCard = ({
  imgHeightWidth,
  data,
  buttonShow = false,
  showFooter = false,
}: TeamCardProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <Card className="relative rounded-2xl z-10 w-fit border-none shadow-none hover:cursor-default overflow-hidden">
      <img
        className={`${imgHeightWidth} rounded-2xl object-fill`}
        src={data.img.src}
        alt={data.name}
      />
      <div
        className={`absolute rounded-2xl top-0 left-0 ${imgHeightWidth} bg-[#0437B8] bg-opacity-50`}
      ></div>
      {/* The overlay */}
      {buttonShow && (
        <button
          onClick={handleClick}
          type="button"
          className="absolute bottom-2 right-2 z-20 rounded-full bg-white p-4"
        >
          {open ? (
            <XMenuIcon className="stroke-gray-800 " />
          ) : (
            <PlusIcon className="stroke-gray-800" />
          )}
        </button>
      )}
      {showFooter && (
        <CardFooter className="px-0 py-2 flex flex-col items-start justify-start">
          <Text className="font-semibold text-xl">{data?.name}</Text>
          <CardDescription>{data?.position}</CardDescription>
        </CardFooter>
      )}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{
              borderRadius: "100%", // Start as a circle
              scale: 0, // Start small
              opacity: 5,
              top: "85%", // Match button position
              left: "85%",
              transform: "translate(-50%, -50%, -50%)",
            }}
            animate={{
              borderRadius: "0%", // Expand to a rectangle
              scale: 1, // Fill the parent
              opacity: 1,
              top: "0",
              left: "0",
              transform: "translate(0, 0,0)",
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            exit={{
              borderRadius: "100%", // Shrink back to a circle
              scale: 0, // Shrink down
              opacity: 0,
              top: "85%", // Match button position
              left: "85%",
              transform: "translate(-50%, -50%,-50%)",
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            className="absolute rounded-2xl top-0 left-0 w-full h-full bg-[#1253ed] flex flex-col items-center justify-between py-8 text-white"
          >
            <CardHeader>{data?.description}</CardHeader>
            <CardFooter className="flex flex-col items-start w-full">
              <span className="font-semibold text-xl">{data?.name}</span>{" "}
              <span>{data?.position}</span>
            </CardFooter>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default TeamCard;

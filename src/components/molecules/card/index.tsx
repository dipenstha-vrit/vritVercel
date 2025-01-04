import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import React from "react";

type Cardprops = {
  outerClassName?: string;
  onClick?: () => void;
};

function Card({ outerClassName, onClick, ...props }: Cardprops) {
  return (
    <div
      className={cn(`shadow p-3 rounded-md`, outerClassName)}
      onClick={onClick}
    >
      <Text {...props}>Hello there</Text>
    </div>
  );
}

export default Card;

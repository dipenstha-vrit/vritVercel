import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

type PopoverMenuProps = {
  triggerText?: React.ReactNode;
  popoverContent?: React.ReactNode;
};

const PopoverMenu = ({ triggerText, popoverContent }: PopoverMenuProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{triggerText}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">{popoverContent}</PopoverContent>
    </Popover>
  );
};

export default PopoverMenu;

import Accordioner from "@/components/molecules/accordition";
import { faqList } from "@/constant/faqList";
import { AccordionMultipleProps } from "@radix-ui/react-accordion";
import React from "react";

const AccordionContents = () => {
  return (
    <div className="md:w-[50%] py-24">
      {faqList?.map((item, index) => (
        <Accordioner key={item?.id || index} {...item} />
      ))}
    </div>
  );
};

export default AccordionContents;

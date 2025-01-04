import PricingCard from "@/components/molecules/card/PricingCard/PricingCard";
import { pricingList } from "@/constant/pricingList";
import React from "react";

const PricingPlan = () => {
  return (
    <div className="flex justify-center flex-wrap gap-4 xl:gap-12 py-4 xl:py-16">
      {pricingList?.map((item, index) => (
        <PricingCard key={index} data={item} />
      ))}
    </div>
  );
};

export default PricingPlan;

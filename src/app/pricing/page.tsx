import React from "react";

const DynamicPricingTemplate = React.lazy(
  () => import("@/components/template/pricing/ManagePricing")
);
const page = () => {
  return <DynamicPricingTemplate />;
};

export default page;

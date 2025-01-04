import dynamic from "next/dynamic";
import React from "react";

const DynamicBlogTemplate = dynamic(
  () => import("@/components/template/Blog/ManageBlog")
);
const page = () => {
  return <DynamicBlogTemplate />;
};

export default page;

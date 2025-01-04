import dynamic from "next/dynamic";

const DynamicBlogDetailTemplate = dynamic(
  () => import("@/components/template/Blog/BlogDetail")
);
const page = () => {
  return <DynamicBlogDetailTemplate />;
};

export default page;

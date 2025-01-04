import { lazy } from "react";
const Template404 = lazy(
  () => import("@/components/template/Page404/Template404")
);

const Page404 = () => {
  return (
      <div className="text-center">
        <Template404 />
      </div>
  );
};

export default Page404;

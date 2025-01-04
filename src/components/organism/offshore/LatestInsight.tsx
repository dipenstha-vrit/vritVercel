import BlogCard from "@/components/molecules/card/BlogCard/BlogCard";
import Wrapper from "@/components/template/Wrapper/Wrapper";
import Text from "@/components/ui/text";
import { blogList } from "@/constant/blogList";
import Link from "next/link";

const LatestInsight = () => {
  const latestBlogList = blogList?.slice(0, 3);
  return (
    <Wrapper>
      <div className="w-full flex flex-col gap-8 pt-16 pb-24">
        <div className="w-full flex justify-between items-end">
          <Text className="text-3xl p-1 font-bold">Latest Insights</Text>
          <Link className="whitespace-nowrap text-[#0437b8]" href={``}>
            View all bogs
          </Link>
        </div>
        <div className="flex justify-between lg:gap-0 flex-wrap">
          {latestBlogList?.map((blog, index) => (
            <BlogCard
              key={blog?.id || index}
              data={blog}
              dynamicClass="md:w-[350px]"
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default LatestInsight;

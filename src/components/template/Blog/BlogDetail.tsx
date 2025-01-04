"use client";
import { BreadcrumbWithCustomSeparator } from "@/components/molecules/breadCrumbs";
import BlogCard from "@/components/molecules/card/BlogCard/BlogCard";
import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Text from "@/components/ui/text";
import { blogList } from "@/constant/blogList";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useParams } from "next/navigation";
import PageContainer from "../PageContainer/PageContainer";
import Wrapper from "../Wrapper/Wrapper";

const BlogDetail = () => {
  const params = useParams();
  const slug = decodeURIComponent(params?.slug || "");
  const blogDetailData = blogList.find((blog) => blog.title === slug);

  if (!blogDetailData) {
    return <div className="text-2xl font-bold flex justify-center items-center h-[50dvh] border">Blog not found !</div>;
  }

  const date = blogDetailData?.date ? parseISO(blogDetailData.date) : null;
  const blogDate = date
    ? formatDistanceToNow(date, { addSuffix: true })
    : "Date unavailable";

  const relatedBlogs = blogList
    .filter(
      (blog) =>
        blog.category === blogDetailData?.category && blog.title !== slug
    )
    .slice(0, 3);
  console.log(relatedBlogs, "relatedBlogs");
  return (
    <div>
      <PageContainer>
        <Wrapper>
          <div className="xl:px-24 ">
            {" "}
            <BreadcrumbWithCustomSeparator currentBlog={slug} />
            <div className="w-full py-8">
              <div className="flex justify-between items-end w-full py-4 flex-wrap">
                <div className="flex flex-col gap-4 w-full xl:w-[60%] border">
                  <Text className="text-5xl font-black">
                    {blogDetailData?.title}
                  </Text>
                  <Text className="text-gray-700 text-xl max-w-fit">
                    Experience our expert solutions tailored to enhance your
                    business with top-tier design, development, and animation.
                  </Text>
                </div>
                <div>
                  <Text className="max-w-fit text-gray-700">
                    Design · {blogDate}
                  </Text>
                </div>
              </div>
              <div className="w-full border">
                <img
                  src={blogDetailData?.img}
                  alt={blogDetailData?.title || "Blog image"}
                  className="rounded-xl"
                />
              </div>
              <div className="py-12 border-b border-gray-200">
                {blogDetailData?.description}
              </div>
              <div className="flex flex-col py-6 gap-4">
                <Text className="font">Written by</Text>
                <div className="flex gap-2">
                  <Avatar className="border w-16 h-16">
                    <AvatarImage src={blogDetailData?.img} alt="author" />
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">
                      {blogDetailData?.author || "Unknown"}
                    </span>
                    <span className="text-gray-700">position</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-end w-full py-4 text-3xl font-black">
              <Text>Related Blogs</Text>
              <Text></Text>
            </div>

            <div className="flex gap-4">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((blog, index) => (
                  <BlogCard
                    key={index}
                    data={blog}
                    dynamicClass="w-[300px] h-[300px] border"
                  />
                ))
              ) : (
                <Text>no blogs yet</Text>
              )}
            </div>
          </div>
        </Wrapper>
      </PageContainer>
      <PreferPositionCard
        title="You've got an idea?"
        description="Let’s build together, whether you’re a startup or an enterprise, there’s something we can do for you"
        btnName="Start working with us"
      />
    </div>
  );
};

export default BlogDetail;

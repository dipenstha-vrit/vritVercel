"use client";
import BlogCard from "@/components/molecules/card/BlogCard/BlogCard";
import { Badge } from "@/components/ui/badge";
import { blogList } from "@/constant/blogList";
import { categoryList } from "@/constant/categoryList";
import { useState } from "react";


const BOAMain = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const handleSelect = (category: string) => setSelectedCategory(category);
  const allCategory = ["All", ...categoryList];
  const filteredBlogs =
    selectedCategory === "All"
      ? blogList
      : blogList.filter((blog) => blog.category === selectedCategory);
  return (
    <div className="py-16 px-4 lg:px-20">
      <div className="flex justify-between">
        <div className="flex gap-4 overflow-auto">
          {allCategory?.map((category, index) => {
            const count =
              category === "All"
                ? blogList?.length
                : blogList?.filter((item) => item?.category === category)
                    ?.length;
            return (
              <Badge
                onClick={() => handleSelect(category)}
                key={index}
                className={`text-nowrap flex gap-1 ${
                  selectedCategory === category
                    ? "bg-[#0437b8] text-white hover:bg-[#0437b8] hover:text-white"
                    : "bg-white text-[#0437b8]"
                }`}
              >
                {category}
                <sup>{count}</sup>
              </Badge>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap py-12 lg:py-24 gap-4 ">
        {filteredBlogs?.map((blog, index) => (
          <BlogCard
            key={index}
            data={blog}
            dynamicClass=" xl:w-[665px] xl:h-[600px] border"
          />
        ))}
      </div>
    </div>
  );
};

export default BOAMain;

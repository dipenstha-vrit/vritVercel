"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { formatDistanceToNow, parseISO } from "date-fns";
import { Dot } from "lucide-react";
import Link from "next/link";

type BlogData = {
  id: number;
  title: string;
  category: string;
  date: string;
  img: string;
  description: string;
};

type BlogCardProps = {
  data: BlogData;
  showDesc?: boolean;
  dynamicClass?: string;
};

const BlogCard = ({ data, dynamicClass }: BlogCardProps) => {
  console.log(data, "blogdata");
  const date = parseISO(data?.date);
  const blogDate = formatDistanceToNow(date, { addSuffix: true });
  return (
    <Link href={`/blog/${data?.title}`}>
      <Card
        className={cn(
          `w-full  rounded-xl border-none shadow-none p-0 flex flex-col gap-4 justify-between`,
          dynamicClass || "lg:w-[440px] h-[350px]"
        )}
      >
        <div className="w-full h-full rounded-xl">
          <img
            src={data?.img}
            alt=""
            className="w-full h-full rounded-xl object-fill"
          />
        </div>
        <CardTitle className="flex flex-col gap-2 p-0 text-xl">
          {data?.title}
          <CardContent className="p-0">
            <Text className="text-sm text-gray-600 font-normal">
              {data?.description}
            </Text>
          </CardContent>
          <CardDescription className="flex font-normal items-center">
            <span>{data?.category}</span>
            <Dot className=" " />
            <span>{blogDate}</span>
          </CardDescription>
        </CardTitle>
      </Card>
    </Link>
  );
};

export default BlogCard;

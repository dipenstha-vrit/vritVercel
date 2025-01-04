"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function AllBreadCrumbs() {
  const pathNameMap: { [key: string]: string } = {
    career: "Career",
    service: "Service",
    review: "Reviews",
    orders: "Orders",
  };
  const pathName = usePathname();
  console.log(pathName, "pathNaaaame");
  const pathSegments = pathName
    ?.toString()
    ?.split("/")
    ?.filter(Boolean)
    ?.map((segment) => decodeURIComponent(segment)); // Decode %20 to spaces
  console.log(pathSegments, "pathSegments");
  const breadcrumbs = pathSegments?.map((segment, index) => {
    const fullPath = `/${pathSegments?.slice(0, index + 1)?.join("/")}`;
    const segmentName =
      pathNameMap?.[segment] ||
      segment
        ?.replace(/-/g, " ") // Replace dashes with spaces
        ?.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words

    return (
      // Non-clickable text for the last segment
      <React.Fragment key={fullPath}>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{segmentName}</BreadcrumbPage>
        </BreadcrumbItem>
      </React.Fragment>
    );
  });
  return (
    <Breadcrumb className="w-full mx-auto flex md:hidden justify-center mb-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        {breadcrumbs}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

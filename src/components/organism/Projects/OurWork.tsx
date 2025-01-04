"use client";
import ProjectCard from "@/components/molecules/card/ProjectCard/ProjectCard";
import { Badge } from "@/components/ui/badge";
import Text from "@/components/ui/text";
import { projectList } from "@/constant/projectList";
import { serviceList } from "@/constant/serviceList";
import { useState } from "react";


const OurWork = () => {
  const [selectedService, setSelectedService] = useState<string>("All");
  const handleSelect = (service: string) => setSelectedService(service);
  const allServices = ["All", ...serviceList];
  const filteredProjects =
    selectedService === "All"
      ? projectList
      : projectList.filter((project) => project.service === selectedService);
  return (
    <div className="py-16 px-5 xl:px-20">
      <div className="flex justify-between flex-wrap xl:flex-nowrap">
        <Text className="text-4xl font-black">Our latest works</Text>
        <div className="flex flex-wrap md:flex-nowrap gap-4 py-4">
          {allServices?.map((service, index) => {
            const count =
              service === "All"
                ? projectList?.length
                : projectList?.filter((item) => item?.service === service)
                    ?.length;
            return (
              <Badge
                onClick={() => handleSelect(service)}
                key={index}
                className={`text-nowrap flex gap-1 p-2 ${
                  selectedService === service
                    ? "bg-[#0437b8] text-white hover:bg-[#0437b8] hover:text-white"
                    : "bg-gray-100"
                }`}
              >
                {service}
                <sup>{count}</sup>
              </Badge>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-16 md:gap-14  xl:gap-24 py-8 md:py-16">
        {filteredProjects?.map((project, index) => (
          <ProjectCard
            key={index}
            img={project?.img}
            title={project?.title}
            cardClassName={`${
              index % 4 === 0
                ? "w-full min-w-[250px] max-w-[750px] h-[250px] md:h-[250px] md:w-[55%] lg:w-[55%] xl:w-[55%] lg:h-[330px] xl:h-[400px]" // First card
                : index % 4 === 1
                ? "w-full min-w-[200px] max-w-[600px] h-[250px] md:h-[220px] md:w-[37%] lg:w-[39%] xl:w-[37.5%] lg:h-[290px] xl:h-[360px]" // Second card
                : index % 4 === 2
                ? "w-full min-w-[200px] max-w-[650px] h-[250px] md:h-[240px] md:w-[43%] lg:w-[44.5%] xl:w-[44%] lg:h-[330px] xl:h-[400px] md:ms-10 lg:ms-12 xl:ms-16" // Third card
                : "w-full min-w-[200px] max-w-[650px] h-[250px] md:h-[240px] md:w-[43%] lg:w-[44.5%] xl:w-[44%] lg:h-[330px] xl:h-[400px]" // Fourth card
            } bg-white rounded-xl shadow-lg`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWork;

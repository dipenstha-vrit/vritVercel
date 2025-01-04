import ProjectCard from "@/components/molecules/card/ProjectCard/ProjectCard";
import Text from "@/components/ui/text";
import { projectList } from "@/constant/projectList";
import Link from "next/link";


const CaseContent = () => {
  return (
    <div>
      <Text as={"h1"} className="text-xl text-gray-700">
        Project Brief
      </Text>
      <Text></Text>
      <div>
        {projectList.slice(0, 4).map((project, index) => (
          <Link key={index} href={`/case-study/${project.title}`}>
            <ProjectCard title={project?.title} img={project?.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseContent;

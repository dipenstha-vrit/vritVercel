import { Card, CardFooter } from "@/components/ui/card";

type ProjectCardProps = {
  img?: string;
  title: string;
  cardClassName: string;
};

const ProjectCard = ({ img, title, cardClassName }: ProjectCardProps) => {
  return (
    <Card className={cardClassName}>
      <div className="w-full h-full rounded-xl">
        <img src={img} alt="image" className="w-full h-full rounded-xl" />
      </div>

      <CardFooter className="px-0 pt-4">{title}</CardFooter>
    </Card>
  );
};

export default ProjectCard;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PreferPositionCardProps = {
  title: string;
  description: string;
  btnName?: string;
  showBtn?: boolean;
  showLink?: boolean;
  descWidth?: string;
};

const PreferPositionCard = ({
  title,
  description,
  btnName,
  showBtn = true,
  showLink = false,
  descWidth = "lg:w-[40%]",
}: PreferPositionCardProps) => {
  return (
    <div className="pattern2 flex w-full justify-center items-center py-16 px-5 md:px-16 xl:px-44">
      <Card className="w-full text-center border-none py-6 hover:cursor-default">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="headText text-2xl md:text-3xl font-extrabold leading-[50px]">
            {title}
          </CardTitle>
          <CardDescription
            className={`text-gray-600 text-md font-semibold ${descWidth}`}
          >
            {description}
          </CardDescription>
        </CardHeader>
        {showBtn && (
          <CardContent className="flex flex-col gap-4 justify-center items-center">
            <span className="text-gray-400 font-semibold">or</span>
            <Button>{btnName}</Button>
          </CardContent>
        )}
        {showLink && (
          <CardContent className="flex flex-col gap-4 justify-center items-center">
            <span className=" font-semibold">Find us on</span>
            Links...
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default PreferPositionCard;

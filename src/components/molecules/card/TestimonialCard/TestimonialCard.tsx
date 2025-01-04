import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Text from "@/components/ui/text";
import AvatarComponent from "../../avatar";
import DOMPurify from "dompurify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestimonialsCard = ({ testimonialsData }: { testimonialsData: any }) => {
  console.log(testimonialsData, "testimonialsData");
  const sanitizedDescription = testimonialsData
    ? DOMPurify.sanitize(testimonialsData?.feedback)
    : "";
  console.log(sanitizedDescription, "testimonialsData");
  return (
    <Card className="bg-[#f7f7f7] border-none shadow-none flex flex-col h-full justify-between relative min-w-[400px] w-[200px] max-w-[445px] p-4 ">
      <CardTitle>
        <AvatarComponent
          src={testimonialsData?.img}
          fallback="AS"
          className="w-28 h-28"
        />
      </CardTitle>
      <CardContent className="flex flex-col justify-between">
        <div className=" pt-2">
          <div className=" line-clamp-4 text-justify">
            <Text>{sanitizedDescription}</Text>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Text className="font-semibold">{testimonialsData?.name}</Text>
        <Text className="text-gray-500">CEO</Text>
      </CardFooter>
    </Card>
  );
};

export default TestimonialsCard;

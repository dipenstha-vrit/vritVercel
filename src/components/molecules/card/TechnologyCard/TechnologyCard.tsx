import { Card, CardContent, CardTitle } from "@/components/ui/card";


const TechnologyCard = () => {
  return (
    <Card className="w-[350px] h-[360px] flex flex-col py-4 px-6 gap-8 bg-[#fbfbfb] border shadow-none">
      <CardTitle className="headText">Design</CardTitle>
      <CardContent className="flex justify-center items-center flex-wrap">
        <img
          src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain"
          alt="design"
          className="w-12 h-12 rounded-lg"
        />
      </CardContent>
    </Card>
  );
};

export default TechnologyCard;

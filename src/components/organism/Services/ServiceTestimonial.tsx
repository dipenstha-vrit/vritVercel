import AvatarComponent from "@/components/molecules/avatar";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Text from "@/components/ui/text";
import { partnerTestimonials } from "@/constant/partnerTestimonials";


const ServiceTestimonial = () => {
  return (
    <div className="flex justify-center items-center">
      <Carousel className="w-full max-w-6xl">
        <CarouselContent>
          {partnerTestimonials?.map((item, index) => (
            <CarouselItem key={index}>
              <div className="md:px-8">
                <Card className="border-none shadow-none md:px-24 xl:px-44">
                  <CardContent className="flex md:flex-row flex-col md:space-x-8 aspect-square items-center justify-center p-6 h-[500px] w-full">
                    <Avatar className="w-32 h-32">
                      <AvatarComponent className="w-32 h-32" src={item?.logo} />
                    </Avatar>

                    <div>
                      <Text className="text-xl">"{item?.testimonial}"</Text>
                      <Text as={"h2"} className="font-semibold">
                        {item?.name}
                      </Text>
                      <span className="text-sm">
                        {item?.position}, {item?.company}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
};

export default ServiceTestimonial;

import InfiniteImageLR from "@/components/molecules/infiniteMove/InfiniteImage/InfiniteImageLR";
import Partners from "@/components/molecules/partners";
import StickyScroll from "@/components/molecules/stickyScroll";
import { Badge } from "@/components/ui/badge";
import Text from "@/components/ui/text";
import { serviceDescList } from "@/constant/serviceList";

const ServiceStickRight = ({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) => {
  const rightPanel = () => {
    return (
      <div>
        {serviceDescList?.map((item, index) => (
          <div className="pb-12" key={index}>
            <Text as={"h2"} className="text-xl font-semibold">
              {item.title}
            </Text>
            <Text as={"p"} className="text-gray-700 my-4">
              {item.desc}
            </Text>
            <div className="flex gap-4 flex-wrap">
              {item.tags?.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="bg-[#fafafa]  md:py-24">
      <div className="py-16 xl:px-44">
        <StickyScroll
          titleClassName="text-3xl font-bold px-[125px]"
          title1={title1}
          title2={title2}
          desc={rightPanel()}
        />
      </div>
      <div className="py-16 w-full overflow-x-hidden">
        <InfiniteImageLR />
      </div>

      <div className="py-16 xl:px-44">
        <StickyScroll
          titleClassName="text-3xl font-bold px-[125px]"
          title1={title1}
          title2={title2}
          desc={rightPanel()}
          showBtn={true}
          btnTitle="Request Service"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <Text as={"h2"} className="text-3xl font-bold px-12">
          Trusted by 10+ scale-ups
        </Text>
        <Text as={"p"} className="text-gray-700 my-4 xl:w-[30%]">
          We’ve helped our clients on upscale their digital presence through our
          tech development services
        </Text>
        <div className="w-full md:w-[80%] xl:w-[50%] overflow-x-hidden space-y-12">
          <Partners move="LR" />
          <Partners move="RL" />
        </div>
      </div>
    </div>
  );
};

export default ServiceStickRight;

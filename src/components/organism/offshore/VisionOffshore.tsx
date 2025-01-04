import StickyScroll from "@/components/molecules/stickyScroll";
import { Badge } from "@/components/ui/badge";
import Text from "@/components/ui/text";
import { serviceDescList } from "@/constant/serviceList";

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

const VisionOffshore = ({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) => {
  return (
    <div className="pt-16 xl:px-44">
      <StickyScroll
        titleClassName="text-3xl font-bold px-[125px]"
        title1={title1}
        title2={title2}
        desc={rightPanel()}
        showBtn={true}
        btnTitle="Request Service"
      />
    </div>
  );
};

export default VisionOffshore;

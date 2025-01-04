import Accordioner from "@/components/molecules/accordition";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { faqList } from "@/constant/faqList";
import Link from "next/link";
import FlexorBox from "../../flexorBox/flexorBox";

const LandingFaq = () => {
  const firstContent = () => {
    return (
      <div className="lg:pe-60 space-y-8 h-full">
        <Text className="headText text-3xl xl:text-4xl font-black opacity-80">
          Frequently asked questions
        </Text>
        <Button variant={"outline"} className="border-[#0437b8] text-[#0437b8]">
          Submit your query
        </Button>
      </div>
    );
  };
  const secondContent = () => {
    return (
      <div className="w-full">
        {faqList?.map((item, index) => (
          <Accordioner key={item?.id || index} {...item} />
        ))}
        <Link href="/faq">
          <Text className="text-[#0437b8]">See all FAQ's</Text>
        </Link>
      </div>
    );
  };
  return (
    <div className="xl:py-32 px-8">
      <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />
    </div>
  );
};
export default LandingFaq;

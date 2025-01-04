import Wrapper from "@/components/template/Wrapper/Wrapper";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";

const HeroContent = () => {
  return (
    <div className="w-full">
      <Wrapper className="w-full ">
        {/* heading  */}
        <div className="flex flex-col">
          <Text className="headText font-bold text-3xl lg:text-6xl xl:w-[46%] w-full py-2 text-center md:text-start">
            Tech solutions for
          </Text>
          <Text className="headText font-bold text-3xl lg:text-6xl xl:w-[46%] w-full py-2 text-center md:text-start">
            your ambitious goals
          </Text>
        </div>

        {/* video section  */}
        <div className="min-h-[400px] border"></div>
        {/* schedule call */}
        <div className="w-full flex justify-center items-center py-4">
          <div className="w-full md:w-[70%] xl:w-[53%] space-y-8 flex flex-col items-center md:items-start">
            <Text className="font-semibold xl:text-2xl tracking-wider">
              <span className="text-[#1D1D1D] tracking-[-0.020px]">
                At Vrit Technologies,
              </span>
              <span className="text-[#1D1D1D] opacity-50 leading-[150%] tracking-[-0.020px]">
                we turn your digital dreams into actionable solutions. From
                concept to market success, our tailored approach ensures you
                stay ahead. Join us in shaping the future of your business.
              </span>
            </Text>
            <Button size={"lg"} className="w-fit">
              Schedule a Call
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroContent;

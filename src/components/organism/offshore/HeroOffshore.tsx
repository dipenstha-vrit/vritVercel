import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";


const HeroOffshore = () => {
  return (
    <div className="pattern1 flex flex-col justify-center items-center text-center pb-8 ">
      <div className=" lg:w-[51%]">
        <Text className="text-[#1253ed] font-semibold">
          Outsource Wisely, Innovate Faster
        </Text>
        <Text className="headText font-bold text-3xl md:text-5xl py-4">
          Boost Productivity and Quality
        </Text>
        <Text className="px-12">
          Vrit Tech’s outsourcing solutions enhance efficiency, reduce costs,
          and drive growth, freeing up resources for what matters most.
        </Text>
        <div className="flex flex-col justify-center items-center py-8">
          <Button className="flex -space-x-5 py-5 border-none">
            Schedule a Call
            <Avatar className=" w-7 h-7 border-2 border-white">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Avatar className=" w-7 h-7 border-2 border-white">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Avatar className=" w-7 h-7 border-2 border-white bg-[#1253ED]">
              <a
                className="flex justify-center items-center text-white text-xs "
                href="#"
              >
                +99
              </a>
            </Avatar>
          </Button>
          <Text className="text-xs text-gray-500 py-2">
            Start Optimizing Your Business
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HeroOffshore;

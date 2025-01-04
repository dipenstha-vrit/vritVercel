import Partners from "@/components/molecules/partners";
import Text from "@/components/ui/text";


const Trusted = () => {
  return (
    <div className="py-16 lg:px-[10rem]  text-center">
      <Text className="font-semibold text-xl">Trusted by 10+ scale-ups</Text>
      <div className="py-12 overflow-x-hidden w-full">
        <Partners />
      </div>
    </div>
  );
};

export default Trusted;

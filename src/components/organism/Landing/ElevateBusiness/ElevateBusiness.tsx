import { AnimatedFigmaCursor } from "@/components/molecules/figmaCursor";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";

const ElevateBusiness = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center relative bg-[#f9fbff] px-5">
      {/* The middle content */}
      <div className="text-center flex flex-col gap-4 w-full items-center justify-center">
        <Text className="headText text-4xl md:text-5xl font-black">
          Ready to elevate your business?
        </Text>
        <div className="w-full text-center flex justify-center">
          <span className="text-[#344471]  md:w-[40%]">
            Let’s take your business to the next level. Reach out to Vrit
            Technologies and discover how we can work together to achieve your
            most ambitious goals.
          </span>
        </div>

        <Button className="mt-8">Get Started</Button>
      </div>

      {/* Top Left Cursor */}
      <AnimatedFigmaCursor
        xPosition="xTL"
        yPosition="yTL"
        text="Expert Guidance"
        className="absolute hidden md:block  top-8 md:top-16 xl:top-24  xl:left-44 md:left-24"
        cursorClassName="left-36 top-3"
      />

      {/* Top Right Cursor */}
      <AnimatedFigmaCursor
        xPosition="xTR"
        yPosition="yTR"
        text="Proven Results"
        className="absolute hidden md:block  md:top-16 xl:top-24  xl:right-44 md:right-24 "
        motionClassName="bg-yellow-500 border-yellow-100"
        cursorClassName="rotate-90 right-36 top-3 "
        cursorColor="#f0af1d"
      />

      {/* Bottom Left Cursor */}
      <AnimatedFigmaCursor
        xPosition="xBL"
        yPosition="yBL"
        text="Innovative Solutions"
        className="absolute hidden md:block  bottom-8 md:bottom-16 xl:bottom-24  xl:left-44 md:left-24"
        motionClassName="bg-pink-600 border-pink-100"
        cursorClassName="rotate-[290deg] left-40 bottom-3"
        cursorColor="#db2777"
      />

      {/* Bottom Right Cursor */}
      <AnimatedFigmaCursor
        xPosition="xBR"
        yPosition="yBR"
        text="Seamless Integration"
        className="absolute hidden md:block md:bottom-16 xl:bottom-24  xl:right-44 md:right-24"
        motionClassName="bg-[#b80505] border-red-100"
        cursorClassName="rotate-180 right-40 bottom-3"
        cursorColor="#b80505"
      />
    </div>
  );
};

export default ElevateBusiness;

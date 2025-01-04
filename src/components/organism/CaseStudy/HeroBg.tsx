import bannerImage from "@/app/images/brandPattern.png";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HeroBg = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px] w-full"
      style={{
        backgroundImage: bannerImage ? `url(${bannerImage})` : "none",
      }}
    >
      <div className="flex items-end justify-center h-full bg-black bg-opacity-50 py-12">
        <div className="flex flex-col w-full px-40 gap-4">
          <h2 className="text-white text-4xl md:text-6xl font-bold p-2 w-[50%]">
            Event Management Simplified
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-2">
              {[1, 2, 3].map((item, index) => (
                <Badge key={index} className="">
                  <span className="tracking-wider">UI/UX Design</span>
                </Badge>
              ))}
            </div>

            <Link href={"/"}>
              <Badge>
                Visit Site <ArrowUpRight width={18} />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBg;

import { ArrowRight } from "lucide-react";

interface MenuAnimationProps {
  menuItem: string;
}

export default function MenuAnimationSm({ menuItem }: MenuAnimationProps) {
  return (
    <div className="flex min-w-fit flex-col gap-2 overflow-hidden md:px-10">
      <div className="group flex items-center gap-2">
        <ArrowRight className="size-3 -translate-x-full opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:opacity-100 md:size-5" />

        <h1 className=" z-10 w-full whitespace-nowrap -translate-x-3 cursor-pointer transition-transform duration-300 ease-out group-hover:translate-x-0 text-white md:-translate-x-6 md:text-xl md:group-hover:translate-x-0">
          {menuItem}
        </h1>
      </div>
    </div>
  );
}

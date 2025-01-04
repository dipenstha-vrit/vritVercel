import { ArrowRight } from "lucide-react";

interface MenuAnimationProps {
  menuItem: string;
}

export default function MenuAnimation({ menuItem }: MenuAnimationProps) {
  return (
    <div className="flex min-w-fit flex-col gap-2 overflow-hidden md:px-10">
      <div className="group flex items-center gap-2">
        <ArrowRight className="size-5 -translate-x-full opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:opacity-100 md:size-10" />

        <h1 className="z-10 -translate-x-6 cursor-pointer font-semibold transition-transform duration-300 ease-out group-hover:translate-x-0 text-white md:-translate-x-12 text-2xl md:text-5xl md:group-hover:translate-x-0 tracking-wider p-1">
          {menuItem}
        </h1>
      </div>
    </div>
  );
}

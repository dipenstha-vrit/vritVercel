import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors  bg-[#0437B8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#1253ED]  rounded-3xl text-primary-foreground shadow hover:bg-blue-800 outline-none  active:ring-4 active:ring-[#b8ccfd]",
        destructive:
          "bg-destructive  text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border rounded-3xl border-gray-500 bg-transparent shadow-sm md:hover:border-[#1253ED]  md:hover:text-white outline-none   md:active:ring-4 md:active:ring-[#b8ccfd] md:hover:bg-[#1253ED] text-gray-800 ",
        secondary:
          "bg-secondary   text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent  hover:text-accent-foreground",
        link: "text-primary   underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-3xl px-3 text-xs",
        lg: "h-10 rounded-3xl px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

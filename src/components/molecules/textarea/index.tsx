import React from "react";

// Assuming you have a custom TextArea component from a UI library
import { Textarea as UiTextarea } from "@/components/ui/textarea";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
  className?: string;
  iconTop?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  icon,
  className,
  iconTop = "top-0",
  ...rest
}) => {
  return (
    <div className="relative w-full">
      {/* Conditionally render the icon if provided */}
      {icon && (
        <div
          className={`absolute left-0 pl-4 flex items-center pointer-events-none ${iconTop}`} // Use iconTop to position icon
        >
          {icon}
        </div>
      )}

      {/* The textarea field */}
      <UiTextarea
        className={`${className} ${icon ? "pl-11" : ""}`} // Adjust padding if icon is present
        {...rest} // Spread remaining props like placeholder, rows, etc.
      />
    </div>
  );
};

export default Textarea;

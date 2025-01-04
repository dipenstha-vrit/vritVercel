import { ElementType, ReactNode } from "react";

interface TextComponentProps {
  as?: ElementType;
  children?: ReactNode; // Make children optional
  className?: string;
  dangerouslySetInnerHTML?: { __html: string }; // Optional for handling HTML
  [key: string]: unknown; // This allows any other HTML attribute (e.g., style, id, etc.)
}

export default function Text({
  as: Component = "p",
  children,
  className = "",
  dangerouslySetInnerHTML, // Destructure here
  ...props
}: TextComponentProps) {
  const defaultClasses = "w-full max-w-full overflow-hidden break-words p-1";
  const combinedClasses = `${defaultClasses} ${className}`.trim();

  // Conditional rendering based on whether dangerouslySetInnerHTML is provided
  if (dangerouslySetInnerHTML) {
    return (
      <Component
        className={combinedClasses}
        {...props}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML} // Set inner HTML
      />
    );
  }

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}

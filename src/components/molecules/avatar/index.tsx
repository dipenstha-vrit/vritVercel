import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProp {
  src: string;
  className?: string;
  fallback?: string;
}

const AvatarComponent: React.FC<AvatarProp> = ({
  src,
  fallback,
  className,
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt="Avatar" />
      {/* Here Fallback means What to show if image is not received which is EG if no img => AS */}
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;

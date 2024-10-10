import { ReactNode, useEffect, useState } from "react";
import { cn } from "../libs/className";

export const InfiniteCarousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [duplicatedChildren, setDuplicatedChildren] = useState<ReactNode[]>([]);

  useEffect(() => {
    const childrenArray = Array(children);
    setDuplicatedChildren([
      ...childrenArray,
      ...childrenArray,
      ...childrenArray,
    ]);
  }, [children]);

  return (
    <div className="w-full mx-auto overflow-hidden">
      <div className={cn("flex animate-smooth-scroll", className)}>
        {duplicatedChildren}
      </div>
    </div>
  );
};

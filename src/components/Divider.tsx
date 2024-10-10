import { cn } from "../libs/className";

export const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("h-px w-full bg-gray-400", className)} />;
};

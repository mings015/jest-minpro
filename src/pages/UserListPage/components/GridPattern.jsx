import { cn } from "@/lib/utils";
import GridPatterns from "@/components/ui/grid-pattern";

const GridPattern = () => {
  return (
    <GridPatterns
      width={60}
      height={60}
      x={-1}
      y={-1}
      strokeDasharray={"10 2"}
      className={cn()}
    />
  );
};

export default GridPattern;

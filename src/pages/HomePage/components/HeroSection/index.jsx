import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "../../../../components/ui/button";

import { ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";


const HeroSectiom = () => {
  return (
    <div className="relative z-10 border-b-2 border-border">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"10 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="m-2 text-center flex flex-col items-center justify-center gap-10 h-[600px] sm:h-[700px]">
        <h1 className="text-5xl md:text-6xl font-heading">Dinamis Data from <span className="text-main">Reqres.in</span></h1>
        <div className="flex flex-col items-center justify-center gap-5 text-xl">
        <h2>
        Welcome to DemoApp, a platform that showcases the power of API integration!
        </h2>
        <h2>
        We display real-time data taken directly from
          <span className="text-main"> https://reqres.in/</span>
        </h2>
        </div>
        
        <Link to="/user">
        <Button className="gap-2 p-6 text-xl font-heading">
            Try Now 
            <ArrowUpRight />
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSectiom;

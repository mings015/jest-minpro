import Avatar from "../../../../components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import GridPattern from "../../../../components/ui/grid-pattern";
import { cn } from "@/lib/utils";

import { TESTIMONI_DUMMY } from "@/helper/constants/dummy";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimoniSection = () => {
  return (
    <div className="relative z-10 ">
      <GridPattern
        width={70}
        height={70}
        x={-1}
        y={-1}
        strokeDasharray={"10 2"}
        className={cn()}
      />

      <div className="relative flex flex-col items-center justify-center gap-10 py-20 border-b-2 border-border">
        <h1 className="text-3xl font-heading ">People Said 👜</h1>
        <div className="container px-10 mx-auto my-10">
        <Carousel>
          <CarouselContent className="flex gap-10">
            {TESTIMONI_DUMMY.map((testimoni, index) => (
              <div key={index} className="flex flex-row gap-10">
                <Card className="w-[250px] sm:w-[350px] bg-bg">
                  <CardHeader className="flex flex-row gap-3">
                    <Avatar imageUrl={testimoni.image} />
                    <div className="flex flex-col justify-around">
                      <CardTitle>{testimoni.name}</CardTitle>
                      <p>{testimoni.from}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="h-auto max-h-[150px] overflow-y-auto">
                    <p className="break-words whitespace-normal">
                      &quot;{testimoni.description}&quot;
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimoniSection;

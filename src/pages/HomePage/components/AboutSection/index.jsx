import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

import { REGRESS_FEATURES } from "@/helper/constants/static";


const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 border-b-2 bg-bg border-border">
      <h1 className="text-3xl font-heading ">About Regress.in ⚡️</h1>
      <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {
          REGRESS_FEATURES.map((feature, index) => (
            <div key={index}>
              <Card className="w-[280px] lg:w-[350px] bg-white">
                <img src={feature.svg} style={{}} alt="svg" className="mt-4 ml-4" />
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>{feature.description}</CardContent>
              </Card>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AboutSection;


import { TESTIMONI_DUMMY } from "@/helper/constants/dummy";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Avatar from "@/components/ui/avatar";

const CardComment = () => {
    return (
        <div className="flex flex-col gap-5">
                  <h1 className="w-full text-3xl border-b-2 border-b-mainAccent text-main font-heading">
                    Comment
                  </h1>
                  <div className="flex flex-col gap-5 mb-10">
                    {TESTIMONI_DUMMY.map((testimoni, index) => (
                      <div key={index} className="flex flex-row gap-10">
                        <div className="relative w-full bg-white border-b-2 border-border">
                          <CardHeader className="flex flex-row gap-3">
                            <Avatar imageUrl={testimoni.image} />
                            <div className="flex flex-col justify-around">
                              <CardTitle>{testimoni.name}</CardTitle>
                              <p>{testimoni.from}</p>
                            </div>
                          </CardHeader>
                          <CardContent className="h-auto max-h-[150px] overflow-y-auto">
                            <p className="text-sm break-words whitespace-normal">
                              &quot;{testimoni.description}&quot;
                            </p>
                          </CardContent>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
    );
}

export default CardComment;

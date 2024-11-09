import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GridPattern from "../../../../components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import UseSendWa from "@/hooks/useSendWa";

const ContactSection = () => {
  const { formData, handleChange, handleSubmit, linkMap } = UseSendWa();

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
      <div className="relative flex flex-col items-center justify-center gap-10 py-20 border-t-2 border-border">
        <h1 className="text-3xl font-heading ">Contact Us</h1>
        <div className="grid grid-cols-1 gap-10 my-5 md:grid-cols-2">
          <div className="">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  If you have any questions feel free to contact us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid items-center w-full gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <CardFooter className="px-0 pt-4">
                    <Button type="submit" variant="neutral">
                      Send to WhatsApp
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Card className="h-full">
              <iframe
                src={linkMap}
                className="w-full md:h-full h-[400px]"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginCard from "./LoginCard";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="flex flex-col items-center justify-center w-full h-full md:w-1/2">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          strokeDasharray={"10 2"}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
        <LoginCard />
      </div>
      <div className="items-center justify-center hidden p-10 bg-main md:flex md:w-1/2">
        <div className="text-white">
          <h2 className="my-4 text-3xl font-heading">
            Sign in with account below to access dashboard
          </h2>
          <div className="my-2 italic">
            <p>email : eve.holt@reqres.in</p>
            <p>password : cityslicka</p>
          </div>
          <p className="my-4 text-xl">
            This DemoApp is fully integrated with the ReqRes API
          </p>

          <Button variant="neutral" className="my-6">
            <a href="https://reqres.in/">Learn more about Reqress API</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

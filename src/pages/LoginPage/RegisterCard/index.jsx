import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {  TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import UseRegister from "@/hooks/useRegister";
import { Terminal } from "lucide-react";

const RegisterCard = () => {
    const { formData, success, error, isLoading, handleChange, handleRegister } =
    UseRegister();
    return (
        <div>
            {success && (
        <Alert>
          <Terminal className="w-4 h-4" />
          <AlertTitle>Register Success</AlertTitle>
          <AlertDescription>Register Success</AlertDescription>
        </Alert>
      )}
      {error && (
        <Alert variant="destructive">
          <Terminal className="w-4 h-4" />
          <AlertTitle>Error occurred</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
            <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Create a New Account, Fill out the form below to register for
                our application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter>
            <Button
                className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
                onClick={handleRegister}
                disabled={isLoading}
              >
                {isLoading ? "Looading ..." : "Register"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        </div>
    );
}

export default RegisterCard;

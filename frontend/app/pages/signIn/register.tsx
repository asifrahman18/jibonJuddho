import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const RegisterPage = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="ConfPassword">Confirm Password</Label>
              <Input
                id="ConfPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </form>
        <Separator className="my-6" />
        <CardTitle>Or Register with</CardTitle>
        <div className="flex justify-between my-6">
          <Button className="w-full" variant={"outline"}>Google</Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">Register</Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;

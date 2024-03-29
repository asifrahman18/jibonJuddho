import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
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
import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfPassword, setConfPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { register, isLoading } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast()

  const handleRegister = async () => {


    if (ConfPassword === password) {
      setLoading(true);
      await register(firstName, lastName, username, password);
      setLoading(false);
    } else {
      toast({
        title: "Passwords do not match ",
        description: "Please try again",
        variant: 'destructive',
      })
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="ConfPassword">Confirm Password</Label>
              <Input
                id="ConfPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
        <Separator className="my-6" />
        <CardTitle>Or Register with</CardTitle>
        <div className="flex justify-between my-6">
          <Button className="w-full" variant={"outline"} disabled={true}>
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          className="w-full"
          onClick={handleRegister}
          disabled={loading || isLoading}
        >
          {loading || isLoading ? "Please Wait..." : "Register"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;
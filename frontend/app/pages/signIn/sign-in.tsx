import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useToast } from "@/components/ui/use-toast";

import { AuthContext } from "../../../context/AuthContext";

const SignInPage = () => {
  const { toast } = useToast();

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, isAuthenticated, login } = useContext(AuthContext);


  const handleLogin = async () => {
    login(username, password)
  };


  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
        <Separator className="my-6" />
        <CardTitle>Or Sign In with</CardTitle>
        <div className="flex justify-between my-6">
          <Button className="w-full" variant={"outline"}>
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleLogin}>
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignInPage;

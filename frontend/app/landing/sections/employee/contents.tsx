import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contents = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-extrabold md:text-4xl text-center">
          Elevate Your Career With Us
        </h1>
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="hover:border-primary">
            <CardHeader className="text-xl font-extrabold">
              Diverse Opportunities
            </CardHeader>
            <CardContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus nulla eum debitis dolorum repellendus assumenda
              similique inventore dolor itaque? Quasi vel non dolorem fugiat
              iusto recusandae dolorum eaque, ex dicta?
            </CardContent>
          </Card>
          <Card className="hover:border-primary">
            <CardHeader className="text-xl font-extrabold">
              Diverse Opportunities
            </CardHeader>
            <CardContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus nulla eum debitis dolorum repellendus assumenda
              similique inventore dolor itaque? Quasi vel non dolorem fugiat
              iusto recusandae dolorum eaque, ex dicta?
            </CardContent>
          </Card>
          <Card className="hover:border-primary">
            <CardHeader className="text-xl font-extrabold">
              Diverse Opportunities
            </CardHeader>
            <CardContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus nulla eum debitis dolorum repellendus assumenda
              similique inventore dolor itaque? Quasi vel non dolorem fugiat
              iusto recusandae dolorum eaque, ex dicta?
            </CardContent>
          </Card>
          <Card className="hover:border-primary">
            <CardHeader className="text-xl font-extrabold">
              Diverse Opportunities
            </CardHeader>
            <CardContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus nulla eum debitis dolorum repellendus assumenda
              similique inventore dolor itaque? Quasi vel non dolorem fugiat
              iusto recusandae dolorum eaque, ex dicta?
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contents;

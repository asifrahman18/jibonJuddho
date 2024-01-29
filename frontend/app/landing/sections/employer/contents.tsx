import {
  Card,
  CardContent
} from "@/components/ui/card";

const Contents = () => {
  return (
    <div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
      <Card>
        <CardContent className="p-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus, pariatur veritatis numquam possimus corporis blanditiis
          nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at
          ut aliquam soluta animi?
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus, pariatur veritatis numquam possimus corporis blanditiis
          nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at
          ut aliquam soluta animi?
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus, pariatur veritatis numquam possimus corporis blanditiis
          nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at
          ut aliquam soluta animi?
        </CardContent>
      </Card>
    </div>
  );
};

export default Contents;

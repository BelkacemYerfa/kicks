import { Link } from "react-router-dom";
import { Card, CardTitle, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";

export const ProductCard = ({ id, name, price, images, className }) => {
  return (
    <Card
      className={cn(
        "p-1 max-w-sm space-y-3 bg-transparent border-0 shadow-none",
        className
      )}
    >
      <CardContent className="flex items-center justify-center p-2 bg-white rounded-xl">
        <img
          src={images}
          alt={name}
          className="overflow-hidden w-full h-52 rounded-lg object-cover"
        />
      </CardContent>
      <CardTitle className="text-xl">{name}</CardTitle>
      <Link to={`/products/${id}`} className={cn("w-full", buttonVariants())}>
        View Product - ${price}
      </Link>
    </Card>
  );
};

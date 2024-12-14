import { Link } from "react-router-dom";
import { Card, CardTitle, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";

export const ProductCard = ({ id, name, price, images, className }) => {
  return (
    <Card className={cn("card", className)}>
      <CardContent className="card-content">
        <img src={images} alt={name} className="card-image" />
      </CardContent>
      <CardTitle className="text-xl">{name}</CardTitle>
      <Link to={`/products/${id}`} className={cn("w-full", buttonVariants())}>
        View Product - ${price}
      </Link>
    </Card>
  );
};

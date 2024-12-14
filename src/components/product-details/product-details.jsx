import { useLoaderData } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export const ProductDetails = () => {
  const { name, price, description, images } = useLoaderData();
  return (
    <div className="main-product-wrapper">
      <div className="images-container">
        {Array.from({ length: 4 }).map((_, index) => {
          const roundSide = function () {
            if (index === 0) {
              return "rounded-tl-[2.5rem]";
            }
            if (index === 1) {
              return "rounded-tr-[2.5rem]";
            }
            if (index === 2) {
              return "rounded-bl-[2.5rem]";
            }
            if (index === 3) {
              return "rounded-br-[2.5rem]";
            }
          };
          return (
            <img
              key={index}
              src={images}
              className={cn("object-cover", roundSide())}
            />
          );
        })}
      </div>
      <div className="product-details">
        <h2 className="main-product-title">{name}</h2>
        <p className="main-product-price">${price}</p>
        <div className="buttons">
          <Button>Add to Cart</Button>
          <Button className="bg-blue-500">Buy it now</Button>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

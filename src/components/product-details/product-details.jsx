import { useLoaderData } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export const ProductDetails = () => {
  const { name, price, description, images } = useLoaderData();
  return (
    <div className="flex gap-4 mt-10">
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
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
      <div className="flex flex-col gap-4 max-w-md">
        <h2 className="text-5xl font-medium">{name}</h2>
        <p className="text-xl text-blue-500">${price}</p>
        <div className="flex flex-col w-full gap-1.5">
          <Button>Add to Cart</Button>
          <Button className="bg-blue-500">Buy it now</Button>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

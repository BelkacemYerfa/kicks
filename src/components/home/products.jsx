import { ChevronRight } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import { ProductCard } from "../cards/product-card";

export const Products = () => {
  const products = useLoaderData();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-medium">Products</h3>
        <Link
          to={"/products"}
          className={cn(
            "flex items-center justify-between",
            buttonVariants({
              variant: "secondary",
            })
          )}
        >
          <span className="uppercase">See All</span>
          <ChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-4 items-center gap-2 flex-wrap">
        {products.map((item, index) => {
          if (index < 4) {
            return <ProductCard key={item.id} {...item} />;
          }
        })}
      </div>
    </div>
  );
};

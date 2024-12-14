import { ChevronRight } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import { ProductCard } from "../cards/product-card";

export const Products = () => {
  const products = useLoaderData();
  return (
    <div className="space-y-4">
      <div className="products-wrapper">
        <h3 className="product-title">Products</h3>
        <Link
          to={"/products"}
          className={cn(
            "link-see-more",
            buttonVariants({
              variant: "secondary",
            })
          )}
        >
          <span className="uppercase">See All</span>
          <ChevronRight />
        </Link>
      </div>
      <div className="product-grid">
        {products.map((item, index) => {
          if (index < 4) {
            return <ProductCard key={item.id} {...item} />;
          }
        })}
      </div>
    </div>
  );
};

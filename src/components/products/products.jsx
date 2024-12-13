import {
  useLoaderData,
  Link as PaginationLink,
  useSearchParams,
} from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { ProductCard } from "../cards/product-card";
import { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";

const ProductPerPage = 12;

export const Products = () => {
  const products = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ProductPerPage);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
    setSearchParams({ page: currentPage });
  };

  const handlePrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    setSearchParams({ page: currentPage });
  };

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      const pageNum = Number(page);
      if (pageNum > totalPages || pageNum < 1) {
        setCurrentPage(1);
      } else {
        setCurrentPage(pageNum);
      }
    }
  }, [searchParams, totalPages]);

  return (
    <div className="mt-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-medium">Life Style Shoes</h2>
        <p>{products.length} items</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {products
          .slice(
            (currentPage - 1) * ProductPerPage,
            currentPage * ProductPerPage
          )
          .map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
      </div>
      <PaginatedProducts
        currentPage={currentPage}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

const PaginatedProducts = ({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
}) => {
  const paginationRange = useMemo(() => {
    const siblingCount = 1;
    const range = [];
    for (
      let i = Math.max(2, Number(currentPage) - siblingCount);
      i <= Math.min(totalPages - 1, Number(currentPage) + siblingCount);
      i++
    ) {
      range.push(i);
    }

    if (Number(currentPage) - siblingCount > 2) {
      range.unshift("...");
    }
    if (Number(currentPage) + siblingCount < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages !== 1) {
      range.push(totalPages);
    }

    return range;
  }, [totalPages, currentPage]);
  return (
    <Pagination className="mt-3 w-full">
      <PaginationContent className="">
        <PaginationItem className="mr-3">
          <PaginationPrevious
            href="#"
            onClick={handlePrevious}
            className="ring-1 ring-[#232321] !h-7 "
          />
        </PaginationItem>
        {paginationRange.map((item, index) => {
          if (item === "...") {
            return (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={index}>
              <PaginationLink
                to={`?page=${item}`}
                className={cn(
                  "outline-1 outline outline-[#232321] !h-7 !w-9 !rounded-lg mx-1 !p-0",
                  buttonVariants({
                    variant: item === currentPage ? "outline" : "ghost",
                  }),
                  {
                    "bg-[#232321] text-white": item === currentPage,
                  }
                )}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem className="ml-3">
          <PaginationNext
            to="#"
            onClick={handleNext}
            className="ring-1 ring-[#232321] !h-7 "
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

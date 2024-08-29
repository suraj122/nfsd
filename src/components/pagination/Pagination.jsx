import { useEffect, useState } from "react";
import Product from "./Product";

const LIMIT = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,thumbnail,description`
    );
    const json = await data.json();
    setProducts(json.products);
    setPage(Math.ceil(json.total / 10));
  };

  return (
    <div className="p-24">
      <div className="grid grid-cols-4 container mx-auto gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-1 mt-6">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="cursor-pointer"
          >
            Prev
          </span>
        )}
        {[...Array(page).keys()].map((pN) => (
          <span
            onClick={() => setCurrentPage(pN)}
            className={
              "border p-2 cursor-pointer " +
              (currentPage === pN && "font-bold bg-blue-200")
            }
            key={pN}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < page - 1 && (
          <span
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="cursor-pointer"
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;

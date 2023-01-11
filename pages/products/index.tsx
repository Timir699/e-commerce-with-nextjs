import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "../../services/getProducts";
import { getResult } from "../../services/getResult";
import { ProductList, Product } from "../../types/productType";
import { GetServerSideProps } from "next";

const Products = ({ productData }: { productData: ProductList }) => {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<ProductList>([]);

  const sorting = (e: any) => {
    const sortedRes: ProductList = [...result];
    if (e.target.value === "lowest") {
      const lowToHigh = sortedRes.sort(
        (a: Product, b: Product) => a.price - b.price
      );
      setResult(lowToHigh);
    } else if (e.target.value === "highest") {
      const highToLow = sortedRes.sort(
        (a: Product, b: Product) => b.price - a.price
      );
      setResult(highToLow);
    } else if (e.target.value === "best") {
      setResult(productData);
    }
  };

  useEffect(() => {
    if (value.length > 0) {
      getResult(value, setResult);
    } else {
      setResult(productData);
    }
  }, [value]);

  return (
    <>
      <div className="flex justify-between container mx-auto">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-10"
          id="username"
          type="text"
          placeholder="Search Product by Product name"
        />
        <div className="mt-10">
          sort by
          <form action="#" className="border w-36">
            <select onClick={sorting} defaultValue="best" name="sort" id="sort">
              <option value="best">Best Match</option>
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(highest)</option>
            </select>
          </form>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-24 ">
            {result?.map((product: Product, index) => (
              <Link
                href={`/products/${product.id}`}
                key={index}
                className="group"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-4 border border-slate-500 p-8">
                  <Image
                    src={product.image1}
                    alt="Picture of product"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    loading="lazy"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">
                    <b>Product Name :</b> {product.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    Price : ${product.price}
                  </p>
                </div>
              </Link>
              // </div>
            ))}
          </div>
        </div>
        {result?.length === 0 ? <h2>Product not found</h2> : null}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const loadedProducts: ProductList = await getAllProducts();

  return {
    props: {
      productData: loadedProducts,
    },
  };
};

export default Products;

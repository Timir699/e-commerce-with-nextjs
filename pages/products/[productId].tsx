import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllProducts } from "../../services/getProducts";
import { getProduct } from "../../services/productDetails";
import Image from "next/image";
import useCartProducts from "../../hooks/useCartProducts";

export const getStaticProps = async (context: any) => {
  const { params } = context;

  const product = await getProduct(params.productId);

  return {
    props: {
      product: product,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const loadedProducts = await getAllProducts();

  const paths = loadedProducts.map((product) => {
    return {
      params: {
        productId: `${product.id}`,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

const ProductDetails = ({ product }: any) => {
  const { carts, cartDispatch } = useCartProducts();

  const router = useRouter();
  const [review, setReview] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setReview("");
  };
  const onChangeHandler = (e: any) => {
    setReview(e.target.value);
  };
  const setItem = () => {
    localStorage.setItem("cart", JSON.stringify(carts));
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row mt-20">
        <div className="w-1/2 flex justify-around ml-20">
          <Image
            src={product?.image1}
            alt="Picture of product"
            width={200}
            height={200}
            className="object-cover object-center group-hover:opacity-75"
            loading="lazy"
          />
          <Image
            src={product?.image1}
            alt="Picture of product"
            width={200}
            height={200}
            className="object-cover object-center group-hover:opacity-75"
            loading="lazy"
          />
        </div>
        <div className="w-1/2 mt-20 ml-20">
          <h3>
            <b>Product name : </b>
            {product?.title}
          </h3>
          <h3>
            <b>Product Detials : </b>
            {product?.description}
          </h3>
          <h3>
            <b>Product Price :</b> $ {product?.price}
          </h3>
          {carts?.find((p: any) => p.id === product.id) ? (
            <button
              onClick={() => {
                cartDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                });
                setItem();
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => {
                cartDispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
                setItem();
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>

      <div className="mt-20">
        Reviews
        <form onSubmit={handleSubmit}>
          <label> Write a review </label>
          <input
            value={review}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="blogDescription"
            onChange={onChangeHandler}
          />
          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Leave a Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;

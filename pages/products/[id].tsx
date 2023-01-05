import React, { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { getAllProducts } from "../../services/getProducts";
import { getProduct } from "../../services/productDetails";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const loadedProducts = await getAllProducts();

  const paths = loadedProducts.map((product: any) => {
    return {
      params: { id: product.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const product = await getProduct(id);

  return {
    props: { product: product },
    revalidate: 10,
  };
};

const ProductDetails = ({ product }: any) => {
  console.log(product);

  const router = useRouter();
  // console.log(router.query.id);

  const [review, setReview] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(review);
    setReview("");

    // setContactInfo({ name: "", email: "", phonenumber: "" });
  };
  const onChangeHandler = (e: any) => {
    console.log(e.target.value);
    setReview(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className=" flex mt-20">
        <div className="w-1/2 flex justify-around">
          <Image
            src={product.image1}
            alt="Picture of product"
            width={200}
            height={200}
            className="object-cover object-center group-hover:opacity-75"
            loading="lazy"
          />
          <Image
            src={product.image1}
            alt="Picture of product"
            width={200}
            height={200}
            className="object-cover object-center group-hover:opacity-75"
            loading="lazy"
          />
        </div>
        <div className="w-1/2 mt-20">
          <h3>
            <b>Product name : </b>
            {product.title}
          </h3>
          <h3>
            <b>Product Detials : </b>
            {product.description}
          </h3>
          <h3>
            <b>Product Price :</b> $ {product.price}
          </h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to cart
          </button>
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

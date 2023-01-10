import { Product, ProductList } from "../types/productType";

export async function getAllProducts() {
  const response = await fetch(
    "https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com/products.json"
  );
  const responseData = await response.json();

  const loadedProducts: ProductList = [];

  for (const key in responseData) {
    loadedProducts.push({
      id: responseData[key]?.id,
      title: responseData[key]?.title,
      description: responseData[key]?.description,
      price: responseData[key]?.price,
      image1: responseData[key]?.image1,
      image2: responseData[key]?.image2,
      // category: responseData[key]?.category,
    });
  }

  return loadedProducts;
}

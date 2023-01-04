export const productReducer = (products: any, action: any) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_LIST": {
      return action.payload.productList;
    }
    case "SEARCH_PRODUCTS": {
      const matchedProducts = products?.filter((product: any) =>
        product.title
          .toLowerCase()
          .includes(action.payload.keyword.toLowerCase())
      );

      return matchedProducts;
    }
  }

  return products;
};

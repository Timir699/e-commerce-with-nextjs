export const getOrders = async () => {
  const response = await fetch(
    "https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com/orders.json"
  );
  const data = await response.json();

  const loadedOrders = [];
  for (const key in data) {
    loadedOrders.push({
      id: key.toString(),
      deliveryLocation: data[key]?.deliveryLocation,
      locationCoordinates: data[key]?.locationCoordinates,
      orderedProducts: data[key]?.orderedProducts,
      paymentInfromation: data[key]?.paymentInfromation,
      paymentMethod: data[key]?.paymentMethod,
      totalAmount: data[key]?.totalAmount,
      userInfo: data[key]?.userInfo,
    });
  }
  return loadedOrders;
};

export const getOrdersWithReactQuery = async () => {
  const response = await fetch(
    "https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com/orders.json"
  );
  const data = await response.json();

  const loadedOrders = [];
  for (const key in data) {
    loadedOrders.push({
      id: key.toString(),
      deliveryLocation: data[key]?.deliveryLocation,
      locationCoordinates: data[key]?.locationCoordinates,
      orderedProducts: data[key]?.orderedProducts,
      paymentInfromation: data[key]?.paymentInfromation,
      paymentMethod: data[key]?.paymentMethod,
      totalAmount: data[key]?.totalAmount,
      userInfo: data[key]?.userInfo,
    });
  }
  return loadedOrders;
};
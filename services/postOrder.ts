export const postOrder = async (orderSummary: any) => {
  const response = await fetch(
    "https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com/orders.json",
    {
      method: "POST",
      body: JSON.stringify(orderSummary),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
};

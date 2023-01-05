export async function getProduct(id: any) {
  const res = await fetch(
    `https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com/products/${id}.json`
  );

  const data = await res.json();
  console.log(data);

  return data;
}

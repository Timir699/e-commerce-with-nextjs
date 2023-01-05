// export const getResult = async () => {
//   const response = await fetch(
//     "https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com/products.json"
//   );
//   const responseData = await response.json();

//   return responseData;
// };

export const getResult = async (value: any, setResult: any) => {
  const response = await fetch(
    "https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com/products.json"
  );
  const responseData = await response.json();
  let searchQuery = value.toLowerCase();
  setResult([]);
  for (const key in responseData) {
    let res = responseData[key]?.title.toLowerCase();
    if (res.includes(searchQuery)) {
      setResult((prevResult: any) => {
        return [...prevResult, responseData[key]];
      });
    }
  }
};

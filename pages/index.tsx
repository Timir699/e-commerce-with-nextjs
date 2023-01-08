import Head from "next/head";
import Products from "./products";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAllProducts } from "../services/getProducts";

export default function App() {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/products");
  // }, [router]);

  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Products />
      </main>
    </div>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./../components/Layout";
import ProductContextProvider from "../contexts/ProductContextProvider";

// import "../node_modules/bootstrap/dist/css/bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProductContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductContextProvider>
    </>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./../components/Layout";
import AuthContextProvider from "../contexts/AuthContextProvider";
import CartContextProvider from "../contexts/CartContextProvider";

// import "../node_modules/bootstrap/dist/css/bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartContextProvider>
        <AuthContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
      </CartContextProvider>
    </>
  );
}

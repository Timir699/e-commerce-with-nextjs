import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./../components/Layout";
import AuthContextProvider from "../contexts/AuthContextProvider";
import CartContextProvider from "../contexts/CartContextProvider";
import OrderSummaryContextProvider from "../contexts/OrderSummaryContextProvider";
import UserInfoContextProvider from "../contexts/UserInfoContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserInfoContextProvider>
          <OrderSummaryContextProvider>
            <CartContextProvider>
              <AuthContextProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AuthContextProvider>
            </CartContextProvider>
          </OrderSummaryContextProvider>
        </UserInfoContextProvider>
      </QueryClientProvider>
    </>
  );
}

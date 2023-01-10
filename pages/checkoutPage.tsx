import CartSummary from "../components/cart/CartSummary";
import ShippingInfo from "../components/checkout/ShippingInfo";

const CheckoutPage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div
          className="flex lg:flex-row md:flex-row flex-col justify-around"
          id="cart"
        >
          <ShippingInfo />
          <CartSummary isCheckout={true} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

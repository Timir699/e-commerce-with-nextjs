import { cart } from "./cartType";
import { user } from "./userInfo";

export type orderSummary = {
  deliveryLocation: string;
  locationCoordinates?: any;
  orderedProducts: cart;
  paymentInfromation: string;
  paymentMethod: string;
  totalAmount: number | null;
  userInfo: user | null;
};

export interface order extends orderSummary {
  id: string;
}

export type orders = order[];

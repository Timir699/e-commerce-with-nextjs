import { Product } from "./productType";
import { user } from "./userInfo";

export type finalOrderSummaryType = {
  deliveryLocation: string;
  orderedProducts: Product[];
  paymentInfromation: string;
  paymentMethod: string;
  totalAmount: number;
  userInfo: user;
  userEmail?: string;
};

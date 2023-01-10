export type cartProduct = {
  category: string;
  description: string;
  id: string;
  image1: string;
  image2: string;
  price: number;
  qty: number;
  title: string;
};

export type cart = cartProduct[];

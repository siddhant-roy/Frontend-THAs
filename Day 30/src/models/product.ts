export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  qty: number;
}

export interface stateProps {
  products: Item[];
  currentProduct: Item | null;
}
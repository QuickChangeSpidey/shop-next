export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface Props {
  params: Promise<{ id: string }>;
}

export interface ProductProp {
  productName: string;
  price: number;
}

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
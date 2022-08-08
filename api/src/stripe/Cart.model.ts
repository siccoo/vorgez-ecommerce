interface CartItem {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  __id: string;
  _v: number;
}

export type Cart = CartItem[];

export type Product = {
  id: number;
  src: string;
  alt: string;
  name: string;
  price: string;
}

export type BasketItem = {
  name: string;
  quantity: number;
  id?: number;
};

export type Order = {
  userName: string;
  cart: Array<BasketItem>;
};

export type Form = {
  userName: string;
  order: BasketItem[];
}

export type Nullable<T> = T | null;

export type FormKeys = 'name' | 'quantity';

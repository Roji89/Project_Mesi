import { Product } from './product.model';

export type CartItem = {
    product: Product;
    quantity: number;
    totalPrice?: number;
}

export interface Cart {
    items: CartItem[];
    totalPrice: number;
}
import { Product } from './product.model';

export type CartItem = {
    product: Product;
    quantity: number;
    totalPrice?: number;
}

export class Cart {

    private _items: CartItem[];
    private _totalPrice: number;

    constructor(items: CartItem[], totalPrice: number) {
        this._items = items;
        this._totalPrice = totalPrice;
    }

    get items(): CartItem[] {
        return this._items;
    }
    
    set name(value: CartItem[]) {
        this._items = value;
    }

    get totalPrice(): number {
        return this._totalPrice;
    }
    
    set totalPrice(value: number) {
        this._totalPrice = value;
    }
}
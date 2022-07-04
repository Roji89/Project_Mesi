import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {items: [], totalPrice: 0};

  constructor() { 
  }

  getCart(): Cart {
    return this.cart;
  }

  addToCart(product: Product, quantity: number) {

    const productTotalPrice = product.price * quantity

    if (this.cart.items.filter(item => item.product._id === product._id).length !== 0) {
      this.cart.items.findIndex(item => {
        if (item.product._id === product._id) {
          item.quantity++;
          item.totalPrice = product.price * item.quantity
      }});
    } else {
      this.cart.items.push({
        product: product,
        quantity: quantity,
        totalPrice: productTotalPrice
      })
    }
    
    this.cart.totalPrice += productTotalPrice
  }

  updateCart(newCart: Cart) {
    this.cart = newCart;
  }
}

import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // TODO : remove when backend is developed
  cart: Cart = new Cart(
    [
      {
        product: {
          id: 0,
          name: "starbucks",
          price: 20,
          image: "assets/images/1.jpg"
        },
        quantity: 1
      },
      {
        product: {
          id: 1,
          name: "Costa Coffee",
          price: 10,
          image: "assets/images/2.jpg"
        },
        quantity: 2
        
      },
      {
        product: {
          id: 2,
          name: "starbucks",
          price: 22,
          image: "assets/images/3.jpg"
        },
        quantity: 1
      }
    ],
    100  
  )

  constructor() { 
  }

  getCartProducts(): Cart {
    return this.cart;
  }
}

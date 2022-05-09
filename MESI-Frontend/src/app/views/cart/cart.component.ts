import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Cart, CartItem } from '../../models/cart.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  BASE_URL: string = environment.API_URL
  cart!: Cart;
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  onChangeQuantity(item: CartItem, event: Event) {

    // We have to cast the event.target as an HTMLInputElement, 
    // otherwise TS throws an error
    let newQuantity = parseInt((event.target as HTMLInputElement).value);

    const newProductTotalPrice = item.product.price * newQuantity

    // Update cart total price
    if (item.quantity > newQuantity) {
      this.cart.totalPrice -= +item.product.price;
    } else {
      this.cart.totalPrice += +item.product.price;
    }

    // Update cart item
    this.cart.items.map((cartItem) => {
      if (cartItem.product._id === item.product._id) {
        cartItem.quantity = newQuantity;
        cartItem.totalPrice = newProductTotalPrice
      }
    })

    // Send update to cart service
    this.cartService.updateCart(this.cart)
  }
}

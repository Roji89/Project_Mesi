import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Cart} from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = new Cart([], 0);
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartProducts();
  }
}

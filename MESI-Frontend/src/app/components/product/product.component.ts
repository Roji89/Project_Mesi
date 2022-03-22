import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products/product.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  product?: Product;
  addedToCart: boolean = false;
  quantity: number = 1;
  addToCartForm = this.formBuilder.group({
    quantity: 1
  })

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.productService
      .getProduct(id)
      .subscribe((product: Product) => (this.product = product));
  }

  onSubmit() {
    const productQuantity = parseInt(this.addToCartForm.value["quantity"])
    this.quantity = productQuantity;
    this.cartService.addToCart(this.product!, productQuantity);
    this.addedToCart = true;
    setTimeout(() => {
      this.addedToCart = false
    }, 2000);
  }
}

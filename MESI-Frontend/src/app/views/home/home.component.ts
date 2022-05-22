import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.productList().subscribe({
      next: (data: any) => {
        this.products = data.data;
      },
      error: (e) => console.log(e),
    });
  }
}
export class NgbdCarouselBasic {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

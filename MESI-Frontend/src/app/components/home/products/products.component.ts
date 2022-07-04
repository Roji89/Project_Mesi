import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  BASE_URL: string = environment.API_URL;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts() {
    this.productService.productList()
    .subscribe({
      next: (data: any) => {
        this.products = data.data
      },
      error: (e) => console.log(e)})
    }
}

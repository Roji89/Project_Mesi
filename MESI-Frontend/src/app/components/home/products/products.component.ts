import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  BASE_URL: string = environment.API_URL;
  @Input() products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}

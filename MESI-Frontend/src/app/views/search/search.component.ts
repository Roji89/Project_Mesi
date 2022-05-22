import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products/product.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { QueryParams } from '../../types/QueryParams';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  query: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSearchProducts();
  }

  getSearchProducts() {
    this.query = (this.route.snapshot.queryParams as QueryParams).q;
    this.productService.getProductsBySearch(this.query).subscribe({
      next: (data: any) => {
        this.products = data.result;
        console.log(this.products)
        console.log(this.query)
      },
      error: (e) => console.log(e),
    });
  }
}

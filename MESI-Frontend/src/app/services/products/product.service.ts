import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const PRODUCTS_API = 'http://localhost:3000/products/';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiProducts: string = 'http://localhost:3000/products/';

  constructor(public http: HttpClient) {}

  productList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiProducts);
  }

  get(id: number): Observable<Product> {
    return this.http.get(`${this.apiProducts}${id}`);
  }
}

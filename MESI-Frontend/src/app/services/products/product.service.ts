import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private baseUrl: string = environment.API_URL + "product/"

  constructor(public http: HttpClient) {}

  productList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + id);
  }

  getProductsBySearch(search: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'search/' + search);
  }
}

import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private baseUrl: string = environment.API_URL + "product"
  private addUrl: string = this.baseUrl + '/add';
  private editUrl: string = this.baseUrl + '/:productId';
  product: Product[] = [];

  constructor(public http: HttpClient) { }

  productList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  /**
   * 
   * @param product 
   * @returns 
   */
  addProduct(product: Product) {
    return this.http.post(this.addUrl, {
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      ProductCode: product.ProductCode,
    })
  }

}

import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private baseUrl: string = environment.API_URL + "product"
  private addUrl: string = this.baseUrl + '/add';
  private editUrl: string = this.baseUrl + '/:productId';
  products: Product[] = [];
  private _id: string;

  constructor(public http: HttpClient, private router: Router
  ) {
    this._id = ''
  }

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
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  /**
    *
    * @param productId
    * @returns
    */
  getProductById(product: Product): Observable<any> {
    console.log(product._id)

    return this.http.get(this.baseUrl + '/' + product._id);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.baseUrl + '/' + product._id, product);

  }
  deleteProduct(_id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + _id);

  }

}

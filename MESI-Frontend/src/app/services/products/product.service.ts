import { Product } from 'src/app/models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private baseUrl: string = environment.API_URL + "product"
  private addUrl: string = this.baseUrl + '/add';


  products: Product[] = [];
  private _id: string;

  constructor(public http: HttpClient, private router: Router, private authService: AuthService
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
    const headers = new HttpHeaders({ 'x-access-token': this.authService.token });

    return this.http.post(this.addUrl, {
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      ProductCode: product.ProductCode,
    }, { headers })
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
    return this.http.get(this.baseUrl + '/' + product._id);
  }

  updateProduct(product: Product): Observable<any> {
    const headers = new HttpHeaders({ 'x-access-token': this.authService.token });
    return this.http.put(this.baseUrl + '/' + product._id, product, { headers });

  }
  deleteProduct(_id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + _id);

  }

}

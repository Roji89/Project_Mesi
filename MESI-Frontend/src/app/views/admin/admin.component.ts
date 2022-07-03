import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  BASE_URL: string = environment.API_URL;

  products: Product[] = [];


  constructor(private productService: ProductService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getUserRole();
  }

  getProducts() {
    this.productService.productList()
      .subscribe({
        next: (data: any) => {
          this.products = data.data
        },
        error: (e) => console.log(e)
      })
  }

  getUserRole(): boolean {
    if (this.authService.isAdmin()) {
      return true
    }
    else return false;
  }

  deleteProduct() {

  }
}

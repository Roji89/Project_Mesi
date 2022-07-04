import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/models/product.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm = this.formBuilder.group({
    name: '',
    price: 0,
    description: '',
    ProductCode: '',
  });
  error: string = 'error';

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router, private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getUserRole();
    this.onAddProduct();
  }


  showAlert(message: string): void {
    this.error = message
  }


  onAddProduct(): void {

    let product: Product = {
      _id: '',
      name: this.addProductForm.value['name'],
      price: this.addProductForm.value['price'],
      description: this.addProductForm.value['description'],
      ProductCode: this.addProductForm.value['ProductCode'],
      image: '',
      seller: ''
    }
    this.productService.addProduct(product).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: (e) => this.showAlert(e.error),
    })
  }

  getUserRole(): boolean {
    if (this.authService.isAdmin()) {
      return true
    }
    else return false;
  }
}

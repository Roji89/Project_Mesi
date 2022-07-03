import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/models/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  // product!: Product;
  message: string = '';

  editProductForm: FormGroup = this.formBuilder.group({
    name: '',
    price: 0,
    description: '',
    ProductCode: '',
  })

  product: Product = {
    _id: '',
    name: '',
    price: 0,
    description: '',
    ProductCode: '',
    image: '',
    seller: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProductDetail();
    this.onEditProduct();
  }

  getUserRole(): boolean {
    if (this.authService.isAdmin()) {
      return true
    }
    else return false;
  }
  showAlert(message: string): void {
    this.message = message
    setTimeout(() => this.message = '', 3000);
  }

  getProductDetail(): void {
    const id = this.route.snapshot.params['_id'];

    this.productService
      .getProductById({
        _id: this.productService.id,
        name: '',
        // name: this.productService.name,
        price: 0,
        description: '',
        image: '',
        seller: '',
        ProductCode: '',
      })
      .subscribe({
        next: (product) => {
          this.editProductForm = this.formBuilder.group({
            name: product.name,
            price: product.price,
            description: product.description,
            ProductCode: product.ProductCode
          })
        }

      })
  }

  onEditProduct() {
    let product: Product = {
      _id: this.productService.id,
      name: this.editProductForm.value['name'],
      price: this.editProductForm.value['price'],
      description: this.editProductForm.value['description'],
      ProductCode: this.editProductForm.value['ProductCode'],
      image: '',
      seller: ''
    }
    this.productService.updateProduct(product).subscribe({
      next: (data) => {
        this.editProductForm = this.formBuilder.group({
          name: data.name,
          price: data.price,
          description: data.description,
          ProductCode: data.ProductCode
        });
        this.router.navigate(['/admin'])
      },
      error: (e) => this.showAlert(e.error),
    })
  }

}

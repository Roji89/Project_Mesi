import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onAddProduct(): void {
    let product: Product = {
      _id: '',
      name: '',
      price: 0,
      description: '',
      ProductCode: '',
      image: '',
      seller: ''
    }
    this.productService.addProduct(product).subscribe({
      next: () => this.router.navigate(['/admin'])
    })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  id!: number;
  name!: string;
  price!: number;
  description!: string;
  image!: string;
  seller!: string;

  constructor() {}

  ngOnInit(): void {}
}

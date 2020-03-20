import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Data} from '../MockData';
import { Product } from '../Product';

import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];

  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    this.getProducts();
  }
 products = Data;
selected : Product;
showDetail(product){
  this.selected = product;
}
  getProducts(){
    this.products = this.productService.getProducts();
  }
  removeItem(id){
    this.products = this.productService.removeProduct(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Product } from '../shared/models/product';
import { ProductType } from '../shared/models/productType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products:Product[];
  brands:Brand[];
  types:ProductType[];

  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    return this.shopService.getProducts().subscribe(response=>{
      this.products = response.data;
      console.log(this.products);
    }, err=>{
      console.log(err);
    })
  }

  getBrands() {
    return this.shopService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }

  
  getTypes() {
    return this.shopService.getTypes().subscribe(response=>{
      this.types = response.data;
    })
  }


}

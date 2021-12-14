import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  dataLoaded = false;

  currentBrand: Brand;
  currentType: ProductType;

  constructor(private shopService:ShopService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
    // this.activatedRoute.params.subscribe(params=>{
    //   if(params["brandId"]) {
    //     this.getProductsByBrand(params["brandId"])
    //   } else if(params["typeId"]) {
    //     this.getProductsByType(params["typeId"])
    //   }
    //   else {
    //     this.getProducts();
    //   }
    // })
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

  setCurrentBrand(brand:Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getAllBrandClass() {
    if (!this.currentBrand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  setCurrentType(type: ProductType) {
    this.currentType = type;
  }

  getCurrentTypeClass(type:ProductType) {
    if (type == this.currentType) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getAllTypeClass() {
    if (!this.currentType) {
      return "list-group-item active"
    } else{
      return "list-group-item"
    }
  }

  getProductsByBrand(brandId:number) {
    this.shopService.getProductsByBrand(brandId).subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true;
    })
  }

  getProductsByType(typeId:number) {
    this.shopService.getProductsByType(typeId).subscribe(response=>{
      this.types = response.data
      this.dataLoaded = true;
    })
  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../shared/models/brand';
import { ListResponseModel } from '../shared/models/listResponseModel';
import { Product } from '../shared/models/product';
import { ProductType } from '../shared/models/productType';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

baseUrl = "https://localhost:44310/api";

  constructor(private http:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.baseUrl + "/products/getproductdetails");
  }

  getBrands():Observable<ListResponseModel<Brand>> {
    return this.http.get<ListResponseModel<Brand>>(this.baseUrl + "/productbrands/brands");
  }

  getTypes() : Observable<ListResponseModel<ProductType>> {
    return this.http.get<ListResponseModel<ProductType>>(this.baseUrl + "/producttypes/types");
  }

  getProductsByBrand(brandId:number) : Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.baseUrl + '/products/getproductsbybrandid?brandId' + brandId);
  }

  getProductsByType(typeId:number) : Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.baseUrl + '/products/getproductsbytypeid?typeId' + typeId);
  }
}

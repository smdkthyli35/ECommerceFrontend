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

  private baseUrl:string = "https://localhost:44310/api";

  constructor(private http:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.baseUrl + "/products/getproductdetails");
  }

  getProductsDetails(productId:number) {
    return this.http.get<Product>(this.baseUrl + '/products/getproductdetailsid?productId' + productId);
  }

  getBrands():Observable<ListResponseModel<Brand>> {
    return this.http.get<ListResponseModel<Brand>>(this.baseUrl + "/productbrands/brands");
  }

  getTypes() : Observable<ListResponseModel<ProductType>> {
    return this.http.get<ListResponseModel<ProductType>>(this.baseUrl + "/producttypes/types");
  }

  getProductsByBrand(productBrandId:number) : Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.baseUrl + '/products/getproductsbybrandid?productBrandId' + productBrandId);
  }

  getProductsByType(productTypeId:number) : Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.baseUrl + '/products/getproductsbytypeid?productTypeId' + productTypeId);
  }
}

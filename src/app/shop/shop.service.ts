import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../shared/models/listResponseModel';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

baseUrl = "https://localhost:44310/api";

  constructor(private http:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.baseUrl + "/products/getproductdetails");
  }
}

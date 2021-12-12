import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  products:any[];

  constructor(private http:HttpClient) {}

  ngOnInit():void{
    this.http.get('https://localhost:44310/api/products/getproductdetails').subscribe((response:any)=>{
      this.products = response.data;
    },error=>{
      console.log(error)
    });
  }
}

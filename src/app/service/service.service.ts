import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  cart:Product[]=[];
  counter:number=0
  constructor(private http:HttpClient) { }
  getProducts(){
   return this.http.get("http://localhost:4201/products")
  }
}

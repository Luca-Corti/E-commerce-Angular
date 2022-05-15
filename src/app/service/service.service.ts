import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //array carrello e contatore prodotti nel carrello
  cart:Product[]=[];
  counter:number=0
  //variabile per il submit del form
  submitted:boolean=false
  constructor(private http:HttpClient) { }
  //funzione che mi fa la chiamata get di tutti i prodotti
  getProducts(){
   return this.http.get("http://localhost:4201/products")
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../interface/product';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  sub!:Subscription
  id!:number
  product!:any;
  ready:boolean=false;
  addToCart(){
    this.srv.cart.push(this.product)
    console.log('PRODOTTO AGGIUNTO AL CARRELLO', this.srv.cart)
    this.srv.counter++
  }
  constructor(private router:ActivatedRoute, private srv:ServiceService, private https:HttpClient) {
      this.sub = this.router.params.subscribe((params:Params)=>{
      this.id = +params["id"]
      console.log("id è ",this.id)
    })
  }

  ngOnInit(): void {

     fetch("http://localhost:4201/products/"+this.id, {
       method: "GET"
     }).then(function(response) {
       return response.json();
     }).then((data) => {
       this.product = data
       console.log("prodotto:",this.product)
       this.ready=true;
     })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}

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
  // id del prodotto che mi passa la rotta e prodotto preso dal srv
  id!:number
  product!:any;
  //variabile caricamento pagina
  ready:boolean=false;
  //funzione che aggiunge il prodotto all'array carrello del srv, e aggiorna icona navbar
  addToCart(){
    this.srv.cart.push(this.product)
    console.log('PRODOTTO AGGIUNTO AL CARRELLO', this.srv.cart)
    this.srv.counter++

  }
  //nel constructor inietto dipendenze necessarie e mi faccio dare dalla rotta l'id
  constructor(private router:ActivatedRoute, private srv:ServiceService, private https:HttpClient) {
      this.sub = this.router.params.subscribe((params:Params)=>{
      this.id = +params["id"]
    })
  }

  ngOnInit(): void {
//Oninit faccio una chiamata per recuperare il singolo prodotto by id dal server e lo salvo nella mia variabile
     fetch("http://localhost:4201/products/"+this.id, {
       method: "GET"
     }).then(function(response) {
       return response.json();
     }).then((data) => {
       this.product = data
       this.ready=true;
     })
  }
//faccio unsubscribe dell'observable della rotta
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}

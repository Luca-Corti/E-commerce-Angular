import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/product';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  //recupero array carrello dal service, variabile total per il costo totale
  cart:Product[]=this.srv.cart
  total:number=0
  //funzione che mi calcola il totale sommando tutti i price dell'array carrello
  updateTotal(){
    this.total=this.cart.reduce<number>((acc,obj)=>{
    return +(acc + obj.price).toFixed(2);
  },0)
  }
  //funzione che rimuove prodotto dal cart e aggiorna il service e il total
  deleteFromCart(index:number){
    this.cart.splice(index, 1)
    this.srv.cart= this.cart
    this.srv.counter--
    this.updateTotal()
  }
  //redirect a homepage
  redirect(){
    this.router.navigate([''])
  }
  //inietto il service e il router
  constructor(private srv:ServiceService, private router:Router) { }
  //on init aggiorno il total
  ngOnInit(): void {
    this.updateTotal()
  }
}

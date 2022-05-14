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
  cart:Product[]=this.srv.cart
  total:number=0
  updateTotal(){
    this.total=this.cart.reduce<number>((acc,obj)=>{
    return acc + obj.price;
  },0)
  }
  deleteFromCart(index:number){
    this.cart.splice(index, 1)
    this.srv.cart= this.cart
    this.srv.counter--
    this.updateTotal()
  }
  redirect(){
    this.router.navigate([''])
  }
  constructor(private srv:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.updateTotal()
  }
}

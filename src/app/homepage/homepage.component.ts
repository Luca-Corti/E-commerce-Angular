import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../interface/product';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnDestroy {

  constructor(private srv:ServiceService) { }
  sub!:Subscription;
  products:any=[];
  ready:boolean=false
  getProducts(){
   this.sub = this.srv.getProducts().subscribe((response)=>{
      this.products=response
      this.ready=true
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnDestroy {

  constructor(private srv:ServiceService) { }
  sub!:Subscription;
  //array di prodotti
  products:any=[];
  //variabile per il caricamento della pagina
  ready:boolean=false
  //faccio il subscribe e salvo prodotti nell'array all' OnInit, modifico ready
  getProducts(){
   this.sub = this.srv.getProducts().subscribe((response)=>{
      this.products=response
      this.ready=true
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }
  //Alla distruzione del componente faccio unsubscribe(opzionale visto che http lo fa in automatico)
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}

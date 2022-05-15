import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(public srv:ServiceService) { }
  //mio oggetto di riferimento dei campi del form e dove salvo dati al submit
  model!:{
    "email":"",
    "nomeFatturazione":"",
    "indirizzo1":"",
    "indirizzo2":"",
    "citta":"",
    "provincia":"",
    "cap":"",
    "paymentMethod":"",
    "numeroCarta":""
  }
  // Campi del form con value,status, e tutti i metadati  saranno in questa variabile
  form!:FormGroup
  //variabile per estetica numero ordine
  random:number= Math.floor(Math.random() * 10000000);
  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl(null, [Validators.required , Validators.email]),
      "nomeFatturazione": new FormControl(null, Validators.required),
      "indirizzo1": new FormControl(null, Validators.required),
      "indirizzo2": new FormControl(null), //indirizzo2 non è required
      "citta": new FormControl( null, Validators.required),
      "provincia": new FormControl(null, Validators.required),
      "cap": new FormControl(null, Validators.required),
      "paymentMethod": new FormControl(null, Validators.required),
      "numeroCarta": new FormControl(null, Validators.required)
    })
  }
//al submit salvo i dati nel mio oggetto e resetto carrello
  onSubmit(){
    this.srv.submitted=true;
    this.model= this.form.value
    console.log("MODEL: ", this.model)
    //this.srv.post(this.model, this.srv.cart)  Con un metodo http.post() definito nel service posto i dati acquisto nel server
    this.srv.cart=[];
    this.srv.counter=0

  }
}

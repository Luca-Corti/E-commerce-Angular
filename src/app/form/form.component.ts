import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  submitted:boolean=false;

  constructor(private srv:ServiceService) { }
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
  form!:FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl(null, [Validators.required , Validators.email]),
      "nomeFatturazione": new FormControl(null, Validators.required),
      "indirizzo1": new FormControl(null, Validators.required),
      "indirizzo2": new FormControl(null),
      "citta": new FormControl( null, Validators.required),
      "provincia": new FormControl(null, Validators.required),
      "cap": new FormControl(null, Validators.required),
      "paymentMethod": new FormControl(null, Validators.required),
      "numeroCarta": new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    this.submitted=true;
    this.model= this.form.value
    console.log("MODEL: ", this.model)
    //this.srv.post(this.model, this.srv.cart)  Con un metodo http.post() definito nel service posto i dati acquisto nel server
    this.srv.cart=[];
    this.srv.counter=0

  }
}

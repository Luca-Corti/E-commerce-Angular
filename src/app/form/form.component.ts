import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  form!:FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl(null),
      "nome-fatturazione": new FormControl(null),
      "indirizzo1": new FormControl(null),
      "indirizzo2": new FormControl(null),
      "citta": new FormControl(null),
      "provincia": new FormControl(null),
      "cap": new FormControl(null),
      "payment-method": new FormControl(null),
      "numero-carta": new FormControl(null)
    })
  }
  @ViewChild ("f") formdata!:NgForm
  submit(){
    alert('acquisto completato')
    console.log(this.formdata)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forma:FormGroup;
  constructor() {
    this.forma = this.setValidation();
   }

  ngOnInit(): void {
  }

  setValidation(){
    return new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      genero: new FormControl(null),
      position: new FormControl(null),

    })
  }

  createEditProfile(event:any){

  }


}

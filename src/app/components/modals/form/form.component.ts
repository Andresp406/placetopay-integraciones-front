import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forma!:FormGroup;
  @Output() cerrarModal = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit(): void {
  }

  handleForm(event:any){

  }

  cerrar(event: boolean) {
    this.cerrarModal.emit(true);
  }

}

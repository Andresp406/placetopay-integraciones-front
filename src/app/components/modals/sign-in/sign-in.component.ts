import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  forma:FormGroup;
  @Input() user:any;
  @Output() cerrarModal = new EventEmitter<boolean>();

  
  constructor(
    private _auth:AuthService
  ) {
    this.forma = this.setValidation();
   }

  ngOnInit(): void {
  }

  cerrar(event: boolean) {
    this.cerrarModal.emit(true);
  }


  setValidation(){
    return new FormGroup({
      id: new FormControl(null),
      username : new FormControl(null),
      password : new FormControl(null)
    });
  }

  onLogin(){

  }



}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  forma : FormGroup;
  typeDocument: string []=[];
  id:number = 0;
  @Input() user:any;
  @Output() cerrarModal = new EventEmitter<boolean>();
  @Output() dataUser = new EventEmitter<any>();
  
  constructor(
    private _auth : AuthService,
    private toastr: ToastrService

  ) { 
    this.forma = this.setValidation();
    this.typeDocument = [
      'C.C',
      'C.E',
      'PAS',
      'P.E.P'
    ]
  }

  ngOnInit(): void {
   
    
  }
  
  cerrar(event: any) {
    this.cerrarModal.emit(true);
  }

  setValidation(){
    return new FormGroup({
      id: new FormControl(null),
      email :new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email]),
      usuario : new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[A-Za-z0-9]+$')]),
      nombre :new FormControl(null, [Validators.required,Validators.minLength(3),  Validators.maxLength(100)]),
      apellido: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      typeDocument: new FormControl(null, [Validators.required]),
      document: new FormControl(null, [Validators.required]),

    });
  }

  createEditProfile(event:any){

  }

}

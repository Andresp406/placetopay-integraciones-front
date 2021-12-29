import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { IDataRegister, IResponseRegister, IUserRegister } from '../../../interfaces/register';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  forma : FormGroup;
  type_document: string []=[];
  id:number = 0;
  @Input() user:any;
  @Output() cerrarModal = new EventEmitter<boolean>();
  @Output() dataUser = new EventEmitter<any>();
  
  constructor(
    private _auth : AuthService,
    private _toast: ToastrService

  ) { 
    this.forma = this.setValidation();
    this.type_document = [
      'C.C',
      'C.E',
      'PAS',
      'P.E.P'
    ]
  }

  ngOnInit(): void {
   
    
  }
  
  cerrar(event: boolean) {
    this.cerrarModal.emit(true);
  }

  setValidation(){
    return new FormGroup({
      email :new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern(environment.patternEmail)]),
      first_name :new FormControl(null, [Validators.required,Validators.minLength(3),  Validators.maxLength(100)]),
      last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      type_document: new FormControl(null, [Validators.required]),
      document: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      password_confirmation: new FormControl(null, [Validators.required])

    });
  }

  handleForm(){
    const data :IUserRegister = {
      email : this.forma.get('email')?.value,
      first_name : this.forma.get('first_name')?.value,
      last_name : this.forma.get('last_name')?.value,
      type_document : this.forma.get('type_document')?.value,
      document :this.forma.get('document')?.value,
      password :this.forma.get('password')?.value,
      password_confirmation :this.forma.get('password_confirmation')?.value,
    }
    this._auth.register(data).subscribe((resp:IResponseRegister) => {
      this._toast.success(`${resp.message}`, '', {timeOut:1000});
      this.cerrar(true);
    }, err => {
      this._toast.error(`${err.error.message}`, '', {timeOut:1000});
    });
  }

  createEditProfile(event:any){

  }

}

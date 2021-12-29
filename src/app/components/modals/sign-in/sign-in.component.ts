import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ILogin, IResponseLogin, ISetDataLocalStorage } from 'src/app/interfaces/login';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  forma:FormGroup;
  @Input() user:any;
  @Output() cerrarModal = new EventEmitter<boolean>();
  isAuth:boolean=false;

  
  constructor(
    private _auth:AuthService,
    private _toast:ToastrService
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
      email : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      password : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    });
  }

  onLogin(){
    const data :ILogin = {
      email :this.forma.get('email')?.value,
      password : this.forma.get('password')?.value
    };
    this._auth.login(data).subscribe((resp:IResponseLogin) => {
      const dataStorage: ISetDataLocalStorage = {
        "x-token": resp.data.token,
        user: resp.data.user,
      }
      this._auth.setUserLocalStorage(dataStorage);
      this._toast.success(`${resp.message}`, '', {timeOut:1500});
        this.cerrar(true);

    }, err => {
      this._toast.error(`${err.error.message}`, '', {timeOut:1000});
    })
  }



}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
      email : new FormControl(null),
      password : new FormControl(null)
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
      this._toast.success(`Bienvenido ${resp.data.user.first_name} ${resp.data.user.last_name}`, '', {timeOut:1500})
        this.cerrar(true);

    }, err => console.log(err))
  }



}

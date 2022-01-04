import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacetopayService } from '../../../services/placetopay.service';
import { ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";


export interface IDataCheckoutUser {
  id: number
  name: string;
  email: string;
  product_id: string;
  amount:number;
 
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forma:FormGroup;
  cant:number=1;
  @Output() cerrarModal = new EventEmitter<boolean>();
  @Input() data:any;
  @Input() user!:any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _placetopay:PlacetopayService,
    private _toast:ToastrService,
    private spinner: NgxSpinnerService,

  ) { 
    this.forma = this.setValidation();
  }

  setValidation(){
    return new FormGroup({
      amount: new FormControl(null, [Validators.required])
    })
  }


  ngOnInit(): void {}

  handleForm(){
    const dataCheckout:IDataCheckoutUser={
      id:this.user?.user.id,
      name:this.user?.user.first_name + this.user?.user.last_name,
      email: this.user?.user.email,
      product_id:this.data.id,   
      amount : this.forma.get('amount')?.value
    }  

    this.spinner.show();
    this._placetopay.connectGateWay(dataCheckout).subscribe(resp=>{
      this.spinner.hide();
      this.document.location.href = resp.data.url;
      localStorage.setItem('url', resp.data.url);
    },
    err =>{
      if (err.error.message){
        this._toast.error(`Debe ingresar una cantidad`, '', {timeOut:1000});
        this.spinner.hide();

      }
    })

  } 

  cerrar(event: boolean) {
    this.cerrarModal.emit(true);
  }

}

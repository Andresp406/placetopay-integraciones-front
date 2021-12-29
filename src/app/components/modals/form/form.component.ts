import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacetopayService } from '../../../services/placetopay.service';
import { ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forma:FormGroup;
  @Output() cerrarModal = new EventEmitter<boolean>();
  @Input() data:any;
  cant:number=1;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _placetopay:PlacetopayService,
    private _toast:ToastrService,
  ) { 
    this.forma = this.setValidation();
  }

  setValidation(){
    return new FormGroup({
      amount: new FormControl(null, [Validators.required])
    })
  }


  ngOnInit(): void {
  }

  handleForm(){
    const data:any={
      product_id:this.data.id,
      amount : this.forma.get('amount')?.value
    }
    this._placetopay.connectGateWay(data).pipe(
      debounceTime(1000)
    ).subscribe(resp=>{
      this.document.location.href =resp.data;
    },
    err =>{
      if (err.error.message){
        this._toast.error(`Debe ingresar una cantidad`, '', {timeOut:1000})
      }
    })

  }

  cerrar(event: boolean) {
    this.cerrarModal.emit(true);
  }

}

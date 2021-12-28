import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlacetopayService } from '../../../services/placetopay.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forma:FormGroup;
  @Output() cerrarModal = new EventEmitter<boolean>();
  @Input() data:any;

  constructor(
    private _placetopay:PlacetopayService
  ) { 
    this.forma = this.setValidation();
  }

  setValidation(){
    return new FormGroup({
      amount: new FormControl(null)
    })
  }


  ngOnInit(): void {
    console.log(this.data)
  }

  handleForm(){
    const data:any={
      product_id:this.data.id,
      amount : this.forma.get('amount')?.value
    }

    this._placetopay.connectGateWay(data).subscribe(console.log)

  }

  cerrar(event: boolean) {
    this.cerrarModal.emit(true);
  }

}

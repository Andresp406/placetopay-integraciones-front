import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent implements OnInit {

  @Input() target='';
  @ViewChild('divModal') divModal!: ElementRef;
  @Output() newUser = new EventEmitter<any>() ;
  @Output() updateUser = new EventEmitter<any>() ;
  data:any;
  constructor(
    private modal :ModalService
  ) { }

  ngOnInit(): void {
  }

  open(data:any=null){
    if(data){
      this.data = data
    }
    this.modal.showModal(this.divModal);
  }


  dataUser(event:any){
    this.newUser.emit(event);
  }

  updateDataUser(event:any){
    this.updateUser.emit(event);
  }

}

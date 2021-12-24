import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    BaseModalComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ], 
  exports:[
    SignInComponent,
    SignUpComponent,
    BaseModalComponent
  ]
})
export class ModalModule { }

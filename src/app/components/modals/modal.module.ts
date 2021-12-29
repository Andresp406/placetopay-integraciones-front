import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './form/form.component';
import { NgxSpinnerModule } from "ngx-spinner";




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
    SharedModule,
    NgxSpinnerModule

  ], 
  exports:[
    SignInComponent,
    SignUpComponent,
    BaseModalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalModule { }

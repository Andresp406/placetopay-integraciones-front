import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCloseComponent } from './button-close/button-close.component';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';



@NgModule({
  declarations: [
    ButtonCloseComponent,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonCloseComponent,
    ValidationErrorsComponent
  ]
})
export class SharedModule { }

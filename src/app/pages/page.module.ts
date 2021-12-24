import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentModule } from '../components/component.module';
import { ModalModule } from '../components/modals/modal.module';


@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    ComponentModule,
    ModalModule
  ]
})
export class PageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentModule } from '../components/component.module';
import { ModalModule } from '../components/modals/modal.module';


@NgModule({
  declarations: [
    HomeComponent,
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
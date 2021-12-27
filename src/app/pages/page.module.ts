import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentModule } from '../components/component.module';
import { ModalModule } from '../components/modals/modal.module';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    HomeComponent,
    OrdersComponent,
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

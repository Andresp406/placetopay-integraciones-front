import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PageModule } from '../pages/page.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FooterComponent
  ]
})
export class ComponentModule { }

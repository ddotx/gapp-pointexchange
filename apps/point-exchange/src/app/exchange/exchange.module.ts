import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeAddComponent } from './exchange-add/exchange-add.component';
import { ExchangeRoutingModule } from './exchange-routing.module';



@NgModule({
  declarations: [ExchangeAddComponent],
  imports: [
    CommonModule,
    ExchangeRoutingModule
  ]
})
export class ExchangeModule { }

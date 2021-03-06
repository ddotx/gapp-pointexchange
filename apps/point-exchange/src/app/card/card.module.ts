import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { CardCreateComponent } from './card-create/card-create.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardComponent } from './card.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CardIntroComponent } from './card-intro/card-intro.component';



@NgModule({
  declarations: [
    CardListComponent,
    CardCreateComponent,
    CardDetailComponent,
    CardComponent,
    CardIntroComponent,
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }

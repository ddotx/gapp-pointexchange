import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';


const cardRoutes: Routes = [
  {path: '', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cardRoutes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }

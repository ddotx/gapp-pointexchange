import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardCreateComponent } from './card-create/card-create.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CardComponent } from './card.component';

const routes: Routes = [
  
  // {path: '', redirectTo: '/cardhome'},
  {path: '', component: CardHomeComponent,
  children: [
        {path: 'create', component: CardCreateComponent},
        {path: 'edit', component: CardDetailComponent}
      ]}
  // {path: 'cardhome', component: CardHomeComponent,
  //   children: [
  //     {path: 'create', component: CardCreateComponent},
  //     {path: 'edit', component: CardDetailComponent}
  //   ]
  // }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }

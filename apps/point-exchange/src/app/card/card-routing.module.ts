import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardCreateComponent } from './card-create/card-create.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CardComponent } from './card.component';
import { CardIntroComponent } from './card-intro/card-intro.component';

const routes: Routes = [

  {
    path: 'card', component: CardComponent,
    children: [
      // { path: '', component: CardIntroComponent },
      { path: 'create', component: CardCreateComponent },
      { path: 'edit', component: CardDetailComponent }
    ]
  }

  // {path: '', redirectTo: '/card/cardhome'},
  // {path: 'cardhome', component: CardComponent,
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

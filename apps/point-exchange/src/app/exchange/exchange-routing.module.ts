import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ExchangeAddComponent } from './exchange-add/exchange-add.component';

const routes: Routes = [
  {path: '', component: ExchangeAddComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExchangeRoutingModule {}

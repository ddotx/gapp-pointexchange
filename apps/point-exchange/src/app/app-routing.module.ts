import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  // { path: 'exchange', loadChildren: './exchange/exchange.module#ExchangeModule'}
  { path: 'exchange', loadChildren: () =>
    import('./exchange/exchange.module')
    .then(m => m.ExchangeModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

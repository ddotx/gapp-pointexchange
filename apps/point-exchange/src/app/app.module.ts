import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardCreateComponent } from './card/card-create/card-create.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CardCreateComponent, CardDetailComponent, CardListComponent],
  imports: [BrowserModule, CoreModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

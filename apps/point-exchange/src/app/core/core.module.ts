import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';



@NgModule({
  declarations: [UiNavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UiNavbarComponent
  ]
})
export class CoreModule { }

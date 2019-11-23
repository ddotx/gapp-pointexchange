import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ButtonsModule } from 'ngx-bootstrap'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ButtonsModule.forRoot()
  ],
  exports: [
    ButtonsModule
  ]
})
export class UiNgxModule {}

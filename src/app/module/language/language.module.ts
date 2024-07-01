import {NgModule} from '@angular/core';
import {LanguageComponent} from './language.component';
import {LanguageRoutingModule} from './language-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LanguageComponent,
    ],

  imports: [
    CommonModule,
    LanguageRoutingModule,

  ],
  providers: [

  ]
})
export class LanguageModule {
}

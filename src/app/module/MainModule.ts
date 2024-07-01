import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainModuleRoute} from './MainModuleRoute';
import {MainModuleComp} from './MainModuleComp';

@NgModule({
  declarations: [
    MainModuleComp
  ],
  imports: [
    CommonModule,
    MainModuleRoute,
  ],
  providers: [
  ],
})
export class MainModule { }

import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {CommonModule} from '@angular/common';
import {HomePageComp} from "./home_page/HomePageComp";
@NgModule({
  declarations: [
    HomeComponent,
    HomePageComp
    ],

  imports: [
    CommonModule,
    HomeRoutingModule,

  ],
  providers: [

  ]
})
export class HomeModule {
}

import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import {MainModule} from "./module/MainModule";
import {SwiperModule} from "swiper/angular";
import { ScrollTopButtonComponent } from './scroll-top-button/scroll-top-button.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    ScrollTopButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
   SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

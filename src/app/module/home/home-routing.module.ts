import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {HomePageComp} from "./home_page/HomePageComp";


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: HomePageComp,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}

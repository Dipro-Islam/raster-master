import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LanguageComponent} from './language.component';



const routes: Routes = [{
  path: '',
  component: LanguageComponent,
  children: [
    // {
    //   path: '',
    //   component: HomePageComp,
    // },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageRoutingModule {
}

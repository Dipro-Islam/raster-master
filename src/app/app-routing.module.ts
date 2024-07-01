import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainModuleComp} from "./module/MainModuleComp";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [


  {
    path: '', component: MainModuleComp,
    children: [
      {
        path: '', loadChildren: () => import('./module/MainModule')
          .then(m => m.MainModule),

      }
    ]
  },
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

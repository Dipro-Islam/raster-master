import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainModuleComp} from './MainModuleComp';


const routes: Routes = [
  {
    path: '', component: MainModuleComp,
    children: [
      {
        path: '', loadChildren: () => import('./home/home.module')
          .then(m => m.HomeModule),
      },
      {
        path: 'focus', loadChildren: () => import('./focus/focus.module')
          .then(m => m.FocusModule),
      },
      {
        path: 'project', loadChildren: () => import('./project/project.module')
          .then(m => m.ProjectModule),
      },
      {
        path: 'about_us', loadChildren: () => import('./about_us/about_us.module')
          .then(m => m.About_usModule),
      },
      {
        path: 'resource', loadChildren: () => import('./resource/resource.module')
          .then(m => m.ResourceModule),
      },
      {
        path: 'get_involved', loadChildren: () => import('./get_involved/get_involved.module')
          .then(m => m.Get_involvedModule),
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoute {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';
import {OngoingProjectComp} from "./ongoing-project/OngoingProjectComp";
import {OngoingProjectDetailsComp} from "./ongoing-project-details/OngoingProjectDetailsComp";
import {CompletedProjectComp} from "./completed-project/CompletedProjectComp";
import {CompletedProjectDetailsComp} from "./completed-project-details/CompletedProjectDetailsComp";
import {UpcomingProjectComp} from "./upcoming-project/UpcomingProjectComp";
import {UpcomingProjectDetailsComp} from "./upcoming-project-details/UpcomingProjectDetailsComp";
import {CollaboratedProjectComp} from "./collaborated-project/CollaboratedProjectComp";
import {CollaboratedProjectDetailsComp} from "./collaborated-project-details/CollaboratedProjectDetailsComp";



const routes: Routes = [{
  path: '',
  component: ProjectComponent,
  children: [
    {
      path: 'ongoing_project',
      component: OngoingProjectComp,
    },
    {
      path: 'ongoing_project/ongoing_project_details',
      component: OngoingProjectDetailsComp,
    },
    {
      path: 'completed_project',
      component: CompletedProjectComp,
    },
    {
      path: 'completed_project/completed_project_details',
      component: CompletedProjectDetailsComp,
    },
    {
      path: 'upcoming_project',
      component: UpcomingProjectComp,
    },
    {
      path: 'upcoming_project/upcoming_project_details',
      component: UpcomingProjectDetailsComp,
    },
    {
      path: 'collaborated_project',
      component: CollaboratedProjectComp,
    },
    {
      path: 'collaborated_project/collaborated_project_details',
      component: CollaboratedProjectDetailsComp,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {
}

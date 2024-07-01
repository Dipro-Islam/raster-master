import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {CommonModule} from '@angular/common';
import {CollaboratedProjectComp} from "./collaborated-project/CollaboratedProjectComp";
import {CollaboratedProjectDetailsComp} from "./collaborated-project-details/CollaboratedProjectDetailsComp";
import {CompletedProjectComp} from "./completed-project/CompletedProjectComp";
import {CompletedProjectDetailsComp} from "./completed-project-details/CompletedProjectDetailsComp";
import {OngoingProjectDetailsComp} from "./ongoing-project-details/OngoingProjectDetailsComp";
import {UpcomingProjectComp} from "./upcoming-project/UpcomingProjectComp";
import {OngoingProjectComp} from "./ongoing-project/OngoingProjectComp";
import {UpcomingProjectDetailsComp} from "./upcoming-project-details/UpcomingProjectDetailsComp";

@NgModule({
  declarations: [
    ProjectComponent,
    CollaboratedProjectComp,
    CollaboratedProjectDetailsComp,
    CompletedProjectComp,
    CompletedProjectDetailsComp,
    OngoingProjectComp,
    OngoingProjectDetailsComp,
    UpcomingProjectComp,
    UpcomingProjectDetailsComp
    ],

  imports: [
    CommonModule,
    ProjectRoutingModule,


  ],
  providers: [

  ]
})
export class ProjectModule {
}

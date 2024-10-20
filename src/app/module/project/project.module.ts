import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {CommonModule} from '@angular/common';
import {CollaboratedProjectComp} from "./collaborated-project/CollaboratedProjectComp";
import {CompletedProjectComp} from "./completed-project/CompletedProjectComp";
import {UpcomingProjectComp} from "./upcoming-project/UpcomingProjectComp";
import {OngoingProjectComp} from "./ongoing-project/OngoingProjectComp";
import {DevelopmentProgramComp} from "./upcoming-project/development-program/DevelopmentProgramComp";
import {GreenWorldComp} from "./upcoming-project/green-world/GreenWorldComp";
import {HarbourRenewalComp} from "./upcoming-project/harbour-renewal/HarbourRenewalComp";
import {OldAgeHomeComp} from "./upcoming-project/old-age-home/OldAgeHomeComp";
import {RenewableEnergyComp} from "./upcoming-project/renewable-energy/RenewableEnergyComp";
import {ReplacementPlasticComp} from "./upcoming-project/replacement-plastic/ReplacementPlasticComp";
import {RiverAndPondComp} from "./upcoming-project/river-and-pond/RiverAndPondComp";
import {RuralInfrastructureComp} from "./upcoming-project/rural-infrastructure/RuralInfrastructureComp";
import {RuralTransformationComp} from "./upcoming-project/rural-transformation/RuralTransformationComp";
import {WaterImprovementComp} from "./upcoming-project/water-improvement/WaterImprovementComp";

@NgModule({
  declarations: [
    ProjectComponent,
    CollaboratedProjectComp,
    CompletedProjectComp,
    OngoingProjectComp,
    UpcomingProjectComp,
    DevelopmentProgramComp,
    GreenWorldComp,
    HarbourRenewalComp,
    OldAgeHomeComp,
    RenewableEnergyComp,
    ReplacementPlasticComp,
    RiverAndPondComp,
    RuralInfrastructureComp,
    RuralTransformationComp,
    WaterImprovementComp,
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

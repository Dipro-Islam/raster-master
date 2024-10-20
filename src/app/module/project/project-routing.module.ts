import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';
import {OngoingProjectComp} from "./ongoing-project/OngoingProjectComp";
import {CompletedProjectComp} from "./completed-project/CompletedProjectComp";
import {UpcomingProjectComp} from "./upcoming-project/UpcomingProjectComp";
import {CollaboratedProjectComp} from "./collaborated-project/CollaboratedProjectComp";
import {DevelopmentProgramComp} from "./upcoming-project/development-program/DevelopmentProgramComp";
import {GreenWorldComp} from "./upcoming-project/green-world/GreenWorldComp";
import {HarbourRenewalComp} from "./upcoming-project/harbour-renewal/HarbourRenewalComp";
import {OldAgeHomeComp} from "./upcoming-project/old-age-home/OldAgeHomeComp";
import {RuralInfrastructureComp} from "./upcoming-project/rural-infrastructure/RuralInfrastructureComp";
import {RuralTransformationComp} from "./upcoming-project/rural-transformation/RuralTransformationComp";
import {RiverAndPondComp} from "./upcoming-project/river-and-pond/RiverAndPondComp";
import {WaterImprovementComp} from "./upcoming-project/water-improvement/WaterImprovementComp";
import {RenewableEnergyComp} from "./upcoming-project/renewable-energy/RenewableEnergyComp";
import {ReplacementPlasticComp} from "./upcoming-project/replacement-plastic/ReplacementPlasticComp";



const routes: Routes = [{
  path: '',
  component: ProjectComponent,
  children: [
    // ongoing projects
    {
      path: 'ongoing_project',
      component: OngoingProjectComp,
    },
    // completed projects
    {
      path: 'completed_project',
      component: CompletedProjectComp,
    },
    // upcoming projects
    {
      path: 'upcoming_project',
      component: UpcomingProjectComp,
    },
    {
      path: 'upcoming_project/old_age_home',
      component: OldAgeHomeComp,
    },
    {
      path: 'upcoming_project/rural_infrastructure',
      component: RuralInfrastructureComp,
    },
    {
      path: 'upcoming_project/rural_transformation',
      component: RuralTransformationComp,
    },
    {
      path: 'upcoming_project/harbour_renewal',
      component: HarbourRenewalComp,
    },
    {
      path: 'upcoming_project/river_and_pond',
      component: RiverAndPondComp,
    },
    {
      path: 'upcoming_project/water_improvement',
      component: WaterImprovementComp,
    },
    {
      path: 'upcoming_project/renewable_energy',
      component: RenewableEnergyComp,
    },
    {
      path: 'upcoming_project/development_program',
      component: DevelopmentProgramComp,
    },
    {
      path: 'upcoming_project/green_world',
      component: GreenWorldComp,
    },

    {
      path: 'upcoming_project/replacement_plastic',
      component: ReplacementPlasticComp,
    },

    // collaborated projects
    {
      path: 'collaborated_project',
      component: CollaboratedProjectComp,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {
}

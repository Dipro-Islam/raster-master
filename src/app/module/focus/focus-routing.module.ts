import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FocusComponent} from './focus.component';
import {FocusChildComp} from "./focus-child/FocusChildComp";
import {FocusEducationComp} from "./focus-education/FocusEducationComp";
import {FocusHealthComp} from "./focus-health/FocusHealthComp";
import {FocusNutritionComp} from "./focus-nutrition/FocusNutritionComp";
import {FocusYouthComp} from "./focus-youth/FocusYouthComp";
import {FocusEnvironmentComp} from "./focus-environment/FocusEnvironmentComp";
import {FocusGenderEqualityComp} from "./focus-gender-equality/FocusGenderEqualityComp";
import {FocusWorldPeaceComp} from "./focus-world-peace/FocusWorldPeaceComp";



const routes: Routes = [{
  path: '',
  component: FocusComponent,
  children: [
    {
      path: 'education',
      component: FocusEducationComp,
    },
    {
      path: 'health',
      component: FocusHealthComp,
    },
    {
      path: 'nutrition',
      component: FocusNutritionComp,
    },
    {
      path: 'child',
      component: FocusChildComp,
    },
    {
      path: 'youth',
      component: FocusYouthComp,
    },
    {
      path: 'environment',
      component: FocusEnvironmentComp,
    },
    {
      path: 'gander_equality',
      component: FocusGenderEqualityComp,
    },
    {
      path: 'world_peace',
      component: FocusWorldPeaceComp,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FocusRoutingModule {
}

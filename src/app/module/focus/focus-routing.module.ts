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
import {EducationForWomen} from "./focus-education/education-for-women/EducationForWomen";
import {
  EducationalForAllSectionDetails
} from "./focus-education/education-for-all-section-details/EducationalForAllSectionDetails";
import {
  EducationalForChildrenSectionDetails
} from "./focus-education/education-for-children-section-derails/EducationalForChildrenSectionDetails";



const routes: Routes = [{
  path: '',
  component: FocusComponent,
  children: [
    // education Section
    {
      path: 'education',
      component: FocusEducationComp,
    },
    {
      path: 'education/EducationalForAllSectionDetails',
      component: EducationalForAllSectionDetails,
    },
    {
      path: 'education/EducationalForChildrenSectionDetails',
      component: EducationalForChildrenSectionDetails,
    },
    {
      path: 'education/education_for_women',
      component: EducationForWomen,
    },
    {
      path: 'education/education_for_children',
      component: EducationForWomen,
    },
    {
      path: 'education/distance_learning',
      component: EducationForWomen,
    },
    {
      path: 'education/digital_school',
      component: EducationForWomen,
    },
    {
      path: 'education/read_together',
      component: EducationForWomen,
    },
    {
      path: 'education/scholarship',
      component: EducationForWomen,
    },

    // health Section
    {
      path: 'health',
      component: FocusHealthComp,
    },
    // nutrition Section
    {
      path: 'nutrition',
      component: FocusNutritionComp,
    },
    // child Section
    {
      path: 'child',
      component: FocusChildComp,
    },
    // youth Section
    {
      path: 'youth',
      component: FocusYouthComp,
    },
    // environment Section
    {
      path: 'environment',
      component: FocusEnvironmentComp,
    },
    // gander_equality Section
    {
      path: 'gander_equality',
      component: FocusGenderEqualityComp,
    },
    // world_peace Section
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

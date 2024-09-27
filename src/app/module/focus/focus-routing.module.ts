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
import {EducationForChildren} from "./focus-education/education-for-children/EducationForChildren";
import {DistanceLearning} from "./focus-education/distance-learning/DistanceLearning";
import {DigitalSchool} from "./focus-education/digital-school/DigitalSchool";
import {ReadTogether} from "./focus-education/read-together/ReadTogether";
import {Scholarship} from "./focus-education/scholarship/Scholarship";
import {FocusNutrition} from "./focus-education/focus-nutrition/FocusNutrition";
import {BloodDonation} from "./focus-education/blood-donation-camp/BloodDonation";



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
      path: 'education/Education_For_All_Section_Details',
      component: EducationalForAllSectionDetails,
    },
    {
      path: 'education/Education_For_Children_Section_Details',
      component: EducationalForChildrenSectionDetails,
    },
    {
      path: 'education/education_for_women',
      component: EducationForWomen,
    },
    {
      path: 'education/education_for_children',
      component: EducationForChildren,
    },
    {
      path: 'education/distance_learning',
      component: DistanceLearning,
    },
    {
      path: 'education/digital_school',
      component: DigitalSchool,
    },
    {
      path: 'education/read_together',
      component: ReadTogether,
    },
    {
      path: 'education/scholarship',
      component: Scholarship,
    },
    {
      path: 'education/focus_nutrition',
      component: FocusNutrition,
    },
    {
      path: 'education/blood_donation_camp',
      component: BloodDonation,
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

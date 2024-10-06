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
import {EducationForWomenComp} from "./focus-education/education-for-women/EducationForWomenComp";
import {
  EducationalForAllSectionDetailsComp
} from "./focus-education/education-for-all-section-details/EducationalForAllSectionDetailsComp";
import {
  EducationalForChildrenSectionDetailsComp
} from "./focus-education/education-for-children-section-derails/EducationalForChildrenSectionDetailsComp";
import {EducationForChildrenComp} from "./focus-education/education-for-children/EducationForChildrenComp";
import {DistanceLearningComp} from "./focus-education/distance-learning/DistanceLearningComp";
import {DigitalSchoolComp} from "./focus-education/digital-school/DigitalSchoolComp";
import {ReadTogetherComp} from "./focus-education/read-together/ReadTogetherComp";
import {ScholarshipComp} from "./focus-education/scholarship/ScholarshipComp";
import {NutritionComp} from "./focus-health/nutrition/NutritionComp";
import {BloodDonationCampComp} from "./focus-health/blood-donation-camp/BloodDonationCampComp";




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
      component: EducationalForAllSectionDetailsComp,
    },
    {
      path: 'education/Education_For_Children_Section_Details',
      component: EducationalForChildrenSectionDetailsComp,
    },
    {
      path: 'education/education_for_women',
      component: EducationForWomenComp,
    },
    {
      path: 'education/education_for_children',
      component: EducationForChildrenComp,
    },
    {
      path: 'education/distance_learning',
      component: DistanceLearningComp,
    },
    {
      path: 'education/digital_school',
      component: DigitalSchoolComp,
    },
    {
      path: 'education/read_together',
      component: ReadTogetherComp,
    },
    {
      path: 'education/scholarship',
      component: ScholarshipComp,
    },

    // health Section
    {
      path: 'health',
      component: FocusHealthComp,
    },
    {
      path: 'health/health_nutrition',
      component: NutritionComp,
    },
    {
      path: 'health/blood_donation_camp',
      component: BloodDonationCampComp,
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

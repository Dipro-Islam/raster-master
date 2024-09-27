import {NgModule} from '@angular/core';
import {FocusComponent} from './focus.component';
import {FocusRoutingModule} from './focus-routing.module';
import {CommonModule} from '@angular/common';
import {FocusChildComp} from "./focus-child/FocusChildComp";
import {FocusEducationComp} from "./focus-education/FocusEducationComp";
import {FocusEnvironmentComp} from "./focus-environment/FocusEnvironmentComp";
import {FocusGenderEqualityComp} from "./focus-gender-equality/FocusGenderEqualityComp";
import {FocusHealthComp} from "./focus-health/FocusHealthComp";
import {FocusNutritionComp} from "./focus-nutrition/FocusNutritionComp";
import {FocusWorldPeaceComp} from "./focus-world-peace/FocusWorldPeaceComp";
import {FocusYouthComp} from "./focus-youth/FocusYouthComp";
import { EducationForWomenComp } from './focus-education/education-for-women/EducationForWomenComp';
import {BloodDonationCampComp} from "./focus-education/blood-donation-camp/BloodDonationCampComp";
import {DigitalSchoolComp} from "./focus-education/digital-school/DigitalSchoolComp";
import {DistanceLearningComp} from "./focus-education/distance-learning/DistanceLearningComp";
import {
  EducationalForAllSectionDetailsComp
} from "./focus-education/education-for-all-section-details/EducationalForAllSectionDetailsComp";
import {EducationForChildrenComp} from "./focus-education/education-for-children/EducationForChildrenComp";
import {
  EducationalForChildrenSectionDetailsComp
} from "./focus-education/education-for-children-section-derails/EducationalForChildrenSectionDetailsComp";
import {EducationNutritionComp} from "./focus-education/focus-nutrition/EducationNutritionComp";
import {ReadTogetherComp} from "./focus-education/read-together/ReadTogetherComp";
import {ScholarshipComp} from "./focus-education/scholarship/ScholarshipComp";
@NgModule({
  declarations: [
    FocusComponent,
    FocusChildComp,
    FocusEducationComp,
    FocusEnvironmentComp,
    FocusGenderEqualityComp,
    FocusHealthComp,
    FocusNutritionComp,
    FocusWorldPeaceComp,
    FocusYouthComp,
    EducationForWomenComp,
    BloodDonationCampComp,
    DigitalSchoolComp,
    DistanceLearningComp,
    EducationalForAllSectionDetailsComp,
    EducationForChildrenComp,
    EducationalForChildrenSectionDetailsComp,
    EducationNutritionComp,
    ReadTogetherComp,
    ScholarshipComp,
    ],

  imports: [
    CommonModule,
    FocusRoutingModule,

  ],
  providers: [

  ]
})
export class FocusModule {
}

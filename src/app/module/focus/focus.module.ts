import {NgModule} from '@angular/core';
import {FocusComponent} from './focus.component';
import {FocusRoutingModule} from './focus-routing.module';
import {CommonModule} from '@angular/common';
import {FocusChildComp} from "./focus-child/FocusChildComp";
import {FocusEducationComp} from "./focus-education/FocusEducationComp";
import {FocusEnvironmentComp} from "./focus-environment/FocusEnvironmentComp";
import {FocusGenderEqualityComp} from "./focus-gender-equality/FocusGenderEqualityComp";
import {FocusWorldPeaceComp} from "./focus-world-peace/FocusWorldPeaceComp";
import {FocusYouthComp} from "./focus-youth/FocusYouthComp";
import {EducationForWomenComp} from './focus-education/education-for-women/EducationForWomenComp';
import {DigitalSchoolComp} from "./focus-education/digital-school/DigitalSchoolComp";
import {DistanceLearningComp} from "./focus-education/distance-learning/DistanceLearningComp";
import {EducationalForAllSectionDetailsComp} from "./focus-education/education-for-all-section-details/EducationalForAllSectionDetailsComp";
import {EducationForChildrenComp} from "./focus-education/education-for-children/EducationForChildrenComp";
import {EducationalForChildrenSectionDetailsComp} from "./focus-education/education-for-children-section-derails/EducationalForChildrenSectionDetailsComp";
import {ReadTogetherComp} from "./focus-education/read-together/ReadTogetherComp";
import {ScholarshipComp} from "./focus-education/scholarship/ScholarshipComp";
import {NutritionComp} from "./focus-nutrition/nutrition/NutritionComp";
import {BloodDonationCampComp} from "./focus-health/blood-donation-camp/BloodDonationCampComp";
import {FocusHealthComp} from "./focus-health/FocusHealthComp";
import {FocusNutritionComp} from "./focus-nutrition/FocusNutritionComp";
import {NourishingBodiesComp} from "./focus-child/nourishing-bodies/NourishingBodiesComp";
import {EmpoweringMindsComp} from "./focus-child/empowering-minds/EmpoweringMindsComp";
import {CaringForTheCommunityComp} from "./focus-child/caring-for-the-community/CaringForTheCommunityComp";
import {GivingTheGiftOfLifeComp} from "./focus-child/giving-the-gift-of-life/GivingTheGiftOfLifeComp";
import {EmpoweringCommunitiesComp} from "./focus-child/empowering-communities/EmpoweringCommunitiesComp";
import {ProtectingCommunitiesComp} from "./focus-child/protecting-communities/ProtectingCommunitiesComp";
import {ProtectingOurFutureComp} from "./focus-child/protecting-our-future/ProtectingOurFutureComp";
import {HygieneAwarenessComp} from "./focus-child/hygiene-awareness/HygieneAwarenessComp";
import {CompassionateCareComp} from "./focus-child/compassionate-care/CompassionateCareComp";
import {InspiringYouthComp} from "./focus-youth/inspiring-youth/InspiringYouthComp";
import {CareerDevelopmentComp} from "./focus-youth/career-development/CareerDevelopmentComp";
import {CommunityEngagementComp} from "./focus-youth/community-engagement/CommunityEngagementComp";
import {DigitalLiteracyComp} from "./focus-youth/digital-literacy/DigitalLiteracyComp";
import {EntrepreneurshipComp} from "./focus-youth/entrepreneurship/EntrepreneurshipComp";
import {MentalHealthComp} from "./focus-youth/mental-health/MentalHealthComp";
import {LeadershipComp} from "./focus-youth/leadership/LeadershipComp";
import {CleanEnergyComp} from "./focus-environment/clean-energy/CleanEnergyComp";
import {EnvironmentalEducationComp} from "./focus-environment/environmental-education/EnvironmentalEducationComp";
import {RiverCleanUpComp} from "./focus-environment/river-cleanUp/RiverCleanUpComp";
import {TreePlantationComp} from "./focus-environment/tree-plantation/TreePlantationComp";
import {WasteManagementComp} from "./focus-environment/waste-management/WasteManagementComp";
import {WaterConservationComp} from "./focus-environment/water-conservation/WaterConservationComp";
import {
  AdvocacyForGenderEqualityComp
} from "./focus-gender-equality/advocacy-for-gender-equality/AdvocacyForGenderEqualityComp";
import {DecisionMakingComp} from "./focus-gender-equality/decision-making/DecisionMakingComp";
import {EducatingForEqualityComp} from "./focus-gender-equality/educating-for-equality/EducatingForEqualityComp";
import {EmpoweringWomenComp} from "./focus-gender-equality/empowering-women/EmpoweringWomenComp";
import {FinancialLiteracyComp} from "./focus-gender-equality/financial-literacy/FinancialLiteracyComp";
import {HandicraftsAndArtisanComp} from "./focus-gender-equality/handicrafts-and-artisan/HandicraftsAndArtisanComp";
import {
  VocationalTrainingForWomenComp
} from "./focus-gender-equality/vocational-training-for-women/VocationalTrainingForWomenComp";
import {WellnessProgramsComp} from "./focus-gender-equality/wellness-programs/WellnessProgramsComp";
@NgModule({
  declarations: [
    FocusComponent,
    FocusChildComp,
    FocusEducationComp,
    FocusHealthComp,
    FocusNutritionComp,
    FocusEnvironmentComp,
    FocusGenderEqualityComp,
    FocusWorldPeaceComp,
    FocusYouthComp,
    EducationForWomenComp,
    DigitalSchoolComp,
    DistanceLearningComp,
    EducationalForAllSectionDetailsComp,
    EducationForChildrenComp,
    EducationalForChildrenSectionDetailsComp,
    ReadTogetherComp,
    ScholarshipComp,
    NutritionComp,
    BloodDonationCampComp,
    EmpoweringMindsComp,
    NourishingBodiesComp,
    NourishingBodiesComp,
    CaringForTheCommunityComp,
    GivingTheGiftOfLifeComp,
    EmpoweringCommunitiesComp,
    ProtectingCommunitiesComp,
    ProtectingOurFutureComp,
    HygieneAwarenessComp,
    CompassionateCareComp,
    InspiringYouthComp,
    CareerDevelopmentComp,
    CommunityEngagementComp,
    DigitalLiteracyComp,
    EntrepreneurshipComp,
    LeadershipComp,
    MentalHealthComp,
    CleanEnergyComp,
    EnvironmentalEducationComp,
    RiverCleanUpComp,
    TreePlantationComp,
    WasteManagementComp,
    WaterConservationComp,
    AdvocacyForGenderEqualityComp,
    DecisionMakingComp,
    EducatingForEqualityComp,
    EmpoweringWomenComp,
    FinancialLiteracyComp,
    HandicraftsAndArtisanComp,
    VocationalTrainingForWomenComp,
    WellnessProgramsComp,

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

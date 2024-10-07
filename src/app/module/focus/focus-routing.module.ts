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
import {EmpoweringMindsComp} from "./focus-child/empowering-minds/EmpoweringMindsComp";
import {NourishingBodiesComp} from "./focus-child/nourishing-bodies/NourishingBodiesComp";
import {CompassionateCareComp} from "./focus-child/compassionate-care/CompassionateCareComp";
import {CaringForTheCommunityComp} from "./focus-child/caring-for-the-community/CaringForTheCommunityComp";
import {GivingTheGiftOfLifeComp} from "./focus-child/giving-the-gift-of-life/GivingTheGiftOfLifeComp";
import {EmpoweringCommunitiesComp} from "./focus-child/empowering-communities/EmpoweringCommunitiesComp";
import {ProtectingCommunitiesComp} from "./focus-child/protecting-communities/ProtectingCommunitiesComp";
import {ProtectingOurFutureComp} from "./focus-child/protecting-our-future/ProtectingOurFutureComp";
import {HygieneAwarenessComp} from "./focus-child/hygiene-awareness/HygieneAwarenessComp";
import {InspiringYouthComp} from "./focus-youth/inspiring-youth/InspiringYouthComp";
import {CareerDevelopmentComp} from "./focus-youth/career-development/CareerDevelopmentComp";
import {CommunityEngagementComp} from "./focus-youth/community-engagement/CommunityEngagementComp";
import {DigitalLiteracyComp} from "./focus-youth/digital-literacy/DigitalLiteracyComp";
import {EntrepreneurshipComp} from "./focus-youth/entrepreneurship/EntrepreneurshipComp";
import {LeadershipComp} from "./focus-youth/leadership/LeadershipComp";
import {MentalHealthComp} from "./focus-youth/mental-health/MentalHealthComp";
import {CleanEnergyComp} from "./focus-environment/clean-energy/CleanEnergyComp";
import {EnvironmentalEducationComp} from "./focus-environment/environmental-education/EnvironmentalEducationComp";
import {RiverCleanUpComp} from "./focus-environment/river-cleanUp/RiverCleanUpComp";
import {TreePlantationComp} from "./focus-environment/tree-plantation/TreePlantationComp";
import {WasteManagementComp} from "./focus-environment/waste-management/WasteManagementComp";
import {WaterConservationComp} from "./focus-environment/water-conservation/WaterConservationComp";




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
    {
      path: 'child/empowering_minds',
      component: EmpoweringMindsComp,
    },
    {
      path: 'child/nourishing_bodies',
      component: NourishingBodiesComp,
    },
    {
      path: 'child/compassionate_care',
      component: CompassionateCareComp,
    },
    {
      path: 'child/caring_for_the_community',
      component: CaringForTheCommunityComp,
    },
    {
      path: 'child/giving_the_gift_of_life',
      component: GivingTheGiftOfLifeComp,
    },
    {
      path: 'child/empowering_communities',
      component: EmpoweringCommunitiesComp,
    },
    {
      path: 'child/protecting_communities',
      component: ProtectingCommunitiesComp,
    },
    {
      path: 'child/protecting_our_future',
      component: ProtectingOurFutureComp,
    },
    {
      path: 'child/hygiene_awareness',
      component: HygieneAwarenessComp,
    },

    // youth Section
    {
      path: 'youth',
      component: FocusYouthComp,
    },
    {
      path: 'youth/inspiring_youth',
      component: InspiringYouthComp,
    },
    {
      path: 'youth/career_development',
      component: CareerDevelopmentComp,
    },
    {
      path: 'youth/community_engagement',
      component: CommunityEngagementComp,
    },
    {
      path: 'youth/digital_literacy',
      component: DigitalLiteracyComp,
    },
    {
      path: 'youth/entrepreneurship',
      component: EntrepreneurshipComp,
    },
    {
      path: 'youth/leadership',
      component: LeadershipComp,
    },
    {
      path: 'youth/mental_health',
      component: MentalHealthComp,
    },
    // environment Section
    {
      path: 'environment',
      component: FocusEnvironmentComp,
    },
    {
      path: 'environment/clean_energy',
      component: CleanEnergyComp,
    },
    {
      path: 'environment/environmental_education',
      component: EnvironmentalEducationComp,
    },
    {
      path: 'environment/river_cleanUp',
      component: RiverCleanUpComp,
    },
    {
      path: 'environment/tree_plantation',
      component: TreePlantationComp,
    },
    {
      path: 'environment/waste_management',
      component: WasteManagementComp,
    },
    {
      path: 'environment/water_conservation',
      component: WaterConservationComp,
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

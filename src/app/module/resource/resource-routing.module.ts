import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResourceComponent} from './resource.component';
import {ResourceReportComp} from "./resource-report/ResourceReportComp";
import {ResourceResearchComp} from "./resource-research/ResourceResearchComp";
import {ResourceArticleComp} from "./resource-article/ResourceArticleComp";
import {ResourceNewsComp} from "./resource-news/ResourceNewsComp";
import {ResourcePhotosComp} from "./resource-photos/ResourcePhotosComp";
import {ResourceVideosComp} from "./resource-videos/ResourceVideosComp";
import {GlimpseOfAwardWinningComp} from "./resource-photos/resource_photos_details/glimpse-of-award-winning/GlimpseOfAwardWinningComp";
import {BeleghataSarkarBazarMilonSanghComp} from "./resource-photos/resource_photos_details/beleghata-sarkar-bazar-milon-sangh/BeleghataSarkarBazarMilonSanghComp";
import {TeamGalleryComp} from "./resource-photos/resource_photos_details/team-gallery/TeamGalleryComp";
import {OpenAirClassComp} from "./resource-photos/resource_photos_details/open-air-class/openAirClassComp";
import {SportsGalleryComp} from "./resource-photos/resource_photos_details/sports-gallery/SportsGalleryComp";
import {WomenEmpowermentComp} from "./resource-photos/resource_photos_details/women-empowerment/WomenEmpowermentComp";
import {
  ThroughDemocracyAwarenessComp
} from "./resource-photos/resource_photos_details/through-democracy-awareness/ThroughDemocracyAwarenessComp";
import {SkillDevelopmentComp} from "./resource-photos/resource_photos_details/skill-development/SkillDevelopmentComp";
import {
  PromotingTechnologyComp
} from "./resource-photos/resource_photos_details/promoting-technology/PromotingTechnologyComp";
import {
  BlanketDistributionComp
} from "./resource-photos/resource_photos_details/blanket-distribution-in-vrindavan/BlanketDistributionComp";
import {
  CoronaVaccinationComp
} from "./resource-photos/resource_photos_details/corona-vaccination/CoronaVaccinationComp";
import {CoronaPandemicComp} from "./resource-photos/resource_photos_details/corona-pandemic/CoronaPandemicComp";
import {AwarenessComp} from "./resource-photos/resource_photos_details/awareness/AwarenessComp";
import {AnimalLovingComp} from "./resource-photos/resource_photos_details/animal-loving/AnimalLovingComp";
import {
  BirthdayCelebrationComp
} from "./resource-photos/resource_photos_details/birthday-celebration/BirthdayCelebrationComp";
import {
  BloodDonationCampGalleryComp
} from "./resource-photos/resource_photos_details/blood-donation-camp-gallery/BloodDonationCampGalleryComp";
import {BricksSchoolComp} from "./resource-photos/resource_photos_details/bricks-school/BricksSchoolComp";
import {
  ChildHealthCheckupGalleryComp
} from "./resource-photos/resource_photos_details/child-health-checkup-gallery/ChildHealthCheckupGalleryComp";
import {
  ClothDistributionGalleryComp
} from "./resource-photos/resource_photos_details/cloth-distribution-gallery/ClothDistributionGalleryComp";
import {AdultLiteracyComp} from "./resource-photos/resource_photos_details/adult-literacy/AdultLiteracyComp";
import {ArabicLanguageComp} from "./resource-photos/resource_photos_details/arabic-language/ArabicLanguageComp";
import {
  AwarenessVectorBornComp
} from "./resource-photos/resource_photos_details/awareness-vector-born/AwarenessVectorBornComp";
import {BengaliLanguageComp} from "./resource-photos/resource_photos_details/bengali-language/BengaliLanguageComp";
import {CultureComp} from "./resource-photos/resource_photos_details/culture/CultureComp";
import {DoorToDoorVisitComp} from "./resource-photos/resource_photos_details/door-to-door-visit/DoorToDoorVisitComp";
import {EducationGalleryComp} from "./resource-photos/resource_photos_details/education-gallery/EducationGalleryComp";
import {EnglishLanguageComp} from "./resource-photos/resource_photos_details/english-language/EnglishLanguageComp";
import {
  EnvironmentGalleryComp
} from "./resource-photos/resource_photos_details/environment-gallery/EnvironmentGalleryComp";
import {NightClassComp} from "./resource-photos/resource_photos_details/night-class/NightClassComp";
import {OlChikiLanguageComp} from "./resource-photos/resource_photos_details/ol-chiki-language/OlChikiLanguageComp";
import {FoodDistributionComp} from "./resource-photos/resource_photos_details/food-distribution/FoodDistributionComp";
import {HindiLanguageComp} from "./resource-photos/resource_photos_details/hindi-language/HindiLanguageComp";
import {MedicalCampComp} from "./resource-photos/resource_photos_details/medical-camp/MedicalCampComp";
import {
  ReducePlasticAndRecyclingComp
} from "./resource-photos/resource_photos_details/reduce-plastic-and-recycling/ReducePlasticAndRecyclingComp";
import {
  SaveDrinkingWaterComp
} from "./resource-photos/resource_photos_details/save-drinking-water/SaveDrinkingWaterComp";
import {
  ScienceAndTechnologyGalleryComp
} from "./resource-photos/resource_photos_details/science-and-technology/ScienceAndTechnologyGalleryComp";
import {
  SupportDisableChildComp
} from "./resource-photos/resource_photos_details/support-disable-child/SupportDisableChildComp";
import {LoveAndPeaceComp} from "./resource-photos/resource_photos_details/love-and-peace/LoveAndPeaceComp";
import {
  MobileLibraryGalleryComp
} from "./resource-photos/resource_photos_details/mobile-library/MobileLibraryGalleryComp";
import {
  OrphanChildrenTeachingComp
} from "./resource-photos/resource_photos_details/orphan-children-teaching/OrphanChildrenTeachingComp";
import {OtherSupportGalleryComp} from "./resource-photos/resource_photos_details/other-support/OtherSupportGalleryComp";
import {MotherEducationComp} from "./resource-photos/resource_photos_details/mother-education/MotherEducationComp";
import {
  NutritionalSupportGalleryComp
} from "./resource-photos/resource_photos_details/nutritional-support-gallery/NutritionalSupportGalleryComp";
import {
  NutritionForAgePeoplePregnantMotherLactatingMothersAndChildrenComp
} from "./resource-photos/resource_photos_details/nutrition-for-age-people-pregnant-mother-lactating-mothers-and-children/NutritionForAgePeoplePregnantMotherLactatingMothersAndChildrenComp";



const routes: Routes = [{
  path: '',
  component: ResourceComponent,
  children: [
    {
      path: 'resource_report',
      component: ResourceReportComp,
    },
    {
      path: 'resource_research',
      component: ResourceResearchComp,
    },
    {
      path: 'resource_article',
      component: ResourceArticleComp,
    },
    {
      path: 'resource_news',
      component: ResourceNewsComp,
    },
    // resource photos
    {
      path: 'resource_photos',
      component: ResourcePhotosComp,
    },
    // resource photos details
    {
      path: 'resource_photos/glimpse_of_award_winning',
      component: GlimpseOfAwardWinningComp,
    },
    {
      path: 'resource_photos/beleghata_sarkar_bazar_milon_sangh',
      component: BeleghataSarkarBazarMilonSanghComp,
    },
    {
      path: 'resource_photos/team_gallery',
      component: TeamGalleryComp,
    },
    {
      path: 'resource_photos/open_air_class',
      component: OpenAirClassComp,
    },
    {
      path: 'resource_photos/sports_gallery',
      component: SportsGalleryComp,
    },
    {
      path: 'resource_photos/women_empowerment',
      component: WomenEmpowermentComp,
    },
    {
      path: 'resource_photos/through_democracy_awareness',
      component: ThroughDemocracyAwarenessComp,
    },
    {
      path: 'resource_photos/skill_development',
      component: SkillDevelopmentComp,
    },
    {
      path: 'resource_photos/promoting_technology',
      component: PromotingTechnologyComp,
    },
    {
      path: 'resource_photos/blanket_distribution',
      component: BlanketDistributionComp,
    },
    {
      path: 'resource_photos/corona_vaccination',
      component: CoronaVaccinationComp,
    },
    {
      path: 'resource_photos/corona_pandemic',
      component: CoronaPandemicComp,
    },
    {
      path: 'resource_photos/awareness',
      component: AwarenessComp,
    },
    {
      path: 'resource_photos/animal_loving',
      component: AnimalLovingComp,
    },
    {
      path: 'resource_photos/birthday_celebration',
      component: BirthdayCelebrationComp,
    },
    {
      path: 'resource_photos/blood_donation_camp_gallery',
      component: BloodDonationCampGalleryComp,
    },
    {
      path: 'resource_photos/bricks_school',
      component: BricksSchoolComp,
    },
    {
      path: 'resource_photos/child_health_checkup_gallery',
      component: ChildHealthCheckupGalleryComp,
    },
    {
      path: 'resource_photos/cloth_distribution_gallery',
      component: ClothDistributionGalleryComp,
    },
    {
      path: 'resource_photos/adult_literacy',
      component: AdultLiteracyComp,
    },
    {
      path: 'resource_photos/education_for_arabic',
      component: ArabicLanguageComp,
    },
    {
      path: 'resource_photos/awareness_vector_born',
      component: AwarenessVectorBornComp,
    },
    {
      path: 'resource_photos/education_for_bengali',
      component: BengaliLanguageComp,
    },
    {
      path: 'resource_photos/culture_gallery',
      component: CultureComp,
    },
    {
      path: 'resource_photos/door_to_door_visit',
      component: DoorToDoorVisitComp,
    },
    {
      path: 'resource_photos/education_gallery',
      component: EducationGalleryComp,
    },
    {
      path: 'resource_photos/education_for_english',
      component: EnglishLanguageComp,
    },
    {
      path: 'resource_photos/environment_gallery',
      component: EnvironmentGalleryComp,
    },
    {
      path: 'resource_photos/education_in_night',
      component: NightClassComp,
    },
    {
      path: 'resource_photos/education_for_ol_chiki',
      component: OlChikiLanguageComp,
    },
    {
      path: 'resource_photos/food_distribution',
      component: FoodDistributionComp,
    },
    {
      path: 'resource_photos/education_for_hindi',
      component: HindiLanguageComp,
    },
    {
      path: 'resource_photos/medical_camp',
      component: MedicalCampComp,
    },
    {
      path: 'resource_photos/reduce_plastic_and_recycling',
      component: ReducePlasticAndRecyclingComp,
    },
    {
      path: 'resource_photos/save_drinking_water',
      component: SaveDrinkingWaterComp,
    },
    {
      path: 'resource_photos/science_and_technology',
      component: ScienceAndTechnologyGalleryComp,
    },
    {
      path: 'resource_photos/support_disable_child',
      component: SupportDisableChildComp,
    },
    {
      path: 'resource_photos/love_and_peace',
      component: LoveAndPeaceComp,
    },
    {
      path: 'resource_photos/mobile_library',
      component: MobileLibraryGalleryComp,
    },
    {
      path: 'resource_photos/orphan_children_teaching',
      component: OrphanChildrenTeachingComp,
    },
    {
      path: 'resource_photos/other_support',
      component: OtherSupportGalleryComp,
    },
    {
      path: 'resource_photos/mother_education',
      component: MotherEducationComp,
    },
    {
      path: 'resource_photos/nutritional_support',
      component: NutritionalSupportGalleryComp,
    },
    {
      path: 'resource_photos/nutrition_for_age_people_pregnant_mother_lactating_mothers_and_children',
      component: NutritionForAgePeoplePregnantMotherLactatingMothersAndChildrenComp,
    },
    // resource videos
    {
      path: 'resource_videos',
      component: ResourceVideosComp,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceRoutingModule {
}

import {NgModule} from '@angular/core';
import {ResourceComponent} from './resource.component';
import {ResourceRoutingModule} from './resource-routing.module';
import {CommonModule} from '@angular/common';
import {ResourceArticleComp} from "./resource-article/ResourceArticleComp";
import {ResourceNewsComp} from "./resource-news/ResourceNewsComp";
import {ResourcePhotosComp} from "./resource-photos/ResourcePhotosComp";
import {ResourceReportComp} from "./resource-report/ResourceReportComp";
import {ResourceResearchComp} from "./resource-research/ResourceResearchComp";
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
import {MobileLibraryGalleryComp} from "./resource-photos/resource_photos_details/mobile-library/MobileLibraryGalleryComp";
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
import {AuthoritativeResearchComp} from "./resource-research/authoritative-research/AuthoritativeResearchComp";
import {DemocraticResearchComp} from "./resource-research/democratic-research/DemocraticResearchComp";
import {RevolutionisingResearchComp} from "./resource-research/revolutionising-research/RevolutionisingResearchComp";

@NgModule({
  declarations: [
    ResourceComponent,
    ResourceArticleComp,
    ResourceNewsComp,
    ResourcePhotosComp,
    ResourceReportComp,
    ResourceResearchComp,
    ResourceVideosComp,
    GlimpseOfAwardWinningComp,
    BeleghataSarkarBazarMilonSanghComp,
    TeamGalleryComp,
    OpenAirClassComp,
    SportsGalleryComp,
    WomenEmpowermentComp,
    ThroughDemocracyAwarenessComp,
    SkillDevelopmentComp,
    PromotingTechnologyComp,
    BlanketDistributionComp,
    CoronaVaccinationComp,
    CoronaPandemicComp,
    AwarenessComp,
    AnimalLovingComp,
    BirthdayCelebrationComp,
    BloodDonationCampGalleryComp,
    BricksSchoolComp,
    ChildHealthCheckupGalleryComp,
    ClothDistributionGalleryComp,
    AdultLiteracyComp,
    ArabicLanguageComp,
    AwarenessVectorBornComp,
    BengaliLanguageComp,
    CultureComp,
    DoorToDoorVisitComp,
    EducationGalleryComp,
    EnglishLanguageComp,
    EnvironmentGalleryComp,
    NightClassComp,
    OlChikiLanguageComp,
    FoodDistributionComp,
    HindiLanguageComp,
    MedicalCampComp,
    ReducePlasticAndRecyclingComp,
    SaveDrinkingWaterComp,
    ScienceAndTechnologyGalleryComp,
    SupportDisableChildComp,
    LoveAndPeaceComp,
    MobileLibraryGalleryComp,
    OrphanChildrenTeachingComp,
    OtherSupportGalleryComp,
    MotherEducationComp,
    NutritionalSupportGalleryComp,
    NutritionForAgePeoplePregnantMotherLactatingMothersAndChildrenComp,
    AuthoritativeResearchComp,
    DemocraticResearchComp,
    RevolutionisingResearchComp,
    ],

  imports: [
    CommonModule,
    ResourceRoutingModule,

  ],
  providers: [

  ]
})
export class ResourceModule {
}

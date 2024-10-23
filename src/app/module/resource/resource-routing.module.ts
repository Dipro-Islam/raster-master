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
  BloodDonationCampImgComp
} from "./resource-photos/resource_photos_details/blood-donation-camp/BloodDonationCampImgComp";



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
      component: BloodDonationCampImgComp,
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

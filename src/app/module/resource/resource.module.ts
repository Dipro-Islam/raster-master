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
    SkillDevelopmentComp
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

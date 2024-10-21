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
      path: 'resource_photos_details/glimpse_of_award_winning',
      component: GlimpseOfAwardWinningComp,
    },
    {
      path: 'resource_photos_details/beleghata_sarkar_bazar_milon_sangh',
      component: BeleghataSarkarBazarMilonSanghComp,
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

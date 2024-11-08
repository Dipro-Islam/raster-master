import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {About_usComponent} from './about_us.component';
import {WhoWeAreComp} from "./who-we-are/WhoWeAreComp";
import {OurAchievementComp} from "./our-achivement/OurAchievementComp";
import {OurWorkplaceComp} from "./our-workplace/OurWorkplaceComp";
import {OurTeamComp} from "./our-team/OurTeamComp";
import {OurFounderComp} from "./our-team/our-founder/OurFounderComp";
import {FaqComp} from "./faq/FaqComp";
import {ContactUsComp} from "./contact_us/ContactUsComp";
import {AwardsThatHonorComp} from "./our-achivement/awards-that-honor/AwardsThatHonorComp";
import {AchievementsThatDriveComp} from "./our-achivement/achievements-that-drive/AchievementsThatDriveComp";
import {TheHeartOfLearningComp} from "./our-workplace/the-heart-of-learning/TheHeartOfLearningComp";
import {BuildingHealthierLivesComp} from "./our-workplace/building-healthier-lives/BuildingHealthierLivesComp";
import {ProtectingOurPlanetComp} from "./our-workplace/protecting-our-planet/ProtectingOurPlanetComp";
import {OurAdvisorOneComp} from "./our-team/our-advisor-1/OurAdvisorOneComp";
import {OurAdvisorTwoComp} from "./our-team/our-advisor-2/OurAdvisorTwoComp";



const routes: Routes = [{
  path: '',
  component: About_usComponent,
  children: [
    {
      path: 'who_we_are',
      component: WhoWeAreComp,
    },
    // our achievement
    {
      path: 'our_achievement',
      component: OurAchievementComp,
    },
    {
      path: 'our_achievement/awards_that_honor',
      component: AwardsThatHonorComp,
    },
    {
      path: 'our_achievement/achievements_that_drive',
      component: AchievementsThatDriveComp,
    },
    // our workplace
    {
      path: 'our_workplace',
      component: OurWorkplaceComp,
    },
    {
      path: 'our_workplace/the_heart_of_learning',
      component: TheHeartOfLearningComp,
    },
    {
      path: 'our_workplace/building_healthier_lives',
      component: BuildingHealthierLivesComp,
    },
    {
      path: 'our_workplace/protecting_our_planet',
      component: ProtectingOurPlanetComp,
    },
    // our team
    {
      path: 'our_team',
      component: OurTeamComp,
    },
    // our founder
    {
      path: 'our_team/Deep_Narayan_Nayak',
      component: OurFounderComp,
    },
    // our advisor
    {
      path: 'our_team/Dr_Chanchal_Kumar_Biswas',
      component: OurAdvisorOneComp,
    },
    {
      path: 'our_team/Ajai_Shreevatsa',
      component: OurAdvisorTwoComp,
    },
    // FAQ
    {
      path: 'faq',
      component: FaqComp,
    },
    // contact us
    {
      path: 'contact_us',
      component: ContactUsComp,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class About_usRoutingModule {
}

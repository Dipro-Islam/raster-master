import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {About_usComponent} from './about_us.component';
import {WhoWeAreComp} from "./who-we-are/WhoWeAreComp";
import {OurAchievementComp} from "./our-achivement/OurAchievementComp";
import {OurWorkplaceComp} from "./our-workplace/OurWorkplaceComp";
import {OurTeamComp} from "./our-team/OurTeamComp";
import {ProfileComp} from "./profile/ProfileComp";
import {FaqComp} from "./faq/FaqComp";
import {ContactUsComp} from "./contact_us/ContactUsComp";
import {AwardsThatHonorComp} from "./our-achivement/awards-that-honor/AwardsThatHonorComp";
import {AchievementsThatDriveComp} from "./our-achivement/achievements-that-drive/AchievementsThatDriveComp";
import {TheHeartOfLearningComp} from "./our-workplace/the-heart-of-learning/TheHeartOfLearningComp";
import {BuildingHealthierLivesComp} from "./our-workplace/building-healthier-lives/BuildingHealthierLivesComp";
import {ProtectingOurPlanetComp} from "./our-workplace/protecting-our-planet/ProtectingOurPlanetComp";



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
    {
      path: 'our_team/profile',
      component: ProfileComp,
    },
    {
      path: 'faq',
      component: FaqComp,
    },
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

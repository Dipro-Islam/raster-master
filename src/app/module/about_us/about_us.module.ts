import {NgModule} from '@angular/core';
import {About_usComponent} from './about_us.component';
import {About_usRoutingModule} from './about_us-routing.module';
import {CommonModule} from '@angular/common';
import {ContactUsComp} from "./contact_us/ContactUsComp";
import {FaqComp} from "./faq/FaqComp";
import {OurAchievementComp} from "./our-achivement/OurAchievementComp";
import {OurTeamComp} from "./our-team/OurTeamComp";
import {OurWorkplaceComp} from "./our-workplace/OurWorkplaceComp";
import {OurFounderComp} from "./our-team/our-founder/OurFounderComp";
import {WhoWeAreComp} from "./who-we-are/WhoWeAreComp";
import {AwardsThatHonorComp} from "./our-achivement/awards-that-honor/AwardsThatHonorComp";
import {AchievementsThatDriveComp} from "./our-achivement/achievements-that-drive/AchievementsThatDriveComp";
import {ProtectingOurPlanetComp} from "./our-workplace/protecting-our-planet/ProtectingOurPlanetComp";
import {BuildingHealthierLivesComp} from "./our-workplace/building-healthier-lives/BuildingHealthierLivesComp";
import {TheHeartOfLearningComp} from "./our-workplace/the-heart-of-learning/TheHeartOfLearningComp";
import {OurAdvisorOneComp} from "./our-team/our-advisor-1/OurAdvisorOneComp";
import {OurAdvisorTwoComp} from "./our-team/our-advisor-2/OurAdvisorTwoComp";

@NgModule({
  declarations: [
    About_usComponent,
    ContactUsComp,
    FaqComp,
    OurAchievementComp,
    OurTeamComp,
    OurWorkplaceComp,
    OurFounderComp,
    WhoWeAreComp,
    AwardsThatHonorComp,
    AchievementsThatDriveComp,
    ProtectingOurPlanetComp,
    BuildingHealthierLivesComp,
    TheHeartOfLearningComp,
    OurAdvisorOneComp,
    OurAdvisorTwoComp,
    ],

  imports: [
    CommonModule,
    About_usRoutingModule,

  ],
  providers: [

  ]
})
export class About_usModule {
}

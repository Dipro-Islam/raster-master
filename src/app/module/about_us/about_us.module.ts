import {NgModule} from '@angular/core';
import {About_usComponent} from './about_us.component';
import {About_usRoutingModule} from './about_us-routing.module';
import {CommonModule} from '@angular/common';
import {ContactUsComp} from "./contact_us/ContactUsComp";
import {FaqComp} from "./faq/FaqComp";
import {OurAchievementComp} from "./our-achivement/OurAchievementComp";
import {OurTeamComp} from "./our-team/OurTeamComp";
import {OurWorkplaceComp} from "./our-workplace/OurWorkplaceComp";
import {ProfileComp} from "./profile/ProfileComp";
import {WhoWeAreComp} from "./who-we-are/WhoWeAreComp";
import {AwardsThatHonorComp} from "./our-achivement/awards-that-honor/AwardsThatHonorComp";
import {AchievementsThatDriveComp} from "./our-achivement/achievements-that-drive/AchievementsThatDriveComp";
import {ProtectingOurPlanetComp} from "./our-workplace/protecting-our-planet/ProtectingOurPlanetComp";
import {BuildingHealthierLivesComp} from "./our-workplace/building-healthier-lives/BuildingHealthierLivesComp";
import {TheHeartOfLearningComp} from "./our-workplace/the-heart-of-learning/TheHeartOfLearningComp";

@NgModule({
  declarations: [
    About_usComponent,
    ContactUsComp,
    FaqComp,
    OurAchievementComp,
    OurTeamComp,
    OurWorkplaceComp,
    ProfileComp,
    WhoWeAreComp,
    AwardsThatHonorComp,
    AchievementsThatDriveComp,
    ProtectingOurPlanetComp,
    BuildingHealthierLivesComp,
    TheHeartOfLearningComp
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

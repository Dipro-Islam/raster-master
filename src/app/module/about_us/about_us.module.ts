import {NgModule} from '@angular/core';
import {About_usComponent} from './about_us.component';
import {About_usRoutingModule} from './about_us-routing.module';
import {CommonModule} from '@angular/common';
import {ContactUsComp} from "./contact_us/ContactUsComp";
import {FaqComp} from "./faq/FaqComp";
import {OurAchievementComp} from "./our-achivement/OurAchievementComp";
import {OurTeamComp} from "./our-team/OurTeamComp";
import {OurWorkplaceComp} from "./our-workplace/OurWorkplaceComp";
import {OurWorkplaceDetailsComp} from "./our-workplace-details/OurWorkplaceDetailsComp";
import {ProfileComp} from "./profile/ProfileComp";
import {WhoWeAreComp} from "./who-we-are/WhoWeAreComp";

@NgModule({
  declarations: [
    About_usComponent,
    ContactUsComp,
    FaqComp,
    OurAchievementComp,
    OurTeamComp,
    OurWorkplaceComp,
    OurWorkplaceDetailsComp,
    ProfileComp,
    WhoWeAreComp
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

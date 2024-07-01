import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {About_usComponent} from './about_us.component';
import {WhoWeAreComp} from "./who-we-are/WhoWeAreComp";
import {OurAchievementComp} from "./our-achivement/OurAchievementComp";
import {OurWorkplaceComp} from "./our-workplace/OurWorkplaceComp";
import {OurWorkplaceDetailsComp} from "./our-workplace-details/OurWorkplaceDetailsComp";
import {OurTeamComp} from "./our-team/OurTeamComp";
import {ProfileComp} from "./profile/ProfileComp";
import {FaqComp} from "./faq/FaqComp";
import {ContactUsComp} from "./contact_us/ContactUsComp";



const routes: Routes = [{
  path: '',
  component: About_usComponent,
  children: [
    {
      path: 'who_we_are',
      component: WhoWeAreComp,
    },
    {
      path: 'our_achievement',
      component: OurAchievementComp,
    },
    {
      path: 'our_workplace',
      component: OurWorkplaceComp,
    },
    {
      path: 'our_workplace/workplace_details',
      component: OurWorkplaceDetailsComp,
    },
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

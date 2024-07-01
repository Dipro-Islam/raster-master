import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Get_involvedComponent} from './get_involved.component';
import {DonationComp} from "./donation/DonationComp";
import {ThankYouComp} from "./thank-you/ThankYouComp";
import {BeAVolunteerComp} from "./be-a-volunteer/BeAVolunteerComp";
import {CollaborateComp} from "./collaborate/CollaborateComp";



const routes: Routes = [{
  path: '',
  component: Get_involvedComponent,
  children: [
    {
      path: 'donation',
      component: DonationComp,
    },
    {
      path: 'thank_you',
      component: ThankYouComp,
    },
    {
      path: 'be_a_volunteer',
      component: BeAVolunteerComp,
    },
    {
      path: 'collaborate',
      component: CollaborateComp,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Get_involvedRoutingModule {
}

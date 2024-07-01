import {NgModule} from '@angular/core';
import {Get_involvedComponent} from './get_involved.component';
import {Get_involvedRoutingModule} from './get_involved-routing.module';
import {CommonModule} from '@angular/common';
import {BeAVolunteerComp} from "./be-a-volunteer/BeAVolunteerComp";
import {CollaborateComp} from "./collaborate/CollaborateComp";
import {DonationComp} from "./donation/DonationComp";
import {ThankYouComp} from "./thank-you/ThankYouComp";

@NgModule({
  declarations: [
    Get_involvedComponent,
    BeAVolunteerComp,
    CollaborateComp,
    DonationComp,
    ThankYouComp

    ],

  imports: [
    CommonModule,
    Get_involvedRoutingModule,

  ],
  providers: [

  ]
})
export class Get_involvedModule {
}

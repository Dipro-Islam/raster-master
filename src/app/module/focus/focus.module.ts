import {NgModule} from '@angular/core';
import {FocusComponent} from './focus.component';
import {FocusRoutingModule} from './focus-routing.module';
import {CommonModule} from '@angular/common';
import {FocusChildComp} from "./focus-child/FocusChildComp";
import {FocusEducationComp} from "./focus-education/FocusEducationComp";
import {FocusEnvironmentComp} from "./focus-environment/FocusEnvironmentComp";
import {FocusGenderEqualityComp} from "./focus-gender-equality/FocusGenderEqualityComp";
import {FocusHealthComp} from "./focus-health/FocusHealthComp";
import {FocusNutritionComp} from "./focus-nutrition/FocusNutritionComp";
import {FocusWorldPeaceComp} from "./focus-world-peace/FocusWorldPeaceComp";
import {FocusYouthComp} from "./focus-youth/FocusYouthComp";
import { EducationForWomenComp } from './focus-education/education-for-women/EducationForWomenComp';
@NgModule({
  declarations: [
    FocusComponent,
    FocusChildComp,
    FocusEducationComp,
    FocusEnvironmentComp,
    FocusGenderEqualityComp,
    FocusHealthComp,
    FocusNutritionComp,
    FocusWorldPeaceComp,
    FocusYouthComp,
    EducationForWomenComp,

    ],

  imports: [
    CommonModule,
    FocusRoutingModule,

  ],
  providers: [

  ]
})
export class FocusModule {
}

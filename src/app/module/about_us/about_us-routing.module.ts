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
import {ChanchalKumarComp} from "./our-team/chanchal-kumar/ChanchalKumarComp";
import {AjaiShreevatsaComp} from "./our-team/ajai-shreevatsa/AjaiShreevatsaComp";
import {SukanyaPalComp} from "./our-team/sukanya-pal/SukanyaPalComp";
import {JhumaPatraComp} from "./our-team/jhuma-patra/JhumaPatraComp";
import {JoydevMondalComp} from "./our-team/joydev-mondal/JoydevMondalComp";
import {KaberiGhatakComp} from "./our-team/kaberi-ghatak/KaberiGhatakComp";
import {KohinurBibiComp} from "./our-team/kohinur-bibi/KohinurBibiComp";
import {ManaiMukherjeeComp} from "./our-team/manai-mukherjee/ManaiMukherjeeComp";
import {MohitoshMondalComp} from "./our-team/mohitosh-mondal/MohitoshMondalComp";
import {MuslimaKhatunComp} from "./our-team/muslima-khatun/MuslimaKhatunComp";
import {RumpaChakrabortyComp} from "./our-team/rumpa-chakraborty/RumpaChakrabortyComp";
import {SahirunBibiComp} from "./our-team/sahirun-bibi/SahirunBibiComp";
import {SaliniGiriComp} from "./our-team/salini-giri/SaliniGiriComp";
import {SharminRahmanComp} from "./our-team/sharmin-rahman/SharminRahmanComp";
import {ShipraMondalComp} from "./our-team/shipra-mondal/ShipraMondalComp";
import {SoumayanBiswasComp} from "./our-team/soumayan-biswas/SoumayanBiswasComp";
import {TapasMondalComp} from "./our-team/tapas-mondal/TapasMondalComp";
import {TarikullahComp} from "./our-team/tarikullah/TarikullahComp";
import {DeepNarayanComp} from "./our-team/deep-narayan/DeepNarayanComp";



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
      component: ChanchalKumarComp,
    },
    {
      path: 'our_team/Ajai_Shreevatsa',
      component: AjaiShreevatsaComp,
    },
    // Our Researcher
    {
      path: 'our_team/Researcher_Deep_Narayan_Nayak',
      component: DeepNarayanComp,
    },
    {
      path: 'our_team/Dr_Sukanya_Pal',
      component: SukanyaPalComp,
    },
    {
      path: 'our_team/Dr_Jhuma_Patra',
      component: JhumaPatraComp,
    },
    {
      path: 'our_team/Joydev_Mondal',
      component: JoydevMondalComp,
    },
    {
      path: 'our_team/Kaberi_Ghatak',
      component: KaberiGhatakComp,
    },
    {
      path: 'our_team/Kohinur_Bibi_Molla',
      component: KohinurBibiComp,
    },
    {
      path: 'our_team/Manai_Mukherjee',
      component: ManaiMukherjeeComp,
    },
    {
      path: 'our_team/Mohitosh_Mondal',
      component: MohitoshMondalComp,
    },
    {
      path: 'our_team/Muslima_Khatun',
      component: MuslimaKhatunComp,
    },
    {
      path: 'our_team/Rumpa_Chakraborty',
      component: RumpaChakrabortyComp,
    },
    {
      path: 'our_team/Sahirun_Bibi',
      component: SahirunBibiComp,
    },
    {
      path: 'our_team/Salini_Giri',
      component: SaliniGiriComp,
    },
    {
      path: 'our_team/Sharmin_Rahman_Sweet',
      component: SharminRahmanComp,
    },
    {
      path: 'our_team/Shipra_Mondal',
      component: ShipraMondalComp,
    },
    {
      path: 'our_team/Soumayan_Biswas',
      component: SoumayanBiswasComp,
    },
    {
      path: 'our_team/Tapas_Mondal',
      component: TapasMondalComp,
    },
    {
      path: 'our_team/Md_Tarikullah',
      component: TarikullahComp,
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

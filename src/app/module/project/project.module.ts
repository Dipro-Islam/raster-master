import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {CommonModule} from '@angular/common';
import {CollaboratedProjectComp} from "./collaborated-project/CollaboratedProjectComp";
import {CompletedProjectComp} from "./completed-project/CompletedProjectComp";
import {UpcomingProjectComp} from "./upcoming-project/UpcomingProjectComp";
import {OngoingProjectComp} from "./ongoing-project/OngoingProjectComp";
import {DevelopmentProgramComp} from "./upcoming-project/development-program/DevelopmentProgramComp";
import {GreenWorldComp} from "./upcoming-project/green-world/GreenWorldComp";
import {HarbourRenewalComp} from "./upcoming-project/harbour-renewal/HarbourRenewalComp";
import {OldAgeHomeComp} from "./upcoming-project/old-age-home/OldAgeHomeComp";
import {RenewableEnergyComp} from "./upcoming-project/renewable-energy/RenewableEnergyComp";
import {ReplacementPlasticComp} from "./upcoming-project/replacement-plastic/ReplacementPlasticComp";
import {RiverAndPondComp} from "./upcoming-project/river-and-pond/RiverAndPondComp";
import {RuralInfrastructureComp} from "./upcoming-project/rural-infrastructure/RuralInfrastructureComp";
import {RuralTransformationComp} from "./upcoming-project/rural-transformation/RuralTransformationComp";
import {WaterImprovementComp} from "./upcoming-project/water-improvement/WaterImprovementComp";
import {CleanWaterAndSanitationComp} from "./collaborated-project/clean-water-and-sanitation/CleanWaterAndSanitationComp";
import {RenewableEnergyAccessComp} from "./collaborated-project/renewable-energy-access/RenewableEnergyAccessComp";
import {ClimateResilienceComp} from "./collaborated-project/climate-resilience/ClimateResilienceComp";
import {EconomicEmpowermentComp} from "./collaborated-project/economic-empowerment/EconomicEmpowermentComp";
import {GlobalEducationInitiativeComp} from "./collaborated-project/global-education-initiative/GlobalEducationInitiativeComp";
import {PowerOfCollaborationComp} from "./collaborated-project/power-of-collaboration/PowerOfCollaborationComp";
import {RuralYouthInitiativeComp} from "./collaborated-project/rural-youth-initiative/RuralYouthInitiativeComp";
import {SocialWelfareSocietyComp} from "./collaborated-project/social-welfare-society/SocialWelfareSocietyComp";
import {SustainableAgricultureComp} from "./collaborated-project/sustainable-agriculture/SustainableAgricultureComp";
import {CompletedBlanketDistributionComp} from "./completed-project/completed-blanket-distribution/completedBlanketDistributionComp";
import {CompletedCoronaVaccinationDriveComp} from "./completed-project/completed-corona-vaccination-drive/CompletedCoronaVaccinationDriveComp";
import {CompletedDurgaPujaPandalComp} from "./completed-project/completed-durga-puja-pandal/CompletedDurgaPujaPandalComp";
import {CompletedNutritionalSupportComp} from "./completed-project/completed-nutritional-support/CompletedNutritionalSupportComp";
import {CompletedVaccineRathComp} from "./completed-project/completed-vaccine-rath/CompletedVaccineRathComp";
import {CompletedFutureImpactComp} from "./completed-project/completed-future-impact/CompletedFutureImpactComp";
import {AnimalLovingProjectComp} from "./ongoing-project/animal-loving-project/AnimalLovingProjectComp";
import {AwarenessCampaignsComp} from "./ongoing-project/awareness-campaigns/AwarenessCampaignsComp";
import {BirthdayCelebrationsComp} from "./ongoing-project/birthday-celebrations/BirthdayCelebrationsComp";
import {BloodDonationDrivesComp} from "./ongoing-project/blood-donation-drives/BloodDonationDrivesComp";
import {BoardExamCertificationComp} from "./ongoing-project/board-exam-certification/BoardExamCertificationComp";
import {BuildingAHarmoniousComp} from "./ongoing-project/building-a-harmonious/BuildingAHarmoniousComp";
import {BuildingFoundationsComp} from "./ongoing-project/building-foundations/BuildingFoundationsComp";
import {CelebratingDiversityComp} from "./ongoing-project/celebrating-diversity/CelebratingDiversityComp";
import {ChildrenTeachingComp} from "./ongoing-project/children-teaching/ChildrenTeachingComp";
import {ClothDistributionDignitComp} from "./ongoing-project/cloth-distribution-dignit/ClothDistributionDignitComp";
import {EmpoweringMatriarchsComp} from "./ongoing-project/empowering-matriarchs/EmpoweringMatriarchsComp";
import {FuelingGrowthComp} from "./ongoing-project/fueling-growth/FuelingGrowthComp";
import {KnowledgeAnywhereComp} from "./ongoing-project/knowledge-anywhere/KnowledgeAnywhereComp";
import {KnowledgeForEmpowermentComp} from "./ongoing-project/knowledge-for-empowerment/KnowledgeForEmpowermentComp";
import {PersonalizingCareComp} from "./ongoing-project/personalizing-care/PersonalizingCareComp";
import {StandingStrongTogetherComp} from "./ongoing-project/standing-strong-together/StandingStrongTogetherComp";
import {StewardshipForASustainableComp} from "./ongoing-project/stewardship-for-a-sustainable/StewardshipForASustainableComp";
import {ScholarshipProgramProjectComp} from "./ongoing-project/scholarship-program-project/ScholarshipProgramProjectComp";





@NgModule({
  declarations: [
    ProjectComponent,
    CollaboratedProjectComp,
    CompletedProjectComp,
    OngoingProjectComp,
    UpcomingProjectComp,
    DevelopmentProgramComp,
    GreenWorldComp,
    HarbourRenewalComp,
    OldAgeHomeComp,
    RenewableEnergyComp,
    ReplacementPlasticComp,
    RiverAndPondComp,
    RuralInfrastructureComp,
    RuralTransformationComp,
    WaterImprovementComp,
    CleanWaterAndSanitationComp,
    ClimateResilienceComp,
    EconomicEmpowermentComp,
    GlobalEducationInitiativeComp,
    PowerOfCollaborationComp,
    RenewableEnergyAccessComp,
    RuralYouthInitiativeComp,
    SocialWelfareSocietyComp,
    SustainableAgricultureComp,
    CompletedBlanketDistributionComp,
    CompletedCoronaVaccinationDriveComp,
    CompletedDurgaPujaPandalComp,
    CompletedNutritionalSupportComp,
    CompletedVaccineRathComp,
    CompletedFutureImpactComp,
    AnimalLovingProjectComp,
    AwarenessCampaignsComp,
    BirthdayCelebrationsComp,
    BloodDonationDrivesComp,
    BoardExamCertificationComp,
    BuildingAHarmoniousComp,
    BuildingFoundationsComp,
    CelebratingDiversityComp,
    ChildrenTeachingComp,
    ClothDistributionDignitComp,
    EmpoweringMatriarchsComp,
    FuelingGrowthComp,
    KnowledgeAnywhereComp,
    KnowledgeForEmpowermentComp,
    PersonalizingCareComp,
    ScholarshipProgramProjectComp,
    StandingStrongTogetherComp,
    StewardshipForASustainableComp
    ],

  imports: [
    CommonModule,
    ProjectRoutingModule,
  ],
  providers: [

  ]
})
export class ProjectModule {
}

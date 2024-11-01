import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';
import {OngoingProjectComp} from "./ongoing-project/OngoingProjectComp";
import {CompletedProjectComp} from "./completed-project/CompletedProjectComp";
import {UpcomingProjectComp} from "./upcoming-project/UpcomingProjectComp";
import {CollaboratedProjectComp} from "./collaborated-project/CollaboratedProjectComp";
import {DevelopmentProgramComp} from "./upcoming-project/development-program/DevelopmentProgramComp";
import {GreenWorldComp} from "./upcoming-project/green-world/GreenWorldComp";
import {HarbourRenewalComp} from "./upcoming-project/harbour-renewal/HarbourRenewalComp";
import {OldAgeHomeComp} from "./upcoming-project/old-age-home/OldAgeHomeComp";
import {RuralInfrastructureComp} from "./upcoming-project/rural-infrastructure/RuralInfrastructureComp";
import {RuralTransformationComp} from "./upcoming-project/rural-transformation/RuralTransformationComp";
import {RiverAndPondComp} from "./upcoming-project/river-and-pond/RiverAndPondComp";
import {WaterImprovementComp} from "./upcoming-project/water-improvement/WaterImprovementComp";
import {RenewableEnergyComp} from "./upcoming-project/renewable-energy/RenewableEnergyComp";
import {ReplacementPlasticComp} from "./upcoming-project/replacement-plastic/ReplacementPlasticComp";
import {
  CleanWaterAndSanitationComp
} from "./collaborated-project/clean-water-and-sanitation/CleanWaterAndSanitationComp";
import {ClimateResilienceComp} from "./collaborated-project/climate-resilience/ClimateResilienceComp";
import {EconomicEmpowermentComp} from "./collaborated-project/economic-empowerment/EconomicEmpowermentComp";
import {
  GlobalEducationInitiativeComp
} from "./collaborated-project/global-education-initiative/GlobalEducationInitiativeComp";
import {PowerOfCollaborationComp} from "./collaborated-project/power-of-collaboration/PowerOfCollaborationComp";
import {RenewableEnergyAccessComp} from "./collaborated-project/renewable-energy-access/RenewableEnergyAccessComp";
import {RuralYouthInitiativeComp} from "./collaborated-project/rural-youth-initiative/RuralYouthInitiativeComp";
import {SocialWelfareSocietyComp} from "./collaborated-project/social-welfare-society/SocialWelfareSocietyComp";
import {SustainableAgricultureComp} from "./collaborated-project/sustainable-agriculture/SustainableAgricultureComp";
import {CompletedVaccineRathComp} from "./completed-project/completed-vaccine-rath/CompletedVaccineRathComp";
import {
  CompletedNutritionalSupportComp
} from "./completed-project/completed-nutritional-support/CompletedNutritionalSupportComp";
import {
  CompletedDurgaPujaPandalComp
} from "./completed-project/completed-durga-puja-pandal/CompletedDurgaPujaPandalComp";
import {
  CompletedCoronaVaccinationDriveComp
} from "./completed-project/completed-corona-vaccination-drive/CompletedCoronaVaccinationDriveComp";
import {
  CompletedBlanketDistributionComp
} from "./completed-project/completed-blanket-distribution/completedBlanketDistributionComp";
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
import {PrioritizingYoungLivesComp} from "./ongoing-project/prioritizing-young-lives/PrioritizingYoungLivesComp";
import {StandingStrongTogetherComp} from "./ongoing-project/standing-dtrong-together/StandingStrongTogetherComp";
import {
  StewardshipForASustainableComp
} from "./ongoing-project/stewardship-for-a-sustainable/StewardshipForASustainableComp";



const routes: Routes = [{
  path: '',
  component: ProjectComponent,
  children: [
    // ongoing projects
    {
      path: 'ongoing_project',
      component: OngoingProjectComp,
    },
    {
      path: 'ongoing_project/animal_loving_project',
      component: OngoingProjectComp,
    },
    {
      path: 'ongoing_project/awareness_campaigns',
      component: AnimalLovingProjectComp,
    },
    {
      path: 'ongoing_project/birthday-celebrations',
      component: BirthdayCelebrationsComp,
    },
    {
      path: 'ongoing_project/blood_donation_drives',
      component: BloodDonationDrivesComp,
    },
    {
      path: 'ongoing_project/board_exam_certification',
      component: BoardExamCertificationComp,
    },
    {
      path: 'ongoing_project/building_a_harmonious',
      component: BuildingAHarmoniousComp,
    },
    {
      path: 'ongoing_project/building_foundations',
      component: BuildingFoundationsComp,
    },
    {
      path: 'ongoing_project/celebrating_diversity',
      component: CelebratingDiversityComp,
    },
    {
      path: 'ongoing_project/children_teaching',
      component: ChildrenTeachingComp,
    },
    {
      path: 'ongoing_project/cloth_distribution_dignit',
      component: ClothDistributionDignitComp,
    },
    {
      path: 'ongoing_project/empowering_matriarchs',
      component: EmpoweringMatriarchsComp,
    },
    {
      path: 'ongoing_project/fueling_growth',
      component: FuelingGrowthComp,
    },
    {
      path: 'ongoing_project/knowledge_anywhere',
      component: KnowledgeAnywhereComp,
    },
    {
      path: 'ongoing_project/knowledge_for_empowerment',
      component: KnowledgeForEmpowermentComp,
    },
    {
      path: 'ongoing_project/personalizing_care',
      component: PersonalizingCareComp,
    },
    {
      path: 'ongoing_project/prioritizing_young_lives',
      component: PrioritizingYoungLivesComp,
    },
    {
      path: 'ongoing_project/standing_strong_together',
      component: StandingStrongTogetherComp,
    },
    {
      path: 'ongoing_project/stewardship_for_a_sustainable',
      component: StewardshipForASustainableComp,
    },
    // completed projects
    {
      path: 'completed_project',
      component: CompletedProjectComp,
    },
    {
      path: 'completed_project/completed_blanket_distribution',
      component: CompletedBlanketDistributionComp,
    },
    {
      path: 'completed_project/completed_corona_vaccination_drive',
      component: CompletedCoronaVaccinationDriveComp,
    },
    {
      path: 'completed_project/completed_durga_puja_pandal',
      component: CompletedDurgaPujaPandalComp,
    },
    {
      path: 'completed_project/completed_nutritional_support',
      component: CompletedNutritionalSupportComp,
    },
    {
      path: 'completed_project/completed_vaccine_rath',
      component: CompletedVaccineRathComp,
    },
    // upcoming projects
    {
      path: 'upcoming_project',
      component: UpcomingProjectComp,
    },
    {
      path: 'upcoming_project/old_age_home',
      component: OldAgeHomeComp,
    },
    {
      path: 'upcoming_project/rural_infrastructure',
      component: RuralInfrastructureComp,
    },
    {
      path: 'upcoming_project/rural_transformation',
      component: RuralTransformationComp,
    },
    {
      path: 'upcoming_project/harbour_renewal',
      component: HarbourRenewalComp,
    },
    {
      path: 'upcoming_project/river_and_pond',
      component: RiverAndPondComp,
    },
    {
      path: 'upcoming_project/water_improvement',
      component: WaterImprovementComp,
    },
    {
      path: 'upcoming_project/renewable_energy',
      component: RenewableEnergyComp,
    },
    {
      path: 'upcoming_project/development_program',
      component: DevelopmentProgramComp,
    },
    {
      path: 'upcoming_project/green_world',
      component: GreenWorldComp,
    },

    {
      path: 'upcoming_project/replacement_plastic',
      component: ReplacementPlasticComp,
    },

    // collaborated projects
    {
      path: 'collaborated_project',
      component: CollaboratedProjectComp,
    },
    {
      path: 'collaborated_project/clean_water_and_sanitation',
      component: CleanWaterAndSanitationComp,
    },
    {
      path: 'collaborated_project/climate_resilience',
      component: ClimateResilienceComp,
    },
    {
      path: 'collaborated_project/economic_empowerment',
      component: EconomicEmpowermentComp,
    },
    {
      path: 'collaborated_project/global_education_initiative',
      component: GlobalEducationInitiativeComp,
    },
    {
      path: 'collaborated_project/power_of_collaboration',
      component: PowerOfCollaborationComp,
    },
    {
      path: 'collaborated_project/renewable_energy_access',
      component: RenewableEnergyAccessComp,
    },
    {
      path: 'collaborated_project/rural_youth_initiative',
      component: RuralYouthInitiativeComp,
    },
    {
      path: 'collaborated_project/social_welfare_society',
      component: SocialWelfareSocietyComp,
    },
    {
      path: 'collaborated_project/sustainable_agriculture',
      component: SustainableAgricultureComp,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {
}

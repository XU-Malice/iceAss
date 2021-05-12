import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { TeamComponent } from './team/team.component';
import { TeamResultComponent } from './team-result/team-result.component';
import { PredictionTeamComponent } from './prediction-team/prediction-team.component';

const routes: Routes = [
    { path: 'ViewLeagueTable', component: ViewLeagueTableComponent},
    { path: 'Team', component: TeamComponent},
    { path: 'TeamResult', component: TeamResultComponent},
    { path: 'PredictionTeam', component: PredictionTeamComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

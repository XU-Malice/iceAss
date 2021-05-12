import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { TeamComponent } from './team/team.component';
import { TeamResultComponent } from './team-result/team-result.component';
import { PredictionTeamComponent } from './prediction-team/prediction-team.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    TeamComponent,
    PredictionTeamComponent,
    TeamResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

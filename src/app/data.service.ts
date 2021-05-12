import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Team } from './team';

import { Game } from './game';

import { Tip } from './tip';

import { Standings } from './standings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // 'https://api.squiggle.com.au/?q=games;year=2021;complete=100' - complete games 
  // 'https://api.squiggle.com.au/?q=games;year=2021;complete=!100' - not complete games 


  getTeams(): Observable<Team[]>{
    return this.http.get('https://api.squiggle.com.au/?q=teams').
      pipe(map((data: any) => data.teams.map ((item: any) =>
        new Team(
          item.name,
          item.logo,
          item.id,
          item.abbrev
          ))))
  }

  getGames(): Observable<Game[]>{
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2021').
      pipe(map((data: any) => data.games.map ((item: any) =>
        new Game(
          item.is_grand_final,
          item.hbehinds,
          item.abehinds,
          item.hteam,
          item.round,
          item.hgoals,
          item.winnerteamid,
          item.ateamid,
          item.is_final,
          item.venue,
          item.date,
          item.year,
          item.complete,
          item.ascore,
          item.tz,
          item.updated,
          item.agoals,
          item.id,
          item.ateam,
          item.winner,
          item.hscore,
          item.hteamid,
          item.roundname,
          item.localtime
          ))))
        }
          
  getTips(): Observable<Tip[]>{
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2021;round=20').
      pipe(map((data: any) => data.tips.map ((item: any) =>
        new Tip(
          item.tip,
          item.round,
          item.ateamid,
          item.venue,
          item.correct,
          item.date,
          item.margin,
          item.err,
          item.hteam,
          item.tipteamid,
          item.source,
          item.confidence,
          item.ateam,
          item.bits,
          item.hteamid,
          item.sourceid,
          item.year,
          item.updated,
          item.hconfidence,  
          item.gameid,	
          item.hmargin 
          ))))
  }

  getStandings(): Observable<Standings[]>{
    return this.http.get('https://api.squiggle.com.au/?q=standings;year=2021').
      pipe(map((data: any) => data.standings.map ((item: any) =>
        new Standings(
          item.draws,
          item.against,
          item.played,
          item.name,
          item.behinds_against,
          item.percentage,
          item.losses,
          item.behinds_for,
          item.pts,
          item.goals_against,
          item.id,
          item.wins,
          item.rank,
          item.goals_for
          ))))
  }


}

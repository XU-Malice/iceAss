import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Game } from '../game';

import { DataService } from '../data.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams!: Team[];
  selectedTeam!: Team;
  game!: Game[];



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.getAFLTeams();
    }
  
  onSelect(team: Team): void {
      this.selectedTeam = team;
    }
  
  getAFLTeams(): void {
      this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
    }

}

import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { Team } from '../team';
import { Game } from '../game';
import { Tip } from '../tip';

import { DataService } from '../data.service';

@Component({
  selector: 'app-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.css']
})
export class TeamResultComponent implements OnInit {
    games!:Game[];
    incompleteGames!: Game[];
    wonGames!:Game[];
    tip!:Tip[];
    @Input() team!: Team;
    rivalTeams!: Team[];
    selectedRivalTeam!: Team;
    rivalGames!: Game[];
    TeamName!:Team;
    lostGames!:Game[]; 

    constructor(private dataService: DataService) { }
  
    ngOnChanges(changes: SimpleChanges) {
      if (changes['team']) {
        this.getcompleteGames();
        this.getUncompleteGames();
        this.getWonGames();
        this.getTip();
        this.getRivalTeams();
        this.getRivalGames();
        this.getTeamName();
        this.getLostGames();
      }
    }
  
    ngOnInit(): void {
    }

    getTeamName(): void{
    this.TeamName = this.team;
  }

    getcompleteGames(): void {
      this.dataService.getGames().subscribe(temp => { 
        var tempArr: Game[] = [];
  
        temp.forEach(element => {
          if((element.hteamid == this.team.id || element.ateamid == this.team.id) && element.complete == 100) tempArr.push(element);
        });
        
        this.games = tempArr;    
      });
    }

    getUncompleteGames(): void {
        this.dataService.getGames().subscribe(temp => { 
          var tempArr: Game[] = [];
    
          temp.forEach(element => {
            if((element.hteamid == this.team.id || element.ateamid == this.team.id) && element.complete != 100) tempArr.push(element);
          });
          
          this.incompleteGames = tempArr.slice(0,4);    
        });
      }

      getWonGames(): void {
          this.dataService.getGames().subscribe(temp => { 
            var tempArr: Game[] = [];
      
            temp.forEach(element => {
              if((element.winnerteamid == this.team.id) && element.complete == 100) tempArr.push(element);
            });
            
            this.wonGames = tempArr;    
          });
      }
        getLostGames(): void {
            this.dataService.getGames().subscribe(temp => { 
              var tempArr: Game[] = [];
        
              temp.forEach(element => {
                if((element.hteamid == this.team.id || element.ateamid == this.team.id) && element.complete == 100 && element.winnerteamid != this.team.id) tempArr.push(element);
              });
              
              this.lostGames = tempArr;    
            });
          }
      
      getTip():void {
            this.dataService.getTips().subscribe(temp => { 
              var tempArr: Tip[] = [];
        
              temp.forEach(element => {
                if((element.hteamid == this.team.id || element.ateamid == this.team.id) &&  element.tipteamid == this.team.id ) tempArr.push(element);
              });
              
              this.tip= tempArr;    
            });
        }

      getRivalTeams(): void {
          this.dataService.getTeams().subscribe(temp => { this.rivalTeams = temp; });
      }

      onRivalSelect(RivalTeam: Team): void {
            this.selectedRivalTeam = RivalTeam;
            console.log(this.selectedRivalTeam.name)
            this.getRivalGames();
          }
        

  getRivalGames(): void {
      this.dataService.getGames().subscribe(temp => { 
        var tempArr: Game[] = [];
  
        temp.forEach(element => {
          if((element.hteamid == this.team.id || element.ateamid == this.team.id) && (element.hteamid == this.selectedRivalTeam.id || element.ateamid == this.selectedRivalTeam.id) && element.complete == 100) tempArr.push(element);
        });
        
        this.rivalGames = tempArr;    
      });
    }


}

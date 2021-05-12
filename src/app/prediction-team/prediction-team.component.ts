
import { Component, OnInit} from '@angular/core';
import { Standings } from '../standings';


import { DataService } from '../data.service';


@Component({
  selector: 'app-prediction-team',
  templateUrl: './prediction-team.component.html',
  styleUrls: ['./prediction-team.component.css']
})
export class PredictionTeamComponent implements OnInit {

  theStandings!: Standings[];


  constructor(private dataService: DataService) { }

       ngOnInit(): void {
       this.getRanks();
      }

      getRanks(): void {
            this.dataService.getStandings().subscribe(temp => { this.theStandings = temp; });
          }

}


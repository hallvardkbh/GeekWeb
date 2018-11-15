import { Rounds } from './../../models/standings';
import { StandingsService } from './../../services/standings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {
  public standings: Rounds[] = new Array<Rounds>();

  constructor(private standingsService: StandingsService) {
    this.standingsService.handleResult().subscribe(rounds => {
      this.standings = rounds;
    });
  }

  displayedColumns: string[] = ['position', 'team', 'score'];
}

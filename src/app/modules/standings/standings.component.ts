import { Rounds } from './../../models/standings';
import { StandingsService } from './../../services/standings.service';
import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {
  public standings: Rounds[] = new Array<Rounds>();

  constructor(private standingsService: StandingsService) {
    this.standingsService.handleResult().subscribe(rounds => {
      rounds[0]['teams'] = _.orderBy(rounds[0]['teams'], ['position'], ['asc']);
      rounds[3]['teams'] = _.orderBy(rounds[3]['teams'], ['position'], ['asc']);
      this.standings = rounds;
    });
  }

  displayedColumns: string[] = ['position', 'team', 'score'];
}

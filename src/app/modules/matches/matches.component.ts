import { MatchesService } from './../../services/matches.service';
import { Match } from './../../models/match';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: Match[];

  displayedColumns: ['*'];

  constructor(private matchService: MatchesService) {
    this.matchService.handleResult().subscribe(matches => {
      console.log('Matches:', matches);
      this.matches = matches;
    });
  }

  ngOnInit() {}
}

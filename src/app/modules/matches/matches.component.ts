import { MatchesService } from './../../services/matches.service';
import { Match } from './../../models/match';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: Match[];
  dataSource = new MatTableDataSource<Match>();

  displayedColumns: string[] = [
    'teamName0',
    'harvested0',
    'army0',
    'killed',
    'army1',
    'harvested1',
    'teamName1',
    'downloads'
  ];

  constructor(private matchService: MatchesService) {
    this.matchService.handleResult().subscribe(matches => {
      console.log(matches);

      matches = matches.reverse();
      this.matches = matches;
      this.dataSource.data = matches;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  downloadReplayClicked(matchId: string, teamId: number) {
    this.matchService.getReplayDownloadUrl(matchId, teamId).subscribe(url => {
      window.open(url, '_blank');
    });
  }

  downloadStatsClicked(matchId: string) {
    this.matchService.getStatsDownloadUrl(matchId).subscribe(url => {
      window.open(url, '_blank');
    });
  }
}

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
    'teamName1'
  ];

  constructor(private matchService: MatchesService) {
    this.matchService.handleResult().subscribe(matches => {
      matches.reverse();
      this.matches = matches;
      this.dataSource.data = matches;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  downloadClicked(matchId: string, teamId: number) {
    this.matchService.getReplayDownloadUrl(matchId, teamId).subscribe(url => {
      window.open(url, '_blank');
    });
  }
}

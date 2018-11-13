import { Component, OnInit } from '@angular/core';
import { GameDataService } from './../../game-data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  public games: any;

  constructor(private gameDataService: GameDataService) {
    this.games = this.gameDataService.getGames();
  }

  displayedColumns: string[] = ['position', 'team', 'score'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {}
}
export interface PeriodicElement {
  position: number;
  team: string;
  race: string;
  score: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, team: 'Notorious', race: 'Zerg', score: 17 },
  { position: 2, team: 'Big', race: 'Zerg', score: 14 },
  { position: 3, team: 'Banananamen', race: 'Prot', score: 12 },
  { position: 4, team: 'Candyshop', race: 'Zerg', score: 11 },
  { position: 5, team: 'Yessir', race: 'Terr', score: 9 },
  { position: 6, team: 'Nørds', race: 'Terr', score: 7 }
];

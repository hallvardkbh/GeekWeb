import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  constructor(private httpClient: HttpClient) {}

  getGames() {
    const gameData = this.httpClient.get('../assets/dummy/game-stats.json');
    return gameData;
  }
}

import { Component } from '@angular/core';
import { GameDataService } from './game-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GeekRetreat 2018 - Starcraft II';
  now: Date = new Date();
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 60000);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rounds } from '../models/standings';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {
  constructor(private db: AngularFireDatabase) {}

  public handleResult(): Observable<Rounds[]> {
    return this.db
      .list('/rounds')
      .valueChanges()
      .pipe(map(rounds => <Rounds[]>rounds));
  }
}

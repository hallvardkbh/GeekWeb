import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Match,
  RawTeamMatchData,
  RawMatch,
  MatchTeamStats
} from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  constructor(
    private afStorage: AngularFireStorage,
    private db: AngularFireDatabase
  ) {}

  public handleResult(): Observable<Match[]> {
    return this.db
      .list('/matches')
      .snapshotChanges()
      .pipe(
        map(actions =>
          this.parseResult(
            actions.map(a => {
              const data = a.payload.val();
              const id = a.payload.key;
              return { id, ...data };
            })
          )
        )
      );
    // return this.db
    //   .list('/matches')
    //   .valueChanges()
    //   .pipe(map(matches => this.parseResult(matches)));
  }

  public getReplayDownloadUrl(
    matchId: string,
    teamId: number
  ): Observable<string> {
    return this.afStorage
      .ref(`/matches/${matchId}/replay${teamId}.SC2Replay`)
      .getDownloadURL();
  }

  private parseResult(matches: any[]): Match[] {
    const parsedMatches = new Array<Match>();
    matches.forEach((match: any) => {
      const parsedMatch: Match = {
        id: match.id,
        winner: match.winner,
        record_ok: match.record_ok,
        data: [
          this.toDisplayMatches(match.data[0]),
          this.toDisplayMatches(match.data[1])
        ]
      };
      parsedMatches.push(parsedMatch);
    });
    return parsedMatches;
  }

  private toDisplayMatches(match: RawTeamMatchData): MatchTeamStats {
    if (!match) {
      return null;
    }
    const displayMatch: MatchTeamStats = {
      team_name: match.team_name,
      race: match.race,
      killed:
        match.m_stats.m_scoreValueMineralsKilledArmy +
        match.m_stats.m_scoreValueMineralsKilledEconomy +
        match.m_stats.m_scoreValueMineralsKilledTechnology +
        match.m_stats.m_scoreValueVespeneKilledArmy +
        match.m_stats.m_scoreValueVespeneKilledEconomy +
        match.m_stats.m_scoreValueVespeneKilledTechnology,
      harvested: [
        match.m_stats.m_scoreValueMineralsUsedCurrentArmy +
          match.m_stats.m_scoreValueMineralsUsedCurrentEconomy +
          match.m_stats.m_scoreValueMineralsUsedCurrentTechnology +
          match.m_stats.m_scoreValueMineralsUsedInProgressArmy +
          match.m_stats.m_scoreValueMineralsUsedInProgressEconomy +
          match.m_stats.m_scoreValueMineralsUsedInProgressTechnology +
          match.m_stats.m_scoreValueMineralsCurrent,
        match.m_stats.m_scoreValueVespeneUsedCurrentArmy +
          match.m_stats.m_scoreValueVespeneUsedCurrentEconomy +
          match.m_stats.m_scoreValueVespeneUsedCurrentTechnology +
          match.m_stats.m_scoreValueVespeneUsedInProgressArmy +
          match.m_stats.m_scoreValueVespeneUsedInProgressEconomy +
          match.m_stats.m_scoreValueVespeneUsedInProgressTechnology +
          match.m_stats.m_scoreValueVespeneCurrent
      ],
      army: [
        match.m_stats.m_scoreValueMineralsUsedInProgressArmy +
          match.m_stats.m_scoreValueMineralsUsedCurrentArmy,
        match.m_stats.m_scoreValueVespeneUsedCurrentArmy +
          match.m_stats.m_scoreValueVespeneUsedInProgressArmy
      ]
    };
    return displayMatch;
  }
}

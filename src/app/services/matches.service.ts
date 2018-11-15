import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Match, RawTeamMatchData, MatchTeamStats } from '../models/match';

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
  }

  public getReplayDownloadUrl(
    matchId: string,
    teamId: number
  ): Observable<string> {
    return this.afStorage
      .ref(`/matches/${matchId}/replay${teamId}.SC2Replay`)
      .getDownloadURL();
  }

  public getStatsDownloadUrl(matchId: string): Observable<string> {
    return this.afStorage
      .ref(`/matches/${matchId}/${matchId.split('-', 1)[0]}.json`)
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
          match.m_stats.m_scoreValueMineralsCurrent +
          match.m_stats.m_scoreValueMineralsLostArmy +
          match.m_stats.m_scoreValueMineralsLostEconomy +
          match.m_stats.m_scoreValueMineralsLostTechnology -
          1000,
        match.m_stats.m_scoreValueVespeneUsedCurrentArmy +
          match.m_stats.m_scoreValueVespeneUsedCurrentEconomy +
          match.m_stats.m_scoreValueVespeneUsedCurrentTechnology +
          match.m_stats.m_scoreValueVespeneUsedInProgressArmy +
          match.m_stats.m_scoreValueVespeneUsedInProgressEconomy +
          match.m_stats.m_scoreValueVespeneUsedInProgressTechnology +
          match.m_stats.m_scoreValueVespeneCurrent +
          match.m_stats.m_scoreValueVespeneLostArmy +
          match.m_stats.m_scoreValueVespeneLostEconomy +
          match.m_stats.m_scoreValueVespeneLostTechnology
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

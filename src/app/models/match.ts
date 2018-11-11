export interface Match {
  winner: number;
  record_ok: number;
  stats: MatchTeamStats[];
}

export interface MatchTeamStats {
  teamName: string;
  race: Race;
  killed: number;
  harvested: number[];
  army: number[];
}

export enum Race {
  Terran,
  Protoss,
  Zerg
}

export class RawMatch {
  winner: number;
  record_ok: number;
  // data: TeamMatchData[];
  0: TeamMatchData;
  1: TeamMatchData;
  constructor(init?: Partial<RawMatch>) {
    Object.assign(init);
  }
}

export class TeamMatchData {
  m_playerId: string;
  repo_name: string;
  race: Race;
  m_stats: {
    m_scoreValueMineralsCurrent: number;
    m_scoreValueMineralsUsedCurrentEconomy: number;
    m_scoreValueMineralsUsedCurrentArmy: number;
    m_scoreValueMineralsUsedCurrentTechnology: number;
    m_scoreValueMineralsUsedInProgressArmy: number;
    m_scoreValueMineralsUsedInProgressEconomy: number;
    m_scoreValueMineralsUsedInProgressTechnology: number;
    m_scoreValueMineralsKilledTechnology: number;
    m_scoreValueMineralsKilledArmy: number;
    m_scoreValueMineralsKilledEconomy: number;
    m_scoreValueVespeneCurrent: number;
    m_scoreValueVespeneUsedCurrentEconomy: number;
    m_scoreValueVespeneUsedCurrentArmy: number;
    m_scoreValueVespeneUsedCurrentTechnology: number;
    m_scoreValueVespeneUsedInProgressArmy: number;
    m_scoreValueVespeneUsedInProgressEconomy: number;
    m_scoreValueVespeneUsedInProgressTechnology: number;
    m_scoreValueVespeneKilledTechnology: number;
    m_scoreValueVespeneKilledArmy: number;
    m_scoreValueVespeneKilledEconomy: number;
  };
  constructor(init?: Partial<TeamMatchData>) {
    Object.assign(init);
  }
}

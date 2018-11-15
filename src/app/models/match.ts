export interface Match {
  id: number;
  winner: number;
  record_ok: number;
  data: MatchTeamStats[];
}

export interface MatchTeamStats {
  team_name: string;
  race: Race;
  killed: number;
  harvested: number[];
  army: number[];
}

export enum Race {
  Terr,
  Prot,
  Zerg
}

// export class MatchDisplay {
//   teamName0: [string, Race];
//   harvested0: string;
//   army0: string;
//   killed: string;
//   army1: string;
//   harvested1: string;
//   teamName1: [string, Race];
//   constructor(init?: Partial<MatchDisplay>) {
//     Object.assign(init);
//   }
// }

export class RawMatch {
  winner: number;
  record_ok: number;
  data: RawTeamMatchData[];
  constructor(init?: Partial<RawMatch>) {
    Object.assign(init);
  }
}

export class RawTeamMatchData {
  m_playerId: string;
  repo_name: string;
  team_name: string;
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
    m_scoreValueMineralsLostTechnology: number;
    m_scoreValueMineralsLostArmy: number;
    m_scoreValueMineralsLostEconomy: number;
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
    m_scoreValueVespeneLostTechnology: number;
    m_scoreValueVespeneLostArmy: number;
    m_scoreValueVespeneLostEconomy: number;
  };
  constructor(init?: Partial<RawTeamMatchData>) {
    Object.assign(init);
  }
}

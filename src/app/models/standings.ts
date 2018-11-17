export class Rounds {
  round1: Teams;
  round2: Teams;
  final: Team[];
  total: Team[];
  constructor(init?: Partial<Rounds>) {
    Object.assign(init);
  }
}

export class Teams {
  zerg: Team[];
  prot: Team[];
  terr: Team[];
  constructor(init?: Partial<Teams>) {
    Object.assign(init);
  }
}

export class Team {
  position: number;
  name: string;
  score: number;
  race: string;
  constructor(init?: Partial<Team>) {
    Object.assign(init);
  }
}

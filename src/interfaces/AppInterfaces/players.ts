export interface PlayerResponse {
    get: string;
    parameters: {
      team: string;
      league: string;
      season: string;
    };
    errors: any[];
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: PlayerItem[];
  }
  
export interface PlayerItem {
    player: {
      age: number;
      birth: {
        country: string;
        date: string;
        place: string | null;
      };
      firstname: string;
      height: number | null;
      id: number;
      injured: boolean;
      lastname: string;
      name: string;
      nationality: string;
      photo: string;
      weight: number | null;
    };
    statistics: {
      cards: {
        red: number | null;
        yellow: number | null;
        yellowred: number | null;
      };
      dribbles: {
        attempts: number | null;
        past: number | null;
        success: number | null;
      };
      duels: {
        total: number | null;
        won: number | null;
      };
      fouls: {
        committed: number | null;
        drawn: number | null;
      };
      games: {
        appearences: number | null;
        captain: boolean;
        lineups: number | null;
        minutes: number | null;
        number: number | null;
        position: string;
        rating: number | null;
      };
      goals: {
        assists: number | null;
        conceded: number | null;
        saves: number | null;
        total: number | null;
      };
      league: {
        country: string;
        flag: string;
        id: number;
        logo: string;
        name: string;
        season: number;
      };
      passes: {
        accuracy: number | null;
        key: number | null;
        total: number | null;
      };
      penalty: {
        commited: number | null;
        missed: number | null;
        saved: number | null;
        scored: number | null;
        won: number | null;
      };
      shots: {
        on: number | null;
        total: number | null;
      };
      substitutes: {
        bench: number | null;
        in: number | null;
        out: number | null;
      };
      tackles: {
        blocks: number | null;
        interceptions: number | null;
        total: number | null;
      };
    };
    team: {
      id: number;
      logo: string;
      name: string;
    };
}

export interface PlayersProps{
    league: string;
    team: string;
}

export interface PlayerInfoProps{
  data: PlayerResponse;
  id: number;
  // image: string;
  // name: string;
  // age: number;
  // birth: string;
  // nationality: string;
}


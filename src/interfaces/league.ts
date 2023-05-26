export interface LeagueResponse {
    get: string;
    parameters: any[];
    errors: any[];
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: LeagueItem[];
}
  
export interface LeagueItem {
    league: {
      id: number;
      name: string;
      type: string;
      logo: string;
    };
    country: {
      name: string;
      code: string | null;
      flag: string | null;
    };
    seasons: SeasonItem[];
}
  
export interface SeasonItem {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: Coverage;
}
  
export interface Coverage {
    fixtures: {
      events: boolean;
      lineups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean;
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
}

export interface LeaguesProps {
  country: string;
}
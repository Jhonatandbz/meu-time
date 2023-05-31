export interface TeamStatisticsResponse {
    get: string;
    parameters: {
      team: string;
      season: string;
      league: string;
    };
    errors: any[];
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: TeamStatisticsItem;
  }
  
export interface TeamStatisticsItem {
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
    };
    team: {
      id: number;
      name: string;
      logo: string;
    };
    form: string;
    fixtures: {
      played: {
        home: number;
        away: number;
        total: number;
      };
      wins: {
        home: number;
        away: number;
        total: number;
      };
      draws: {
        home: number;
        away: number;
        total: number;
      };
      loses: {
        home: number;
        away: number;
        total: number;
      };
    };
    goals: {
      for: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
        minute: {
          [key: string]: {
            total: number | null;
            percentage: string | null;
          };
        };
      };
      against: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
        minute: {
          [key: string]: {
            total: number | null;
            percentage: string | null;
          };
        };
      };
    };
    biggest: {
      streak: {
        wins: number;
        draws: number;
        loses: number;
      };
      wins: {
        home: string;
        away: string;
      };
      loses: {
        home: string;
        away: string;
      };
      goals: {
        for: {
          home: number;
          away: number;
        };
        against: {
          home: number;
          away: number;
        };
      };
    };
    clean_sheet: {
      home: number;
      away: number;
      total: number;
    };
    failed_to_score: {
      home: number;
      away: number;
      total: number;
    };
    penalty: {
      scored: {
        total: number;
        percentage: string;
      };
      missed: {
        total: number;
        percentage: string;
      };
      total: number;
    };
    lineups: {
      formation: string;
      played: number;
    }[];
    cards: {
      yellow: {
        [key: string]: {
          total: number;
          percentage: string;
        };
      };
      red: {
        [key: string]: {
          total: number | null;
          percentage: string | null;
        };
      };
    };
}

export interface StatsTableProps {
    stats: {
      played: { home: number; away: number; total: number };
      wins: { home: number; away: number; total: number };
      draws: { home: number; away: number; total: number };
      loses: { home: number; away: number; total: number };
    };
}

export interface StaticProps{
    league: string;
    team: string;
}
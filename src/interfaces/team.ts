export interface TeamResponse {
    get: string;
    parameters: {
      league: string;
      season: string;
    };
    errors: any[];
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: TeamItem[];
}
  
export interface TeamItem {
    team: {
      id: number;
      name: string;
      code: string;
      country: string;
      founded: number;
      national: boolean;
      logo: string;
    };
    venue: {
      id: number;
      name: string;
      address: string;
      city: string;
      capacity: number;
      surface: string;
      image: string;
    };
}

export interface TeamProps{
    league: string
}
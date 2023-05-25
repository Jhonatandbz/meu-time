import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"
import leagues from "../leages.json"

interface LeagueResponse {
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

interface LeagueItem {
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

interface SeasonItem {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: Coverage;
}

interface Coverage {
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

const OptionsList = () => {

    const [data, setData] = useState<LeagueResponse | null>(null);

    const leagueResponse: LeagueResponse = leagues as LeagueResponse;
    console.log(leagueResponse.response)

    
    useEffect(()=>{
        
        const fetchData = async () =>{
            try{
                const response = await makeGetRequest({endpoint: 'leagues', query: 'country', select: 'Brazil'});
                setData(response);
            }catch(error){
                console.error(error);
            }
        }

        fetchData();

    },[])

    if (!data) {
      return <div>Carregando...</div>;
    }

    return (
        <>

        
        <label htmlFor="leaguesList">Ligas</label>
        <select key="leaguesList">
            {data.response.map((item) => (
                <option key={item.league.id} value={item.league.name}>
                    {item.league.name}
                </option>
            ))}
        </select>
        </>
  );
};

export default OptionsList;

import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"
import {LeagueResponse, LeagueItem, LeaguesProps} from "../interfaces/league"

import database from "../json/leagues.json"

const LeagueList: React.FC<LeaguesProps> = ({country, onSelect}) => {

    const [data, setData] = useState<LeagueResponse | null>(null);
    const [league, setLeague] = useState<LeagueItem | null>(null);
    useEffect(()=>{
        
        const fetchData = async () =>{

            const endpoint = `leagues?country=${encodeURIComponent(country)}`
            
            try{
                const response = await makeGetRequest({endpoint: endpoint});
                setData(response);
            }catch(error){
                console.error(error);
            }
        }

        fetchData();

    },[country])

    if (!data) {
      return <div>Carregando...</div>;
    }

    const leagueSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {

        const selectedLeagueId = parseInt(event.target.value, 10);
        const selectedLeague = data.response.find((item) => item.league.id === selectedLeagueId);   
        if(selectedLeague){
            setLeague(selectedLeague)
        }
    }

    const seasonSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {

        const selectedSeadon = event.target.value
        const leagueSeason = league?.league.id + ','+ selectedSeadon //concat id da liga selecionada e a Season
        onSelect(leagueSeason) 

    }

    return (
        <>
        <label htmlFor="leaguesList">Ligas</label>
        <select key="leaguesList" onChange={leagueSelected}>
            <option value=''></option>
            {database.response.map(({league}) => (
                <option key={league.id} value={league.id}>
                    {league.name}
                </option>
            ))}
        </select>

        <label htmlFor="seasonList">Temporada</label>
        <select key="seasonList" onChange={seasonSelected}>
            <option value=''></option>
            {league?.seasons.map((item, index) => (
                <option key={index} value={item.year}>
                    {item.year}
                </option>
            ))}
        </select>
        </>
  );
};

export default LeagueList;

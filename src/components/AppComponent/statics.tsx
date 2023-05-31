import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../../adapters/get"
import "../styles/statics.css"
import { StaticProps, TeamStatisticsResponse } from "../../interfaces/static";

import database from "../../json/statistics.json"

const TeamStatics: React.FC<StaticProps> = ({league, team}) =>{

    const [data, setData] = useState<TeamStatisticsResponse | null>(null)

    useEffect (()=>{ 

        const leagueSeason = league.split(',')
        const endpoint = `teams/statistics?league=${encodeURIComponent(leagueSeason[0])}&season=${encodeURIComponent(leagueSeason[1])}&team=${encodeURIComponent(team)}`

        const fetchData = async () =>{
            try{
                const response = await makeGetRequest({endpoint: endpoint});
                setData(response);
            }catch(error){
                console.error(error);
            }
        }

        fetchData();

    }, [team])

    // if(!data?.response.lineups){
    //     return <h1></h1>
    // }

    return(
        <>
        <div className="staticsContainer">
            <span className="formation">
                <h3>Formação mais utilizada na temporada: </h3>   
                <h2>{database?.response.lineups[0].formation}</h2> 
            </span>

            <span className="results">
                <h2>Resultados: </h2>
                <label htmlFor="fixtures played">Jogos</label>
                <p className="played">{database?.response.fixtures.played.total}</p> 
                <label htmlFor="fixtures wins">Vitórias</label>
                <p className="wins">{database?.response.fixtures.wins.total}</p>
                <label htmlFor="fixtures loses">Derrotas</label>
                <p className="loses">{database?.response.fixtures.loses.total}</p>
                <label htmlFor="fixtures draws">Empates</label>
                <p className="draws">{database?.response.fixtures.draws.total}</p>
            </span>
        </div>
        </>
    )
}

export default TeamStatics;
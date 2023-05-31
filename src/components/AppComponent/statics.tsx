import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../../adapters/get"
import "../../styles/statics.css"
import { StaticProps, TeamStatisticsResponse, StatsTableProps } from "../../interfaces/AppInterfaces/static";

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

    const {played, wins, draws, loses} = database.response.fixtures
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

            <table className="staticsTable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Casa</th>
                        <th>Fora</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jogos</td>
                        <td>{played.home}</td>
                        <td>{played.away}</td>
                        <td>{played.total}</td>
                    </tr>
                    <tr>
                        <td>Vitórias</td>
                        <td>{wins.home}</td>
                        <td>{wins.away}</td>
                        <td>{wins.total}</td>
                    </tr>
                    <tr>
                        <td>Empates</td>
                        <td>{draws.home}</td>
                        <td>{draws.away}</td>
                        <td>{draws.total}</td>
                    </tr>
                    <tr>
                        <td>Derrotas</td>
                        <td>{loses.home}</td>
                        <td>{loses.away}</td>
                        <td>{loses.total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default TeamStatics;
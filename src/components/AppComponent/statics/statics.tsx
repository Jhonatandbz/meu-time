import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../../../adapters/get"
import "../../../styles/statics.css"
import { StaticProps, TeamStatisticsResponse } from "../../../interfaces/AppInterfaces/static";
import Graphic from "./goalsGrafic"

import database from "../../../json/statistics.json"

const TeamStatics: React.FC<StaticProps> = ({league, team}) =>{

    const [isFormation, setIsFormation] = useState<String>('null');
    const [data, setData] = useState<TeamStatisticsResponse | null>(null);

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

        if(league && team){
            fetchData();
        }
        
    }, [team])

    useEffect(() => {
        if (data) {
          if (data.response.lineups[0].formation.length <= 0) {
            setIsFormation('Sem dados de formação');
          } else {
            setIsFormation(data.response.lineups[0].formation);
          }
        }
    }, [data]);


    if(!data?.response){
        return <h1></h1>
    }

    const {played, wins, draws, loses} = data.response.fixtures

    return(
        <>
        <div className="staticsContainer">
            <div className="formationTable">
                <span className="formation">
                    <h3><em>Formação mais utilizada:</em> </h3>   
                    <h2>{isFormation}</h2> 
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

            <Graphic data={data}/>
        </div>

        </>
    )
}

export default TeamStatics;
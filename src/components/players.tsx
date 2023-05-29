import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"
import "../styles/players.css"
import { PlayersProps, PlayerResponse} from "../interfaces/players";

import database from "../json/players.json"

const PlayerList: React.FC<PlayersProps> = ({league, team}) => {

    const [data, setData] = useState<PlayerResponse | null>(null)

    useEffect(()=>{

        const leagueSeason = league.split(',')
        const endpoint = `players?team=${team}&league=${encodeURIComponent(leagueSeason[0])}&season=${encodeURIComponent(leagueSeason[1])}`
        console.log()

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

    }, [team, league])

    return(
        <ul className="playersList">
            {data?.response.map(({player}) => (
                <li key={player.id} className="playersListItem">
                   <h4>{player.firstname} {player.lastname}</h4>
                   <p>Age: {player.age}</p>
                   <p>Country: {player.nationality}</p>
                </li>
            ))}
        </ul>
    )
}

export default PlayerList;
import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../../../adapters/get"
import InfoPlayers from "./infoPlayers"
import "../../../styles/players.css"
import { PlayersProps, PlayerResponse, PlayerItem} from "../../../interfaces/AppInterfaces/players";

import database from "../../../json/players.json"

const PlayerList: React.FC<PlayersProps> = ({league, team}) => {

    const [data, setData] = useState<PlayerResponse | null>(null);
    const [player, setPlayer] = useState<number>(0);
    
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

    const dataPlayer = (id: number) =>{
        setPlayer(id);
    }

    if(!data?.response){
        return <h1></h1>
    }
    
    return(
        <div className="containerPlayer">

            <InfoPlayers data={data} id={player}/>

            <div className="list">
                <h3><em>Jogadores</em></h3>
                <ul className="playersUl">
                    
                    <span className="listPlayer"></span>
                    {data?.response.map(({player}, index) => (
                        <li key={player.id} className="playersListItem">
                        <h4 onClick={() => dataPlayer(player.id)}>{player.firstname} {player.lastname}</h4>
                        <p><em>Idade: {player.age}</em></p>
                        <p><em>Nacionalidade: {player.nationality}</em> </p>
                        <span className="liItem"></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PlayerList;
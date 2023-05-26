import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"
import { TeamProps, TeamResponse } from "../interfaces/team";

const TeamList: React.FC<TeamProps> = ({league}) => {

    const [data, setData] = useState<TeamResponse | null>(null)

    useEffect(()=>{


        const leagueSeason = league.split(',')
        const endpoint = `teams?league=${encodeURIComponent(leagueSeason[0])}&season=${encodeURIComponent(leagueSeason[1])}`

        const fetchData = async () =>{
            try{
                const response = await makeGetRequest({endpoint: endpoint});
                setData(response);
            }catch(error){
                console.error(error);
            }
        }

        fetchData();

    }, [league])

    if (!data) {
        return <div>Carregando...</div>;
      }

    return(
        <>
        <label htmlFor="teamsList">Times</label>
        <select key="teamsList">
            {data.response.map((item) => (
                <option key={item.team.id} value={item.team.name}>
                    {item.team.name}
                </option>
            ))}
        </select>
        </>
    )
}

export default TeamList;
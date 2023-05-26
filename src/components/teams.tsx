import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"
import { TeamProps, TeamResponse } from "../interfaces/team";

import database from "../json/teams.json"

const TeamList: React.FC<TeamProps> = ({league, onSelect}) => {

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

    const teamSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value)
    }


    return(
        <>
        <label htmlFor="teamsList">Times</label>
        <select key="teamsList" onChange={teamSelected} className="list teamsList">
            <option value=''></option>
            {database?.response.map(({team}) => (
                <option key={team.id} value={team.id}>
                    {team.name}
                </option>
            ))}
        </select>
        </>
    )
}

export default TeamList;
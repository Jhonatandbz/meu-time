import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"
import {LeagueResponse, LeaguesProps} from "../interfaces/league"

// import database from "../leages.json"

const OptionsList: React.FC<LeaguesProps> = ({country}) => {

    const [data, setData] = useState<LeagueResponse | null>(null);
    const [league, setLeague] = useState('');

    useEffect(()=>{
        
        const fetchData = async () =>{
            try{
                const response = await makeGetRequest({endpoint: 'leagues', query: 'country', select: country});
                setData(response);
            }catch(error){
                console.error(error);
            }
        }

        fetchData();

    },[country])

    useEffect(()=>{
      console.log(league)
    }, [league] )

    if (!data) {
      return <div>Carregando...</div>;
    }

    const leagueSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setLeague(event.target.value)
    }

    return (
        <>
        <label htmlFor="leaguesList">Ligas</label>
        <select key="leaguesList" onChange={leagueSelected}>
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

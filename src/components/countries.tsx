import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"
import {Country, CountriesProps} from "../interfaces/country"

import database from "../json/country.json"

const CountryList: React.FC<CountriesProps> = ({onSelect}) => {

    const [data, setData] = useState<Country[]>([]);
    
    useEffect(()=>{

        
        const fetchData = async () =>{
            try{
                const response = await makeGetRequest({endpoint: 'countries'});
                setData(response.response);
            }catch(error){
                console.error(error);
            }
        }

        fetchData();

    },[])


    const countrySelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value)
    }

    return (
        <>
        <label htmlFor="countriesList">Países</label>
        <select key="countriesList" onChange={countrySelected} className="list countriesList">
            <option value=''></option>
            {database.response.map((option, index) => (
                <option key={index} value={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
        </>
  );
};

export default CountryList;

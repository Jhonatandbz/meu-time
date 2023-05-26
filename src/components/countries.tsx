import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"
import {Country, CountriesProps} from "../interfaces/country"

// import database from "../countries.json"

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

    if (!data) {
        return <div>Carregando...</div>;
    }

    const countrySelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value)
    }

    return (
        <>
        <label htmlFor="countriesList">Países</label>
        <select key="countriesList" onChange={countrySelected}>
            {data.map((option, index) => (
                <option key={index} value={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
        </>
  );
};

export default CountryList;

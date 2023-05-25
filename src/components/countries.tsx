import React, {useEffect, useState} from "react";
import {makeGetRequest} from "../adapters/get"

interface Options{
    name: string;
    code: string;
    flag: string;
}

const OptionsList = () => {

    const [data, setData] = useState<Options[]>([]);
    
    useEffect(()=>{

        const fetchData = async () =>{
            try{
                const response = await makeGetRequest({endpoint: 'countries', query: '', select: ''});
                setData(response.response);
            }catch(error){
                console.error(error);
            }
        }

        fetchData();

    },[])

    return (
        <>
        <label htmlFor="countriesList">Países</label>
        <select key="countriesList">
            {data.map((option: Options) => (
                <option key={option.code} value={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
        </>
  );
};

export default OptionsList;

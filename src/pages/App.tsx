import React, {useState} from "react";
import Countries from "../components/countries"
import Leagues from "../components/leagues"

const MeuTime: React.FC = () =>{

    const [selectedCountry, setSelectedCountry] = useState("")

    const countrySelectedEvent = (country: string) => {
        setSelectedCountry(country)
    }

    return(
        <>
            <div className="countrie">
                <Countries onSelect={countrySelectedEvent}/>
            </div>

            <h1>{selectedCountry}</h1>

            <div className="leagues">
                <Leagues country={selectedCountry}/>
            </div>

        </>
    )

}

export default MeuTime;
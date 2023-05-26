import React, {useState} from "react";
import Countries from "../components/countries"
import Leagues from "../components/leagues"
import Teams from "../components/teams"

const MeuTime: React.FC = () =>{

    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedLeague, setSelectedLeague] = useState("")

    const countrySelectedEvent = (country: string) => {
        setSelectedCountry(country)
    }

    const leagueSelectedEvent = (league: string) => {
        setSelectedLeague(league)
    }

    return(
        <>
            <div className="countrie">
                <Countries onSelect={countrySelectedEvent}/>
            </div>

            <div className="leagues">
                <Leagues country={selectedCountry} onSelect={leagueSelectedEvent}/>
            </div>

            <div className="teams">
                <Teams league={selectedLeague}/>
            </div>

        </>
    )

}

export default MeuTime;